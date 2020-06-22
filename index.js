const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/login/:name', (req, res) => {
  let name = req.params.name;

  var opts = {
    maxAge: 900000,
    httpOnly: true,
  };

  res.cookie('name', name, opts);
  res.end();
});

app.get('/hello', (req, res) => {
  let name = req.cookies.name;

  res.send(`Welcome ${name}!`);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
