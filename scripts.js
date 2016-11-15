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

function completeSignupOrLogin() {
  var inputs = document.getElementsByClassName("signup_input");
  var numInputs = inputs.length;
  var formFilledOut = true;

  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].value == ""){
      formFilledOut = false;
    }
  }

  if(formFilledOut)
  {
    if(numInputs == 8){
      window.alert("You have successfully signed up! (Prototypically, that is)");
    }
    else if(numInputs == 2){
      window.alert("You have successfully logged in! (Prototypically, that is)");
    }
    goToHome();
  }
  else
  {
    window.alert("Please fill out all fields.");
  }
}

function openItem1() {
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";
  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];

  var checkbox = "<input type='checkbox'>";

  title.innerHTML = "Fettuccine Alfredo";
  ingredients.innerHTML = "Fettuccine Pasta<br>Butter<br>Salt and Pepper<br>2-Cheese Blend";
  allergens.innerHTML = "None"
  extraOptions.innerHTML = checkbox + "Add chicken<br>" + checkbox + "Extra cheese<br>";
  extraOptions.innerHTML += checkbox + "Extra sauce";
}

function openItem2() {
  document.getElementById("overlay").style.display = "block";
}

function openItem3() {
  document.getElementById("overlay").style.display = "block";
}

function openItem4() {
  document.getElementById("overlay").style.display = "block";
}

function openItem5() {
  document.getElementById("overlay").style.display = "block";
}

function openItem6() {
  document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function submitPress() {
  closeOverlay();
}
