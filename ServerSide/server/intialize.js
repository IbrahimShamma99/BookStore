const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const helmet = require('helmet')
const cors = require('cors');
const logger = require("morgan");
const {paths} = require("../helper/");
/**NOTE We are passing app to the server because
 * When you call the “require” function in Node, it uses 
 * the path of the required file as a cache key. If you require 
 * the same file from multiple other files, you typically
 * get the same cached copy of the module sent back to you.
 */

var app = express();
app.use(express.static(paths.userAvatar));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(logger("dev"));

app.use(session({
    secret: 'Pics-App',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
  
//SECTION Requiring DataBase Schemas
require('../User/schema');

module.exports = app;