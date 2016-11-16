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
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add chicken<br>" + checkbox + "Extra cheese<br>";
    extraOptions.innerHTML += checkbox + "Extra sauce";
  }
  else if(item == 2){
    title.innerHTML = "4-Cheese Lasagna";
    ingredients.innerHTML = "Lasagna Noodles<br>Garlic<br>4-Cheese Blend<br>Tomato Sauce";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add beef<br>" + checkbox + "Extra cheese<br>";
    extraOptions.innerHTML += checkbox + "Light cheese";
  }
  else if(item == 3){
    title.innerHTML = "Seafood Linguine";
    ingredients.innerHTML = "Linguine Pasta<br>Olive Oil<br>Shrimp & Crab<br>Alfredo Sauce";
    allergens.innerHTML = "Seafood sensitivity";
    extraOptions.innerHTML = checkbox + "Extra shrimp<br>" + checkbox + "Add Italian sausage<br>";
    extraOptions.innerHTML += checkbox + "Extra sauce";
  }
  else if(item == 4){
    title.innerHTML = "Spaghetti  Meatballs";
    ingredients.innerHTML = "Spaghetti Pasta<br>Tomato Paste<br>Lean Beef<br>Black Peppers";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra meatballs<br>" + checkbox + "Add sausage<br>";
    extraOptions.innerHTML += checkbox + "Add cheese";
  }
  else if(item == 5){
    title.innerHTML = "Tomato Rotini";
    ingredients.innerHTML = "Rotini Pasta<br>Tomato Paste<br>Garlic<br>Parmesan Cheese";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add chicken<br>" + checkbox + "Add sausage<br>";
    extraOptions.innerHTML += checkbox + "Extra cheese";
  }
  else if(item == 6){
    title.innerHTML = "Beef Ravioli";
    ingredients.innerHTML = "Ravioli Pasta<br>Lean Beef<br>Tomato Paste<br>Pepper Mix";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add sausage<br>" + checkbox + "Add cheese<br>";
    extraOptions.innerHTML += checkbox + "Extra sauce";
  }
  else if(item == 7){
    title.innerHTML = "Top Sirloin";
    ingredients.innerHTML = "Top Sirloin Steak (8oz)<br>Mashed Potatoes<br>Asparagus Spears<br>Misc. Vegetables";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add mushrooms<br>" + checkbox + "Upsize (+ 4oz)<br>";
    extraOptions.innerHTML += checkbox + "Extra mashed potatoes";
  }
  else if(item == 8){
    title.innerHTML = "New York Steak";
    ingredients.innerHTML = "New York Steak (8oz)<br>Baked Potato<br>Misc. Vegetables<br>Pepper Mix";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add mushrooms<br>" + checkbox + "Upsize (+ 6oz)<br>";
    extraOptions.innerHTML += checkbox + "Extra vegetables";
  }
  else if(item == 9){
    title.innerHTML = "Peppercorn Steak";
    ingredients.innerHTML = "Peppercorn Steak (10oz)<br>Mashed Potatoes<br>Peppercorn sauce<br>Vegetables";
    allergens.innerHTML = "Peanuts (if selected)";
    extraOptions.innerHTML = checkbox + "Add nut medley<br>" + checkbox + "Upsize (+4 oz)<br>";
    extraOptions.innerHTML += checkbox + "Add mushroom";
  }
  else if(item == 10){
    title.innerHTML = "Sirloin Oscar";
    ingredients.innerHTML = "Top Sirloin Steak (8oz)<br>Scallops<br>Sea Sauce<br>Mashed Potatoes";
    allergens.innerHTML = "Seafood sensitivity";
    extraOptions.innerHTML = checkbox + "Add shrimp<br>" + checkbox + "Extra sauce<br>";
    extraOptions.innerHTML += checkbox + "Add vegetables";
  }
  else if(item == 11){
    title.innerHTML = "Chicken Gnocci";
    ingredients.innerHTML = "Gnocci Dough<br>Chicken Broth<br>Parsley Flakes<br>Chicken";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add cheese<br>" + checkbox + "Extra chicken<br>";
    extraOptions.innerHTML += checkbox + "No parsley";
  }
  else if(item == 12){
    title.innerHTML = "Chicken Noodles";
    ingredients.innerHTML = "Chicken Broth<br>Chicken<br>Noodle Pasta<br>Vegetables";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra chicken<br>" + checkbox + "Extra vegetables<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 13){
    title.innerHTML = "Cream of Broccoli";
    ingredients.innerHTML = "Broccoli Cream<br>Broccoli<br>Onions<br>Parmesan Cheese";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add sausage<br>" + checkbox + "Extra cheese<br>";
    extraOptions.innerHTML += checkbox + "Extra broccoli";
  }
  else if(item == 14){
    title.innerHTML = "Zuppa Toscana";
    ingredients.innerHTML = "Italian Sausage<br>Potatoes<br>Bacon Bits<br>Chicken Broth";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra sausage<br>" + checkbox + "Extra bacon<br>";
    extraOptions.innerHTML += checkbox + "Add cheese";
  }
  else if(item == 15){
    title.innerHTML = "Spicy Thai";
    ingredients.innerHTML = "Spicy Chicken<br>Parmesan Cheese<br>Creamy Thai Broth<br>Vegetables";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra chicken<br>" + checkbox + "Extra cheese<br>";
    extraOptions.innerHTML += checkbox + "Extra vegetables";
  }
  else if(item == 16){
    title.innerHTML = "Beef Vegetable";
    ingredients.innerHTML = "Beef Broth<br>Lean Beef<br>Potatoes<br>Vegetables";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra beef<br>" + checkbox + "Extra Vegetables<br>";
    extraOptions.innerHTML += checkbox + "Add bacon";
  }
  else if(item == 17){
    title.innerHTML = "Coca-Cola";
    ingredients.innerHTML = "Water<br>Sugar<br>Food Coloring<br>Caffeine";
    allergens.innerHTML = "Caffeine sensitivity";
    extraOptions.innerHTML = checkbox + "Diet<br>" + checkbox + "Include straw<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 18){
    title.innerHTML = "Iced Tea";
    ingredients.innerHTML = "Water<br>Sugar<br>Food Coloring<br>Tea Leaves";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Diet<br>" + checkbox + "Include straw<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 19){
    title.innerHTML = "Ginger Ale";
    ingredients.innerHTML = "Water<br>Sugar<br>Food Coloring<br>Ginger";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Diet<br>" + checkbox + "Include straw<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 20){
    title.innerHTML = "Root Beer";
    ingredients.innerHTML = "Water<br>Sugar<br>Food Coloring<br><br>";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Diet<br>" + checkbox + "Include straw<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 21){
    title.innerHTML = "Coffee";
    ingredients.innerHTML = "Water<br>Coffee Beans<br><br><br>";
    allergens.innerHTML = "Caffeine sensitivity";
    extraOptions.innerHTML = checkbox + "Decaf<br>" + "<br><br>";
  }
  else if(item == 22){
    title.innerHTML = "Tea";
    ingredients.innerHTML = "Water<br>Tea Leaves<br><br><br>";
    allergens.innerHTML = "Caffeine sensitivity";
    extraOptions.innerHTML = checkbox + "Decaf<br>" + "<br><br>";
  }
  else if(item == 23){
    title.innerHTML = "Swirl Ice Cream";
    ingredients.innerHTML = "Vanilla Ice Cream<br>Chocolate Ice Cream<br>Strawberry Ice Cream<br>Sugar";
    allergens.innerHTML = "Peanuts (if selected)";
    extraOptions.innerHTML = checkbox + "Add nuts<br>" + checkbox + "Add chocolate sauce<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 24){
    title.innerHTML = "Chocolate Brownie";
    ingredients.innerHTML = "Soft Dough<br>Chocolate<br>Sugar<br>Flour";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add chocolate sauce<br>" + checkbox + "Add strawberry sauce<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 25){
    title.innerHTML = "Strawberry Sundae";
    ingredients.innerHTML = "Vanilla Ice Cream<br>Strawberry Sauce<br>Fresh Strawberries<br>Sugar";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra strawberries<br>" + checkbox + "Extra sauce<br>";
    extraOptions.innerHTML += checkbox + "Add chocolate sauce";
  }
  else if(item == 26){
    title.innerHTML = "Chocolate Death";
    ingredients.innerHTML = "Soft Dough<br>Sugar<br>Chocolate<br>Much More Chocolate";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Add chocolate sauce<br>" + checkbox + "Add brownie<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 27){
    title.innerHTML = "Apple Pie";
    ingredients.innerHTML = "Pastry Dough<br>Fresh Apples<br>Apple Sauce<br>Sugar";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra crispy<br>" + checkbox + "Add ice cream<br>";
    extraOptions.innerHTML += checkbox + "Upsize (2x)";
  }
  else if(item == 28){
    title.innerHTML = "Strawberry Cheesecake";
    ingredients.innerHTML = "Sweet Cream Cheese<br>Pastry Dough<br>Strawberry Sauce<br>Fresh Strawberries";
    allergens.innerHTML = "None";
    extraOptions.innerHTML = checkbox + "Extra sausage<br>" + checkbox + "Extra bacon<br>";
    extraOptions.innerHTML += checkbox + "Add cheese";
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
