var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.post('/submit-student-data', function (res, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + 'submitted Sucessfully !');
});

var server = app.listen(5000, function () {
    console.log('server is running...');
});