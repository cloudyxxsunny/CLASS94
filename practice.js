
//ADD YOUR FIREBASE LINKS

var firebaseConfig =
 {
    apiKey: "AIzaSyDLBjXzx1kS4qXxn7GS2Pv3xAtGOmZycDg",
    authDomain: "sadlastdayofschool-sademoji.firebaseapp.com",
    databaseURL: "https://sadlastdayofschool-sademoji-default-rtdb.firebaseio.com",
    projectId: "sadlastdayofschool-sademoji",
    storageBucket: "sadlastdayofschool-sademoji.appspot.com",
    messagingSenderId: "1090035820680",
    appId: "1:1090035820680:web:8e3c6bea8fcbaa2acbd73d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"Adding user now"
    });
} 