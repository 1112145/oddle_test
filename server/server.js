var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'./html')));

app.get('*',(res,req)=>{
    req.sendFile(path.join(__dirname,'index.html'))
})

app.listen(process.env.PORT || 3003, (req, res)=>{
    console.log('Success to start server!');
})