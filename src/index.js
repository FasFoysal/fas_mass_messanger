require('dotenv').config();
const express = require('express');
const app = express();
require("./db/conndb");
const userouter = require('./router/router');
const hbs = require("hbs");
const path = require("path");
const cors = require("cors");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
// socket io
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

const port = process.env.openPort || process.env.port

app.use(express.urlencoded());
app.use(express.static("public"))
app.use(('/bootstrap'),express.static(path.join(__dirname,"./../node_modules/bootstrap/dist")))
app.use(('/style'),express.static(path.join(__dirname,"./../template/style")))
app.use(cookieParser());

// view engine hbs render
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname,"../template");
app.set("views",viewsPath)
const hbsPartials = path.join(__dirname,"../template/partials");
hbs.registerPartials(hbsPartials);

// routing
app.use(userouter);
app.get(("*"),((req,res)=>{
    res.render("error")
}))

// socket io & port listen
http.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
  });