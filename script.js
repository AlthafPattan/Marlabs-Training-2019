//once load, enable the listeners
$(function() {
  //add pwd listener
  $("#pwdInput").on("blur", function() {
    let hasErr = displayErr($("#pwdInput"));
    if (hasErr) {
      //$("#passwordHelpBlock").attr("class", ' ');
      $("#passwordHelpBlock").removeClass("d-none");
    } else {
      $("#passwordHelpBlock").attr("class", "d-none");
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
