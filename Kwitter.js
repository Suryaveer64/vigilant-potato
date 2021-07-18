function login(){
  
    var user_name= document.getElementById("user_name").value;

 localStorage.setItem("Hey", user_name);

 window.location= "Kwitter_Room.html";

 }