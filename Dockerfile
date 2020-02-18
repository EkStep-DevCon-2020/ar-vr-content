# DevCon AR VR dockerfile
FROM node:8.16.2
WORKDIR /home
RUN git clone https://github.com/EkStep-DevCon-2020/ar-vr-content.git -b ar-vr
WORKDIR /home/ar-vr-content/client
RUN npm install
WORKDIR /home/ar-vr-content
RUN npm install
EXPOSE 4444
CMD [ "node", "index.js" ]