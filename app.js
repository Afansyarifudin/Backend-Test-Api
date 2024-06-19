'use strict';
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();


// Request Logs Store in Morgan 
app.use(morgan('dev'));

// Url Parser to Json
app.use(
    bodyParser.urlencoded({
        extended: false,
    }));
app.use(bodyParser.json());

// Routes



// Error Handling for enpoint not found

app.use('/api', (req, res) => {
    res.status(200).send('It works');
});

app.use((req, res, next) => {
    const error = new Error('Endpoint Not Found');
    error .status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;