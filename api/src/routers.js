const express = require('express');
const routers = express.Router();

const users = require('./controller/users');

routers.get('/', (req, res) => {
  return res.send('hello');
});

routers.post('/users/create', users.create);
routers.get('/users', users.index);
routers.get('/users/:id', users.show);
routers.delete('/users/:id', users.delete);

module.exports = routers;

axios
fetch