FROM node:latest

WORKDIR /usr/apiMySql

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]