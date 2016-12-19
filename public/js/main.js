 var config = {
    apiKey: "AIzaSyBYSz3_wDygl1aC3-qYMNMKHJFhGMDh850",
    authDomain: "self-help-hotline-acp.firebaseapp.com",
    databaseURL: "https://self-help-hotline-acp.firebaseio.com",
    storageBucket: "self-help-hotline-acp.appspot.com",
    messagingSenderId: "746864609145"
};
firebase.initializeApp(config);

$(document).ready(function(){
    
    var database = firebase.database();
    var loggedInUsername = localStorage['username'];
    
	 
    function writeUserData(username, email, password) {
	  firebase.database().ref('users/' + username).set({
	    username: username,
	    password: password,
	    email: email
	  });
	}
	
    
    $(".register-form").submit(function(e){
        e.preventDefault();
        
        console.log("Submitted"); 
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirm = $("#confirm-password").val();
        
        if(password == confirm){
            
            var searchUser = firebase.database().ref("users/" + username).limitToFirst(1);
            searchUser.once("value", function(data) {
            	var dataOutput = data.val();
              	if(dataOutput){
              		alert("This username is already in use");
              	}else{
              		writeUserData(username, email, password);
              		console.log("You have been successfully registered!");
              		if (!loggedInUsername) {
                        localStorage['username'] = username;
                    }
                    console.log(localStorage['username']);
              	}
            }, function (error) {
               console.log("Error: " + error.code);
            });
            
            $(this)[0].reset();
            
        }else{
            alert("Passwords do not match");
        }
       
       return false; 
    });
    
})







