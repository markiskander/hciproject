var tabs = ["pasta", "steak", "soup", "beverage", "dessert"];
var alreadyAlerted = false;
var currentItem = 0;
var alreadyCleared = false;
var priceTotal = 0;

var items = [
{
},
{
  name:"Fettuccine Alfredo",
  ingredients1:"Fettuccine Pasta",
  ingredients2:"Butter",
  ingredients3:"Salt and Pepper",
  ingredients4:"2-Cheese Blend",
  allergens:"None",
  extra1:"Add chicken",
  extra2:"Extra cheese",
  extra3:"Extra sauce"
},
{
  name:"4-Cheese Lasagna",
  ingredients1:"Lasagna Noodles",
  ingredients2:"Garlic",
  ingredients3:"4-Cheese Blend",
  ingredients4:"Tomato Sauce",
  allergens:"None",
  extra1:"Add beef",
  extra2:"Extra cheese",
  extra3:"Light cheese"
},
{
  name:"Seafood Linguine",
  ingredients1:"Linguine Pasta",
  ingredients2:"Olive Oil",
  ingredients3:"Shrimp & Crab",
  ingredients4:"Alfredo Sauce",
  allergens:"Seafood sensitivity",
  extra1:"Extra shrimp",
  extra2:"Add Italian sausage",
  extra3:"Extra sauce"
},
{
  name:"Spaghetti Meatballs",
  ingredients1:"Spaghetti Pasta",
  ingredients2:"Tomato Paste",
  ingredients3:"Lean Beef",
  ingredients4:"Black Peppers",
  allergens:"None",
  extra1:"Extra meatballs",
  extra2:"Add sausage",
  extra3:"Add cheese"
},
{
  name:"Tomato Rotini",
  ingredients1:"Rotini Pasta",
  ingredients2:"Tomato Paste",
  ingredients3:"Garlic",
  ingredients4:"Parmesan Cheese",
  allergens:"None",
  extra1:"Add chicken",
  extra2:"Add sausage",
  extra3:"Extra cheese"
},
{
  name:"Beef Ravioli",
  ingredients1:"Ravioli Pasta",
  ingredients2:"Lean Beef",
  ingredients3:"Tomato Paste",
  ingredients4:"Pepper Mix",
  allergens:"None",
  extra1:"Add sausage",
  extra2:"Add cheese",
  extra3:"Extra sauce"
},
{
  name:"Top Sirloin",
  ingredients1:"Top Sirloin Steak (8oz)",
  ingredients2:"Mashed Potatoes",
  ingredients3:"Asparagus Spears",
  ingredients4:"Vegetables",
  allergens:"None",
  extra1:"Add mushrooms",
  extra2:"Upsize (+ 4oz)",
  extra3:"Extra mashed potatoes"
},
{
  name:"New York Steak",
  ingredients1:"New York Steak (8oz)",
  ingredients2:"Baked Potato",
  ingredients3:"Vegetables",
  ingredients4:"Pepper Mix",
  allergens:"None",
  extra1:"Add mushrooms",
  extra2:"Upsize (+ 6oz)",
  extra3:"Extra vegetables"
},
{
  name:"Peppercorn Steak",
  ingredients1:"Peppercorn Steak (10oz)",
  ingredients2:"Mashed Potatoes",
  ingredients3:"Peppercorn Sauce",
  ingredients4:"Vegetables",
  allergens:"Peanuts (if selected)",
  extra1:"Add nut medley",
  extra2:"Upsize (+ 4oz)",
  extra3:"Add mushrooms"
},
{
  name:"Sirloin Oscar",
  ingredients1:"Top Sirloin Steak (8oz)",
  ingredients2:"Scallops",
  ingredients3:"Sea Sauce",
  ingredients4:"Mashed Potatoes",
  allergens:"Seafood sensitivity",
  extra1:"Add shrimp",
  extra2:"Extra sauce",
  extra3:"Add vegetables"
},
{
  name:"Chicken Gnocci",
  ingredients1:"Gnocci Dough",
  ingredients2:"Chicken Broth",
  ingredients3:"Parsley Flakes",
  ingredients4:"Chicken",
  allergens:"None",
  extra1:"Add cheese",
  extra2:"Extra chicken",
  extra3:"No parsley"
},
{
  name:"Chicken Noodles",
  ingredients1:"Chicken Broth",
  ingredients2:"Chicken",
  ingredients3:"Noodle Pasta",
  ingredients4:"Vegetables",
  allergens:"None",
  extra1:"Extra chicken",
  extra2:"Extra vegetable",
  extra3:"Upsize (2x)"
},
{
  name:"Cream of Broccoli",
  ingredients1:"Broccoli Cream",
  ingredients2:"Broccoli",
  ingredients3:"Onions",
  ingredients4:"Parmesan Cheese",
  allergens:"None",
  extra1:"Add sausage",
  extra2:"Extra cheese",
  extra3:"Extra broccoli"
},
{
  name:"Zuppa Toscana",
  ingredients1:"Italian Sausage",
  ingredients2:"Potatoes",
  ingredients3:"Bacon Bits",
  ingredients4:"Chicken Broth",
  allergens:"None",
  extra1:"Extra sausage",
  extra2:"Extra bacon",
  extra3:"Add cheese"
},
{
  name:"Spicy Thai",
  ingredients1:"Spicy Chicken",
  ingredients2:"Parmesan Cheese",
  ingredients3:"Creamy Thai Broth",
  ingredients4:"Vegetables",
  allergens:"None",
  extra1:"Extra chicken",
  extra2:"Extra cheese",
  extra3:"Extra vegetables"
},
{
  name:"Beef Vegetable",
  ingredients1:"Beef Broth",
  ingredients2:"Lean Beef",
  ingredients3:"Potatoes",
  ingredients4:"Vegetables",
  allergens:"None",
  extra1:"Extra beef",
  extra2:"Extra vegetables",
  extra3:"Add bacon"
},
{
  name:"Coca-Cola",
  ingredients1:"Water",
  ingredients2:"Sugar",
  ingredients3:"Food Coloring",
  ingredients4:"Caffeine",
  allergens:"Caffeine sensitivity",
  extra1:"Diet",
  extra2:"Include straw",
  extra3:"Upsize (2x)"
},
{
  name:"Iced Tea",
  ingredients1:"Water",
  ingredients2:"Sugar",
  ingredients3:"Food Coloring",
  ingredients4:"Tea Leaves",
  allergens:"None",
  extra1:"Diet",
  extra2:"Include straw",
  extra3:"Upsize (2x)"
},
{
  name:"Ginger Ale",
  ingredients1:"Water",
  ingredients2:"Sugar",
  ingredients3:"Food Coloring",
  ingredients4:"Ginger",
  allergens:"None",
  extra1:"Diet",
  extra2:"Include straw",
  extra3:"Upsize (2x)"
},
{
  name:"Root Beer",
  ingredients1:"Water",
  ingredients2:"Sugar",
  ingredients3:"Food Coloring",
  ingredients4:"Vanilla",
  allergens:"None",
  extra1:"Diet",
  extra2:"Include straw",
  extra3:"Upsize (2x)"
},
{
  name:"Coffee",
  ingredients1:"Water",
  ingredients2:"Coffee Beans",
  ingredients3:"Milk (Optional)",
  ingredients4:"Sugar (Optional)",
  allergens:"Caffeine sensitivity",
  extra1:"Decaf",
  extra2:"Add milk",
  extra3:"Add sugar"
},
{
  name:"Tea",
  ingredients1:"Water",
  ingredients2:"Tea Leaves",
  ingredients3:"Milk (Optional)",
  ingredients4:"Sugar (Optional)",
  allergens:"Caffeine sensitivity",
  extra1:"Decaf",
  extra2:"Add milk",
  extra3:"Add sugar"
},
{
  name:"Swirl Ice Cream",
  ingredients1:"Vanilla Ice Cream",
  ingredients2:"Chocolate Ice Cream",
  ingredients3:"Strawberry Ice Cream",
  ingredients4:"Sugar",
  allergens:"Peanuts (if selected)",
  extra1:"Add nuts",
  extra2:"Add chocolate sauce",
  extra3:"Upsize (2x)"
},
{
  name:"Chocolate Brownie",
  ingredients1:"Soft Dough",
  ingredients2:"Chocolate",
  ingredients3:"Sugar",
  ingredients4:"Flour",
  allergens:"None",
  extra1:"Add chocolate sauce",
  extra2:"Add strawberry sauce",
  extra3:"Upsize (2x)"
},
{
  name:"Strawberry Sundae",
  ingredients1:"Vanilla Ice Cream",
  ingredients2:"Strawberry Sauce",
  ingredients3:"Fresh Strawberries",
  ingredients4:"Sugar",
  allergens:"None",
  extra1:"Extra strawberries",
  extra2:"Extra strawberry sauce",
  extra3:"Add chocolate sauce"
},
{
  name:"Chocolate Death",
  ingredients1:"Soft Dough",
  ingredients2:"Sugar",
  ingredients3:"Chocolate",
  ingredients4:"A Lot More Chocolate",
  allergens:"None",
  extra1:"Add chocolate sauce",
  extra2:"Add brownie",
  extra3:"Upsize (2x)"
},
{
  name:"Apple Pie",
  ingredients1:"Pastry Dough",
  ingredients2:"Fresh Apples",
  ingredients3:"Apple Sauce",
  ingredients4:"Sugar",
  allergens:"None",
  extra1:"Extra crispy",
  extra2:"Add ice cream",
  extra3:"Upsize (2x)"
},
{
  name:"Strawberry Cheesecake",
  ingredients1:"Sweet Cream Cheese",
  ingredients2:"Pastry Dough",
  ingredients3:"Strawberry Sauce",
  ingredients4:"Fresh Strawberries",
  allergens:"None",
  extra1:"Extra strawberries",
  extra2:"Add ice cream",
  extra3:"Add chocolate sauce"
},
];

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
  var curr = items[item];

  currentItem = item;

  title.innerHTML = "";
  ingredients.innerHTML = "";
  allergens.innerHTML = "";
  extraOptions.innerHTML = "";


  title.innerHTML = curr.name;

  ingredients.innerHTML += curr.ingredients1;
  ingredients.innerHTML += "<br>" + curr.ingredients2;
  ingredients.innerHTML += "<br>" + curr.ingredients3;
  ingredients.innerHTML += "<br>" + curr.ingredients4;

  allergens.innerHTML = curr.allergens;

  extraOptions.innerHTML += checkbox + curr.extra1;
  extraOptions.innerHTML += "<br>" + checkbox + curr.extra2;
  extraOptions.innerHTML += "<br>" + checkbox + curr.extra3;
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function submitPress() {
  var orderItems = document.getElementById("order_items");

  if(alreadyCleared == false){
    orderItems.innerHTML = "";
    alreadyCleared = true;
  }

  if(currentItem == 1){
    orderItems.innerHTML += "Fettuccine Alfredo - 14.99<br><br>";
    priceTotal += 14.99;
  }


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

function dietaryAlert() {
  var checkboxes = document.getElementsByClassName("dietary_checkbox");

  for(var i = 0; i < checkboxes.length && alreadyAlerted == false; i++){
    if(checkboxes[i].checked)
    {
      alert("Please note that for prototyping reasons, this section is not functional.");
      alreadyAlerted = true;
    }
  }
}
