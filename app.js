const express = require('express');
const socketio=require("socket.io");
const http=require("http");
const path = require('path');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.set("view engine",ejs);
app.set(expres.static(path.join(__dirname,"public")))

app.get('/',function (res,res){
    res.send("Hellow World");
})

server.listen(3000)