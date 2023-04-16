var userInput = document.getElementById("textinput");
const messageDisplay = document.getElementById("message");
const submit = document.getElementById('submitBTN');
let newText;

const dataReader = document.getElementById("reader");
let checker = false;

submit.addEventListener("click", function(event) {
  textShow(event);
});

function textShow(event) {
  event.preventDefault();
  
  newText = document.createElement('p');
  newText.className = 'writer';
  newText.innerHTML = userInput.value;
  checker = true;
  // Pass the newText data as a parameter to the emit() function
  socket.emit('text', newText.innerHTML,checker);
  
  userInput.value="";
  messageDisplay.appendChild(newText);
  document.body.appendChild(document.createElement("br"));
}

var socket = io.connect('http://localhost:3000');
socket.on('connect', function() {
  console.log('Connected with the ID ' + socket.id);
});
let reader ;
//here the data is received and used to make a new element p 
socket.on("dataToClient", function(sendData,sendChecker){

  reader=  document.createElement('p');
  reader.className = "reader";
  reader.textContent = sendData;

  dataReader.appendChild(reader);
  document.body.appendChild(document.createElement("br"));

  console.log(sendData)

});
