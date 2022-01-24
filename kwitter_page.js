//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAMfVAq4OSim-wvMsYqlwtjL5VXjrqH6m4",
      authDomain: "kwitter-c7ab8.firebaseapp.com",
      databaseURL: "https://kwitter-c7ab8-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7ab8",
      storageBucket: "kwitter-c7ab8.appspot.com",
      messagingSenderId: "27835265824",
      appId: "1:27835265824:web:c46ab52e3bcb4ef13d5d45"
    };
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");

   function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
