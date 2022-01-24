
//ADD YOUR FIREBASE LINKS HERE
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
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!!";

   function addRoom(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
          purpose: "add room"
         });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
         }

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
       console.log("Room name- "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      
      });});}
      getData();

     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location="index.html"
}
