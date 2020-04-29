
    // TODO: Replace the following with your app's Firebase project configuration
    var firebaseConfig = {
    apiKey: "AIzaSyAy13cRUgYWIBmlm2nYQlt7UiRyoXTYJKA",
    authDomain: "messageapp-6e514.firebaseapp.com",
    databaseURL: "https://messageapp-6e514.firebaseio.com",
    projectId: "messageapp-6e514",
    storageBucket: "messageapp-6e514.appspot.com",
    messagingSenderId: "648538682023",
    appId: "1:648538682023:web:f2e604b5b922b83d39e182",
    measurementId: "G-0GH6T9EZ7V"
    };

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Get a reference to the database service
  var database = firebase.database();

function readMessages() {
	database.ref('//').on('value',(snap)=>{
    console.log(snap.val());
    // dispdiv.innerHTML = snap.val()["1588150997959"].from + snap.val()["1588150997959"].message ;
  });
}
function readMessage() {
	database.ref('/mess/').once('value',(snap)=>{
    console.log(snap.val());
  });
}

function forEvery() {
	database.ref('//').on('value',(snap)=>{
  var displayedMessages = document.getElementById("displayed-messages");
 displayedMessages.innerHTML = ""
  snap.forEach(function (childSnap) {
  var para = document.createElement("div");
  var text = document.createElement("div");
  text.innerText = childSnap.val().message;
  var sender = document.createElement("div");
  sender.innerText = childSnap.val().from;
  var date = document.createElement("div");
  var id = document.createElement("div");
  date.innerText = childSnap.val().date;
  id.innerHTML = childSnap.val().id;
displayedMessages.insertBefore(para,displayedMessages.firstChild);
  para.className = "style";
  para.appendChild(text);
  para.appendChild(sender);
  para.appendChild(date);
  text.className = "hej"
  sender.className = "sender"
  date.className = "date"
  id.style.display = "none";
    });   
    
  });
}
function writemessage(from, message, date) {
  var tempdate = new Date();
  
var theMessage = {
from: from,
message: message,
date: tempdate.toLocaleDateString() + "-" + tempdate.toTimeString().substring(0, 8),
id: Date.now()
  };
var updates = {};
updates['//'  + theMessage.id] = theMessage;

return firebase.database().ref().update(updates);

}


function deleteMessage(id) {
	database.ref('/'+id+'/').remove() 
}

// FRONT END 
function displayMessages() {
 forEvery()
}
