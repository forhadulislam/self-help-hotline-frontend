var config = {
    apiKey: "AIzaSyBYSz3_wDygl1aC3-qYMNMKHJFhGMDh850",
    authDomain: "self-help-hotline-acp.firebaseapp.com",
    databaseURL: "https://self-help-hotline-acp.firebaseio.com",
    storageBucket: "self-help-hotline-acp.appspot.com",
    messagingSenderId: "746864609145"
};
firebase.initializeApp(config);

var allCategory = [];
var all, hasData = {};


/*categories.on("value", function(snapshot) {
	hasData = snapshot.val();
  	if(hasData){
  	    for(a in hasData){
            allCategory.push(hasData[a].title);
  	    }
  	    all = JSON.stringify(hasData);
  	}else{
  		console.log("No categories available");
  	}
}, function (error) {
   console.log("Error: " + error.code);
});*/



var c = getCategories();
console.log( c );

$(document).ready(function(){
    
    var database = firebase.database();
    var loggedInUsername = localStorage['username'];
    
	 
    
	
    $(".login-form").submit(function(e){
        e.preventDefault();
        
        console.log("Submitted");
        var username = $("#username").val();
        var password = $("#password").val();
        
        var searchUser = firebase.database().ref("users/" + username);
        searchUser.once("value", function(snapshot) {
        	var hasData = snapshot.val();
          	if(hasData){
          	    var accPassword = snapshot.val().password;
          		if (accPassword === password) {
                    localStorage['username'] = username;
                    location.href = "#/";
                    console.log(localStorage['username']);
                }else{
                    console.log("Invalid credentials");
                }
                
          	}else{
          		console.log("Invalid credentials!! Please try again.");
          	}
        }, function (error) {
           console.log("Error: " + error.code);
        });
        
        return false;
    });
    
    
    $(".register-form").submit(function(e){
        e.preventDefault();
        
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
