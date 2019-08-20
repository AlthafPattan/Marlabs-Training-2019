
/////////////////////////valid details///////////////////////////////////////////////////
// function validDetail(){
//     var firstName= document.getElementById('inputFirstname');
//     var lastName= document.getElementById('inputLastname');
//     var uniqueID= document.getElementById('userid');
//     var address=document.getElementById('inputAddress');
//     var city= document.getElementById('inputCity');
//     var state= document.getElementById('inputState');
//     var agree= document.getElementById('gridCheck');
        // if(firstName.value=='')
        // firstName.setCustomValidity("Please enter FirstName");
        // else
        // firstName.setCustomValidity("");
        // if(lastName.value=='')
        // lastName.setCustomValidity("Please enter LastName");
        // else
        // lastName.setCustomValidity("");
        // if(uniqueID.value=='') 
        // uniqueID.setCustomValidity("Please enter User Id");
        // else
        // uniqueID.setCustomValidity("");
        // if(address.value=='')
        // address.setCustomValidity("Please enter address");
        // else
        // address.setCustomValidity("");
        // if(city.value=='')
        // city.setCustomValidity("Please enter city");
        // else
        // city.setCustomValidity("");
        // if(state.value=='')
        // state.setCustomValidity("Please enter state");
        // else
        // state.setCustomValidity("");
        // if(agree.checked == false)
        // agree.setCustomValidity("please check the box");
        // else
        // agree.setCustomValidity("");
// }
///////////////////////////////// passssword/////////////////////////////////////////////
function validPass(){
    var password= document.getElementById('passwrd').value;
    var conPass= document.getElementById("inputConPassword4").value;
        var minMaxLength = /^[\s\S]{8,32}$/,
            upper = /[A-Z]/,
            lower = /[a-z]/,
            special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        if (minMaxLength.test(password) &&
            upper.test(password) &&
            lower.test(password) &&
            special.test(password)
        ) {           
            if (password != conPass) { 
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
console.log(localStorage);
