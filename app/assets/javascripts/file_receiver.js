// RECEIVER SIDE

function Receiver(){
  var thisReceiver = this;
  thisReceiver.peer = new Peer({ key: "ry9t770xq4hx5hfr" });
}

Receiver.prototype.establishConnection = function(senderPeerId){
  var thisReceiver = this;
  // console.log("establishConnection called");

  thisReceiver.connection = thisReceiver.peer.connect(senderPeerId);
}

Receiver.prototype.handleConnection = function(){
  var thisReceiver = this;
  thisReceiver.connection.on("open", function(){
    thisReceiver.getData();
  });
}

Receiver.prototype.getData = function(){
  console.log("getData called");
  var thisReceiver = this;
  thisReceiver.connection.on("data", function(data){
    console.log("data received in getData");
    console.log("GOT: " + data); //tester code
    thisReceiver.sendData("I got it!"); //tester code
  });
}

Receiver.prototype.sendData = function(dataToSend){
  var thisReceiver = this;
  thisReceiver.connection.send(dataToSend); //tester code
}



$(function(){
  var receiver = new Receiver();
  var senderPeerId = $("p").text();
  // console.log(senderPeerId);
  // debugger;

  receiver.establishConnection(senderPeerId);
  receiver.handleConnection();
});

