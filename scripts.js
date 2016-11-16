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
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";
  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];

  var checkbox = "<input type='checkbox'>";

  title.innerHTML = "4-Cheese Lasagna";
  ingredients.innerHTML = "Lasagna Noodles<br>Garlic<br>4-Cheese Blend<br>Tomato Sauce";
  allergens.innerHTML = "None"
  extraOptions.innerHTML = checkbox + "Add beef<br>" + checkbox + "Extra cheese<br>";
  extraOptions.innerHTML += checkbox + "Light cheese";
}

function openItem3() {
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";
  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];

  var checkbox = "<input type='checkbox'>";

  title.innerHTML = "Seafood Linguine";
  ingredients.innerHTML = "Linguine Pasta<br>Olive Oil<br>Shrimp & Crab<br>Alfredo Sauce";
  allergens.innerHTML = "Seafood sensitivity"
  extraOptions.innerHTML = checkbox + "Extra shrimp<br>" + checkbox + "Add Italian sausage<br>";
  extraOptions.innerHTML += checkbox + "Extra sauce";
}

function openItem4() {
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";
  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];

  var checkbox = "<input type='checkbox'>";

  title.innerHTML = "Spaghetti  Meatballs";
  ingredients.innerHTML = "Spaghetti Pasta<br>Tomato Paste<br>Lean Beef<br>Black Peppers";
  allergens.innerHTML = "None"
  extraOptions.innerHTML = checkbox + "Extra meatballs<br>" + checkbox + "Add sausage<br>";
  extraOptions.innerHTML += checkbox + "Add cheese";
}

function openItem5() {
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";
  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];

  var checkbox = "<input type='checkbox'>";

  title.innerHTML = "Tomato Rotini";
  ingredients.innerHTML = "Rotini Pasta<br>Tomato Paste<br>Garlic<br>Parmesan Cheese";
  allergens.innerHTML = "None"
  extraOptions.innerHTML = checkbox + "Add chicken<br>" + checkbox + "Add sausage<br>";
  extraOptions.innerHTML += checkbox + "Extra cheese";
}

function openItem6() {
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";
  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];

  var checkbox = "<input type='checkbox'>";

  title.innerHTML = "Beef Ravioli";
  ingredients.innerHTML = "Ravioli Pasta<br>Lean Beef<br>Tomato Paste<br>Pepper Mix";
  allergens.innerHTML = "None"
  extraOptions.innerHTML = checkbox + "Add sausage<br>" + checkbox + "Add cheese<br>";
  extraOptions.innerHTML += checkbox + "Extra sauce";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function submitPress() {
  closeOverlay();
}

function goToPastas() {
  document.getElementById("pasta_table").style.display = "initial";
  document.getElementById("steaks_table").style.display = "none";
  document.getElementById("pasta_tab").style.color = "white";
  document.getElementById("steak_tab").style.color = "grey";
}

function goToSteaks() {
  document.getElementById("pasta_table").style.display = "none";
  document.getElementById("steaks_table").style.display = "initial";
  document.getElementById("pasta_tab").style.color = "grey";
  document.getElementById("steak_tab").style.color = "white";
}
