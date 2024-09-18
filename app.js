const express = require('express');
const socketio=require("socket.io");
const http=require("http");

const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.get('/',function (res,res){
    res.send("Hellow World");
})

server.listen(3000)