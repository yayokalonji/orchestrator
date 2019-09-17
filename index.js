'use strict';
const express = require("express");
let jsonData = require('./RS_analyzeMLP.json');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function(req, res) {
    res.json('Hello World!');
});

app.get('/orchestrator/analize', function(req, res) {
    res.status(200).json(jsonData);
});

app.get('/orchestrator/markcase', function(req, res) {
    res.status(200).json({message:'OK'});
});

app.get('/orchestrator/nofify', function(req, res) {
    res.status(200).json({message:'OK'});
});

app.get('/orchestrator/invaliduser', function(req, res) {
    res.status(200).json({message:'OK'});
});

const port = process.env.PORT || 4003;    
app.listen(port);
