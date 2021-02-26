FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 7070
CMD [ "node", "server.js" ]
