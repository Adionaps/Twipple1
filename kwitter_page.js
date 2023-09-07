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
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function send() {
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({ name: user_name, message: msg, like: 0 });
    document.getElementById("msg").value = ""
}
function getdata() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey; message_data = childData;
            name1 = message_data["name"]
            message = message_data["message"]
            like = message_data["like"]
            name_with_tag = "<h4> " + name1 + "<img class='user_tick' src='tick.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            like_button = "<button class='btn btn-warning' id= " + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
            span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
            row = name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("output").innerHTML += row;
        }
        })
    })
}
getdata()

function updateLike(message_id) {
    button_id = message_id
    likes = document.getElementById(button_id).value
    updateLike1 = Number(likes) + 1
    firebase.database().ref(room_name).child(message_id).update({ like: updateike1 });
}

function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location.replace("index.html")
}