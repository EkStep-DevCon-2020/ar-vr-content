/**
 * Module dependencies
 */
const fs = require('fs');
const axios = require('axios')
const multer = require('multer');
const storyBuilder = require('../client/shared/story-builder');
const config = require('../config.json');
const AdmZip = require('adm-zip');
const CircularJSON = require('circular-json');
const FormData = require('form-data');
const Blob = require('node-blob');
const fetch = require('node-fetch');
const request = require('request');

//URL constants for Devcon 2020
const createContentUrl = 'https://devcon.sunbirded.org/api/private/content/v3/create';
const presignedUrl = 'https://devcon.sunbirded.org/api/private/content/v3/upload/url';
const uploadUrl = 'https://devcon.sunbirded.org/api/private/content/v3/upload';
const publishUrl = 'https://devcon.sunbirded.org/api/private/content/v3/publish';
//Prerequisites for Authorization of Request URLs

const httpOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyZWU4YTgxNDNiZWE0NDU4YjQxMjcyNTU5ZDBhNTczMiJ9.7m4mIUaiPwh_o9cvJuyZuGrOdkfh0Nm0E_25Cl21kxE',
        'user-id': 'mahesh',
        'X-Channel-Id': 'in.ekstep'
    }
};

const httpOptions2 = {
    headers: {
        'enctype': 'multipart/form-data',
        'x-ms-blob-type': 'BlockBlob',
        // 'processData': 'false'
    }
};

/**
 * Upload a story to the filesystem
 * mainly for local testing
 */

exports.story = story => new Promise((resolve, reject) => {
    story.chapters = JSON.parse(story.body);
    fs.writeFile(`${__dirname}/../public/uploads/s/${story._id}.html`, storyBuilder(story),
        err => {
            if (err) {
                return reject(new Error('Error writing to filesystem'));
            } else {
                createZip(story._id)
                story.url = storyUrl(story._id)
                story.zipUrl = storyZipUrl(story._id)
                createContent(story._id);
                return resolve(story);
            }
        });
});

function createZip (id) {
    var zip = new AdmZip();
    // fs.createReadStream(`${__dirname}/../public/uploads/s/${id}.html`).pipe(fs.createWriteStream(`${__dirname}/../public/uploads/s/index.html`));
    fs.rename(`${__dirname}/../public/uploads/s/${id}.html`, `${__dirname}/../public/uploads/index.html`, function (err) {
        if (err) throw err;
        fs.stat(`${__dirname}/../public/uploads/index.html`, function (err, stats) {
          if (err) throw err;
          zip.addLocalFile(`${__dirname}/../public/uploads/index.html`);
        //   console.log(zip)
          zip.writeZip(`${__dirname}/../public/uploads/s/${id}.zip`);
          fs.unlinkSync(`${__dirname}/../public/uploads/index.html`);
        });
    });
}


function createContent(id) {
    const data = {
        request: {
            content: {
                name: id,
                contentType: 'Resource',
                mediaType: 'content',
                code: 'kp.test.res.1',
                mimeType: 'application/vnd.ekstep.html-archive'
            }
        }
    };

    axios.post(createContentUrl, data, {
            headers: httpOptions.headers
        })
        .then((response) => {
            //getPresignedUrl(response.data.result.node_id, id);
            const file = `${__dirname}/../public/uploads/s/${id}.zip`;
            request.post({
                url: `https://devcon.sunbirded.org/api/private/content/v3/upload/${response.data.result.node_id}`,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyZWU4YTgxNDNiZWE0NDU4YjQxMjcyNTU5ZDBhNTczMiJ9.7m4mIUaiPwh_o9cvJuyZuGrOdkfh0Nm0E_25Cl21kxE'
                },
                formData: {
                    file: fs.createReadStream(`${__dirname}/../public/uploads/s/${id}.zip`),
                    filetype: 'zip',
                    filename: `${id}`
                },
            }, function(error, response, body) {
                console.log(JSON.parse(body).result.node_id);
                publishCopiedContent(JSON.parse(body).result.node_id)
            });
        })
        .catch((error) => {
            console.log("Error: Error in retrieving createContentObject  " + error);
      })
}

/***
 *
 * Function for publish content on Content_do_id
 *
 * */
function publishCopiedContent (id){
    const publishAPIUrl = publishUrl +'/'+id;
    const httpOptions = {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyZWU4YTgxNDNiZWE0NDU4YjQxMjcyNTU5ZDBhNTczMiJ9.7m4mIUaiPwh_o9cvJuyZuGrOdkfh0Nm0E_25Cl21kxE',
        'Content-Type': 'application/json'
      }
    };
    const data = {
      request: {
          content: {
            lastPublishedBy: "system"
          }
        }
      }
      try {
          axios.post(publishAPIUrl,data,{headers: httpOptions.headers})
            .then((response) => {
              console.log("Successfully Uploaded:"+ response);
          }).catch((error) => {
              console.log("Error in Response Publish Content API:"+error);
          });
      } catch (error) {
        console.log("Error in Publish API Fail:"+error);
      }
    }

function getPresignedUrl(contentId, id) {
    const data = {
        request: {
            content: {
                fileName: id + '.zip'
            }
        }
    };
    const url = `${presignedUrl}/${contentId}`;

    axios.post(url, data, {
            headers: httpOptions.headers
        })
        .then((response) => {
            uploadFile(response, id);
        })
        .catch((error) => {
            console.log('Error: Error on getPresignedURL with ' + error)
        })
}

function uploadFile(res, id) {
    const url = res.data.result.pre_signed_url;
    const file = `${__dirname}/../public/uploads/s/${id}.zip`;
    request.put({
        url: url,
        headers: httpOptions2.headers,
        formData: {
            file: fs.createReadStream(file),
        },
    }, function(error, response, body) {
        console.log(body);
    });
    
}


function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath)); 
  }


function updateContentWithURL(ContentFileURL, contentId) {
    const data = new FormData();
    data.append('fileUrl', ContentFileURL);
    data.append('mimeType', 'application/vnd.ekstep.html-archive');
    const httpOptions = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyZWU4YTgxNDNiZWE0NDU4YjQxMjcyNTU5ZDBhNTczMiJ9.7m4mIUaiPwh_o9cvJuyZuGrOdkfh0Nm0E_25Cl21kxE',
            'X-Channel-Id': 'in.ekstep',
            'content-type': 'application/json'
        }
    };
    const url = uploadUrl + '/' + contentId;

    axios.post(url, data, {
            headers: httpOptions.headers
        })
        .then((response) => {

        }).catch((error) => {
            console.log('Error: Error on uploadFile with ++++++++++++++++++++++++++++' + error)
        });

}


exports.asset = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, `${__dirname}/../public/uploads`);
        },
        filename: function(req, file, cb) {
            file.location = `${config.server.baseURL}/uploads/${file.originalname}`;
            cb(null, file.originalname);
        }
    })
});

/**
 * Delete story file
 */

exports.deleteStory = id => new Promise((resolve, reject) =>
    fs.unlink(`${__dirname}/../public/uploads/s/${id}.html`), err => {
        if (err) {
            reject(new Error('Error deleting file'));
        } else {
            resolve();
        }
    });

/**
 * Get story url
 */

const storyUrl = id => `/uploads/s/${id}.html`
const storyZipUrl = id => `/uploads/s/${id}.zip`