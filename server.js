const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const router = require('./network/routes');

require('dotenv').config();
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

db(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('Escuchando en http://localhost:3000');
