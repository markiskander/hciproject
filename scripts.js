function testFunction() {
  window.alert("JavaScript is fully operational!");
}

function goToSignup() {
  window.location.href = "signup.html";
}

function goToMenu() {
  window.location.href = "menu.html";
}

function goToLogin() {
  window.location.href = "login.html";
}

function goToHome() {
  window.location.href = "index.html";
}

function completeSignup() {
  var inputs = document.getElementsByClassName("signup_input");
  var formFilledOut = true;

  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].value == ""){
      formFilledOut = false;
    }
  }

  if(formFilledOut)
  {
    window.alert("You have successfully signed up! (Prototypically, that is)");
    goToHome();
  }
  else
  {
    window.alert("Please fill out all fields.");
  }
}
