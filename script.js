//once load, enable the listeners
$(function() {
  //add pwd listener
  $("#password").on("blur", function() {
    let hasErr = displayErr($("#password"));
    if (hasErr) {
      $("#passwordHelpBlock").removeClass("d-none");
      $("#signUp").removeAttr("href");
    } else {
      $("#passwordHelpBlock").attr("class", "d-none");
      $("#signUp").attr("href", "#");
    }
  });

  //add sign up button listener
  $("#signUp").on("click", function () {
      let firstName = $("#firstName").val();
      let lastName = $("#lastName").val();
      let userId = $("#userId").val();
      let email = $("#email").val();
      let password = $("#password").val();
      let gender = $("#gender").val();

      //console.log(firstName, lastName, userId, email, password, gender);
      let userData = new user(firstName, lastName, userId, email, password, gender);
      localStorage.setItem(userId, JSON.stringify(userData));  
      //console.log(localStorage.getItem(userId));
  });

  //add sign in button listener
  $("#signIn").on("click", function () {
    let userId = $("#mail").val();
    let password = $("#signInPassword").val();
    //default pwd: qwe123!ASD
    if (userId.length <= 0 && password.length <= 0) {
      alert("Provided Credentials does not match");
    } else {
      let userData = JSON.parse(localStorage.getItem(userId));
      if (userData == null || userData.password != password) {
        alert("Provided Credentials does not match");

        $("#mail").val("");
        $("#signInPassword").val("");
      } else {
        //show success div
        $(".sign-in").css("display", "none");

        $(".sign-in-success").append("<p>Welcome, " + userData.userId +"</p>");
        $(".sign-in-success").css("display", "block");
      }
    }
  });

});

//show error message
//first para: flag   second para: DOM
function displayErr(obj) {
  let hasErr = pwdValid(obj.val());
  console.log(hasErr);
  if (hasErr == true) {
    obj.addClass("is-invalid");
  } else {
    obj.removeClass("is-invalid");
  }
  return hasErr;
}

//valid password
function pwdValid(pwd) {
  let hasErr;
  if (
    pwd.match(/[a-z]/g) &&
    pwd.match(/[A-Z]/g) &&
    pwd.match(/[^a-zA-Z\d]/g) &&
    pwd.length >= 8 &&
    pwd.length <= 32
  ) {
    hasErr = false;
  } else {
    hasErr = true;
  }
  return hasErr;
}
