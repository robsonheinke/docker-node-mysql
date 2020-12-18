FROM node:14

WORKDIR /usr/apiMySql

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]