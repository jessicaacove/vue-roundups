const express = require('express');
const app = express();
app.use(express.static('roundups'));

const transactions = require('./transactions.json');

app.get('/transactions', function (req, res) {

  res.send(transactions);
});

app.listen(8081, function () {
  console.log(`Example app listening on port 8081!`);
});
