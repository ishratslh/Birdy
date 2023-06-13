// Contient le code qui définit le serveur

const express = require('express');
const session = require('express-session');
const apiRouter = require('./api');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use('./api', apiRouter);

module.exports = app;