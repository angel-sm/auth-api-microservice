FROM node:10-alpine
EXPOSE 8888
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]
