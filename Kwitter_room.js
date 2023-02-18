const firebaseConfig = {
    apiKey: "AIzaSyCu6qfhtl0CS4KO74jx6PiURp8hJzDLW8U",
    authDomain: "anime-app-d8647.firebaseapp.com",
    projectId: "anime-app-d8647",
    storageBucket: "anime-app-d8647.appspot.com",
    messagingSenderId: "1012612022511",
    appId: "1:1012612022511:web:97694321002fcbf2251b1a",
    measurementId: "G-X9KFFHT3WX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

  function addRoom()
  {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name";
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
  
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
