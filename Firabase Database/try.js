  var firebaseConfig = {
    apiKey: "AIzaSyC_Dzph-_yI-iTTMz4SYz6Xnoe9ZcKcJ3E",
    authDomain: "project-name-d329b.firebaseapp.com",
    databaseURL: "https://project-name-d329b.firebaseio.com",
    projectId: "project-name-d329b",
    storageBucket: "project-name-d329b.appspot.com",
    messagingSenderId: "804094921804",
    appId: "1:804094921804:web:4d39a9d8b6ca68651c78e9",
    measurementId: "G-BMLF23YLY8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//VARIABLES
var database = firebase.database();
var ref = database.ref('Player');
ref.on('value',gotData, errData);
var Player;
var keys;
var k;
var Name;
var Password;
var ID;
var possibleID=0;

//FUNCTION
  function gotData(data){
    Player = data.val();
    keys = Object.keys(Player);
    for( var a = 0; a < keys.length; a++){
      k = keys[a];
      Name = Player[k].Name;
      Password = Player[k].Password;
      ID = Player[k].ID;
      console.log(ID,Name,Password);
      //Wrong way of checking ID pero try lang
      while(possibleID ==Player[k].ID){
            possibleID = possibleID +1;
        }
    }
  }
  function errData(err){
    console.log("Error");
    }

 function SignIn(){
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
      data = {
      ID: possibleID,
      Name:name,
      Password:pass 
    }
    if(data.Name.length > 0){
      if(ref.push(data)){
        document.write("SUCCESS");
      }
      else{
      document.write("FAILED")
      }
    }
    else{
      console.log("ERROR");
    }

}






