var tabs = ["pasta", "steak", "soup", "beverage", "dessert"];

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

function openItem(item) {
  document.getElementsByClassName("special_instructions")[0].value = "";
  document.getElementById("overlay").style.display = "block";

  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];
  var checkbox = "<input type='checkbox'>";

  if(item == 1){
    title.innerHTML = "Fettuccine Alfredo";
    ingredients.innerHTML = "Fettuccine Pasta<br>Butter<br>Salt and Pepper<br>2-Cheese Blend";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Add chicken<br>" + checkbox + "Extra cheese<br>";
    extraOptions.innerHTML += checkbox + "Extra sauce";
  }
  else if(item == 2){
    title.innerHTML = "4-Cheese Lasagna";
    ingredients.innerHTML = "Lasagna Noodles<br>Garlic<br>4-Cheese Blend<br>Tomato Sauce";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Add beef<br>" + checkbox + "Extra cheese<br>";
    extraOptions.innerHTML += checkbox + "Light cheese";
  }
  else if(item == 3){
    title.innerHTML = "Seafood Linguine";
    ingredients.innerHTML = "Linguine Pasta<br>Olive Oil<br>Shrimp & Crab<br>Alfredo Sauce";
    allergens.innerHTML = "Seafood sensitivity"
    extraOptions.innerHTML = checkbox + "Extra shrimp<br>" + checkbox + "Add Italian sausage<br>";
    extraOptions.innerHTML += checkbox + "Extra sauce";
  }
  else if(item == 4){
    title.innerHTML = "Spaghetti  Meatballs";
    ingredients.innerHTML = "Spaghetti Pasta<br>Tomato Paste<br>Lean Beef<br>Black Peppers";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Extra meatballs<br>" + checkbox + "Add sausage<br>";
    extraOptions.innerHTML += checkbox + "Add cheese";
  }
  else if(item == 5){
    title.innerHTML = "Tomato Rotini";
    ingredients.innerHTML = "Rotini Pasta<br>Tomato Paste<br>Garlic<br>Parmesan Cheese";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Add chicken<br>" + checkbox + "Add sausage<br>";
    extraOptions.innerHTML += checkbox + "Extra cheese";
  }
  else if(item == 6){
    title.innerHTML = "Beef Ravioli";
    ingredients.innerHTML = "Ravioli Pasta<br>Lean Beef<br>Tomato Paste<br>Pepper Mix";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Add sausage<br>" + checkbox + "Add cheese<br>";
    extraOptions.innerHTML += checkbox + "Extra sauce";
  }
  else if(item == 7){
    title.innerHTML = "Top Sirloin";
    ingredients.innerHTML = "Top Sirloin Steak (8oz)<br>Mashed Potatoes<br>Asparagus Spears<br>Misc. Vegetables";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Add mushrooms<br>" + checkbox + "Upsize (+ 4oz)<br>";
    extraOptions.innerHTML += checkbox + "Extra mashed potatoes";
  }
  else if(item == 8){
    title.innerHTML = "New York Steak";
    ingredients.innerHTML = "New York Steak (8oz)<br>Baked Potato<br>Misc. Vegetables<br>Pepper Mix";
    allergens.innerHTML = "None"
    extraOptions.innerHTML = checkbox + "Add mushrooms<br>" + checkbox + "Upsize (+ 6oz)<br>";
    extraOptions.innerHTML += checkbox + "Extra vegetables";
  }
  else if(item == 9){
    title.innerHTML = "Peppercorn Steak";
    ingredients.innerHTML = "Peppercorn Steak (10oz)<br>Mashed Potatoes<br>Peppercorn sauce<br>Vegetables";
    allergens.innerHTML = "Peanuts (if selected)"
    extraOptions.innerHTML = checkbox + "Add nut medley<br>" + checkbox + "Upsize (+4 oz)<br>";
    extraOptions.innerHTML += checkbox + "Add mushroom";
  }
  else if(item == 10){
    title.innerHTML = "Sirloin Oscar";
    ingredients.innerHTML = "Top Sirloin Steak (8oz)<br>Scallops<br>Sea Sauce<br>Mashed Potatoes";
    allergens.innerHTML = "Seafood sensitivity"
    extraOptions.innerHTML = checkbox + "Add shrimp<br>" + checkbox + "Extra sauce<br>";
    extraOptions.innerHTML += checkbox + "Add vegetables";
  }
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function submitPress() {
  closeOverlay();
}

function goToTab(target) {
  for(var i = 0; i < tabs.length; i++){
    if(tabs[i] == target){
      document.getElementById(tabs[i] + "_table").style.display = "initial";
      document.getElementById(tabs[i] + "_tab").style.color = "white";
    }
    else{
      document.getElementById(tabs[i] + "_table").style.display = "none";
      document.getElementById(tabs[i] + "_tab").style.color = "grey";
    }
  }
}
