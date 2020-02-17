
/**
 * Module dependencies
 */

const fs = require('fs');
const multer = require('multer');
const storyBuilder = require('../client/shared/story-builder');
const config = require('../config.json');
const AdmZip = require('adm-zip');


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
      var zip = new AdmZip();
      zip.addLocalFile(`${__dirname}/../public/uploads/s/${story._id}.html`);
      zip.writeZip(`${__dirname}/../public/uploads/s/${story._id}.zip`);
      story.url = storyUrl(story._id)
      story.zipUrl = storyZipUrl(story._id)
      return resolve(story);
    }
  });
});

/**
 * Upload assets using fs
 */

exports.asset = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/../public/uploads`);
    },
    filename: function (req, file, cb) {
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
