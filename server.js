
var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Server is running");

var socket = require("socket.io");
let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log("New connection with the id " + socket.id);
  
  let sendData = '';
  let sendChecker = false;
  
  socket.on("text", function(dataText,checker) {
    sendData = dataText;
    sendChecker =checker;
    console.log(checker);
    
    //datele au nevoie de ceva timp ca sa pot fi trimise aparent in version anterior eu nu asteptam si trrimiteam date undifiens / null
    if (sendData) {
      socket.broadcast.emit("dataToClient", sendData,sendChecker);
    }
  });
}
