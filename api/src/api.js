require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello Renan');
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log('listening on port ' + process.env.PORT);
});