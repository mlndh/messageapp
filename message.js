
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
	database.ref('//').once('value',(snap)=>{
    console.log(snap.val());
  });
}
function readMessage() {
	database.ref('/mess/').once('value',(snap)=>{
    console.log(snap.val());
  });
}

function writemessage(from, message, date) {
var theMessage = {
from: from,
message: message,
date: Date(),
id: Date.now()
  };
var updates = {};
updates['//'  + theMessage.id] = theMessage;

return firebase.database().ref().update(updates);
}


function deleteMessage(id) {
	database.ref('/'+id+'/').remove() 
}
