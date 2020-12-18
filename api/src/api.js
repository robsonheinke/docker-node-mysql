require('dotenv').config();
const routers = require('./routers');
const express = require('express');

const app = express();

app.use(express.json());
app.use(routers);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log('listening on port ' + process.env.PORT);
});
