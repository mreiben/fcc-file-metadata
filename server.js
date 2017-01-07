var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/get-file-size', upload.single('file'), function(req,res){
    var file_data = req.file;
    var data = {
        "size": parseInt(file_data["size"])
    }
    res.json(data); 
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, function() {
    console.log('Listening on port %d', server_port);
});