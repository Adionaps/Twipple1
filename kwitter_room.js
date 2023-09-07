
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCoNPcHoHYKR2lWSjdU8SBmP0puQy_hbcI",
      authDomain: "twipple.firebaseapp.com",
      databaseURL: "https://twipple-default-rtdb.firebaseio.com",
      projectId: "twipple",
      storageBucket: "twipple.appspot.com",
      messagingSenderId: "102086268252",
      appId: "1:102086268252:web:b4b17d6213ed2dee68dd99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                 
row="<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)' >#" + Room_names + "</div><hr>"
                 document.getElementById("output").innerHTML+=row
            });
      });
}
getData();

username=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome"+username+"!"
function AddRoom(){
      roomname=document.getElementById("room_name").value
      firebase.database().ref("/").child(roomname).update({
           purpose:"Adding Room Name" 
      })
      localStorage.setItem("room_name",roomname)
      window.location="kwitter_page.html"
}
function redirecttoroomname(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}