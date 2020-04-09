const express = require('express');

const app = express();

app.use((req, res) => {
  console.log('REQUEST: ' + req.url);
  res.send({});
});

app.listen(9080);

console.log('Listening on 9080');
