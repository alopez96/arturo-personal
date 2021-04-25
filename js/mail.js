

var requirejs = require('requirejs');

const express = require('express');
const app = express();

const { db_user, db_password, db, db_cluster, jwt_secret } = require('./config.js');


function sendMail () {
    console.log('mail')
}