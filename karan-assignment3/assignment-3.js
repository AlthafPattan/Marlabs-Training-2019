
///////////////////////////////// passssword/////////////////////////////////////////////
function validPass(){
    var password1= document.getElementById('passwrd').value;
    var conPass= document.getElementById("inputConPassword4").value;
        var minMaxLength = /^[\s\S]{8,32}$/,
            upper = /[A-Z]/,
            lower = /[a-z]/,
            special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        if (minMaxLength.test(password1) &&
            upper.test(password1) &&
            lower.test(password1) &&
            special.test(password1)
        ) {           
            if (password1 != conPass) { 
                    document.getElementById("error").innerHTML="Password doesnot match";
                    return false; 
                } else{
                    document.getElementById("error").innerHTML="Password Match and user created";
                    document.getElementById("error").style.color="green";
                    return true;
                }

        }else{
            document.getElementById("error").innerHTML=" Atleast 1sysmbol, 1UpperCase and 1Lowercase char";
        }

}

function checkValid(){
var u1=document.getElementById("exampleInputEmail1");
var p1=document.getElementById("exampleInputPassword1");
    var localId=localStorage.getItem("email");
    var localp=localStorage.getItem("password");

    if(u1.value==localId && p1.value==localp){
        document.write("welcome"+ " "+localId);

    }else{
        alert("Please check credentials,try again");
    }
}
class user{
    constructor (firstName,lastName,gender,uniqueID,address,city,state,email,password){
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.uniqueID=uniqueID;
        this.address=address;
        this.city=city;
        this.state=state;
        this.email=email;
        this.password=password;
    }
}
function storeLocal(){
var firstName= document.getElementById('inputFirstname').value;
var lastName= document.getElementById('inputLastname').value;
var gender= document.getElementById('gridCheck').value;
var uniqueID= document.getElementById('userid').value;
var address=document.getElementById('inputAddress').value;
var city= document.getElementById('inputCity').value;
var state= document.getElementById('inputState').value;
var email= document.getElementById('inputEmail4').value;
var password= document.getElementById('passwrd').value;

let userData= new user(firstName,lastName,gender,uniqueID,address,city,state,email,password);
localStorage.setItem(uniqueID,JSON.stringify(userData));
}

