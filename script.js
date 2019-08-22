function validator()
{
    var firstname = document.forms["basic form"]["firstname"];
    var lastname = document.forms["basic form"]["lastName"];
    var userid = document.forms["basic form"]["userName"];
    var email = document.forms["basic form"]["email"];
    var password = document.forms["basic form"]["pwd"];

        if(firstname.value=="")
        {
            window.alert("please enter your first name");
            firstname.focus();
            return false;
        }
     if(lastname.value=="")
        {
            window.alert("please enter your last name");
            lastname.focus();
            return false;
        }
    if(userid.value=="")
        {
            window.alert("please enter valid userid");
            userid.focus();
            return false;
        }
    if(email.value=="")
        {
            window.alert("please enter valid email id");
            email.focus();
            return false;
    if(password.value=="")
        {
            window.alert("please enter valid password");
            password.focus();
            return false;
        }
        return true;
}