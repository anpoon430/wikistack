const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));
//parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
// parses json bodies
app.use(express.json());
app.use(express.static(__dirname + '/public'));

