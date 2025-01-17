'use strict';
require('dotenv').config();
const http = require('http');

const app = require('./app');
const port = 3000;

const server = http.createServer(app);
server.listen(port, ()=> {
    console.log(`Server Started at ${process.env.APP_URL}:${process.env.APP_PORT}`)
});