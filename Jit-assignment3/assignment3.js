

var pswInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


pswInput.onfocus = function() {
    document.getElementById("msg").style.display = "block";
  }


pswInput.onblur = function() {
    document.getElementById("msg").style.display = "none";
  }
  
pswInput.onkeyup = function() {

    var lowerCaseLetters = /[a-z]/g;
    if(pswInput.value.match(lowerCaseLetters)) { 
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
  
    var upperCaseLetters = /[A-Z]/g;
    if(pswInput.value.match(upperCaseLetters)) { 
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    
    var numbers = /[0-9]/g;
    if(pswInput.value.match(numbers)) { 
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    
    if(pswInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
 

$('#psw, #cpsw').on('keyup', function () {
    if ($('#psw').val() == $('#cpsw').val()) {
      $('#message').html("Password Matched").css('color', 'green');
    } else 
      $('#message').html("Passwrod Not Matched").css('color', 'red');
  });

 
    var p1 = document.getElementById("unam");
    var a1 = document.getElementById("upassword");
    function checkLocal(){

    var localid = localStorage.getItem("userid");
    var localp = localStorage.getItem("pass1");
 
    
     if(p1.value == localid && a1.value == localp){
        document.write("Welcome" + " " + localid);
     }else{
         alert("Please check credential, Try again");
     }
     

  }

  var first = document.getElementById("fname");
  var last = document.getElementById("lname");
  var userid = document.getElementById("uname");
  var mail = document.getElementById("ema");
  var pass1 = document.getElementById("psw");
  var pass2 = document.getElementById("cpsw");
  var gmale = document.getElementById("mygen");

  function storeLocal(){
      localStorage.setItem("first",first.value);
      localStorage.setItem("last",last.value);
      localStorage.setItem("userid",userid.value);
      localStorage.setItem("mail",mail.value);
      localStorage.setItem("pass1",pass1.value);
      localStorage.setItem("pass2",pass2.value);
      localStorage.setItem("gmale",gmale.value);
    

  }

  
