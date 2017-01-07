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

app.listen(8080, function () {
  console.log('Listening on port 8080!');
});