var express = require('express');
var app = express();

// configure Router
//get(),post(),put() and delete()

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello Express</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});


app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});


// define router here..

var server = app.listen(5000, function () {
    console.log("sever is running");
})