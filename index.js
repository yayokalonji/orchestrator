const express = require("express");
const fs = require('fs');
path = require('path');
bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function(req, res) {
    res.json('Hello World!');
});

app.get('/orchestrator/analize', function(req, res) {
    console.log(req.body);  
    res.json(JSON.parse('{"env:Envelope": {   "env:Body": {"analyzeReturn": {"identificationData": { "orgName": "BC_EMP_CashManagement","sessionId": "4lIBkIamaMcl0r9LZmgOcK35kDw=","transactionId": "etdo2.davivienda.842018102216153987394482846508"},"messageHeader": {"requestId": "7769701","requestType": "ANALYZE","timeStamp": "20181022081547","version": "6.5"},"statusHeader": { "statusCode": "200" },"riskResult": {"riskScore": "2","deviceIdentificationAssurance": "NONE"},"collectableCredentialList":[{"credentialType": "ISP","credentialSpecificType": "Valor1" },{"credentialType": "COUNTRY","credentialSpecificType": "RECENT"},{"credentialType": "CITY","credentialSpecificType": "NO"},{"credentialType": "REAL_ISP","credentialSpecificType": "valor2"},{"credentialType": "DECIMAL_IP","credentialSpecificType": "125467522"}]}}}}'));
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
