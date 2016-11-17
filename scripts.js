var tabs = ["pasta", "steak", "soup", "beverage", "dessert"];
var alreadyAlerted = false;
var currentItem = 0;
var alreadyCleared = false;
var orderedItems = []; // store objects in this that kinda work like {item #, extra1 0/1, extra2 0/1, extra3 0/1}
                       // we need this because we need to stop ignoring it. it's important for the checkout
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
  extra3:"Extra sauce",
  extra1price:3.99,
  extra2price:2.99,
  extra3price:0.99,
  price:14.99
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
  extra3:"Light cheese",
  extra1price:3.99,
  extra2price:2.99,
  extra3price:0.00,
  price:17.99
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
  extra3:"Extra sauce",
  extra1price:4.99,
  extra2price:4.99,
  extra3price:0.99,
  price:21.99
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
  extra3:"Add cheese",
  extra1price:3.99,
  extra2price:2.99,
  extra3price:1.99,
  price:19.99
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
  extra3:"Extra cheese",
  extra1price:3.99,
  extra2price:2.99,
  extra3price:1.99,
  price:20.99
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
  extra3:"Extra sauce",
  extra1price:3.99,
  extra2price:2.99,
  extra3price:0.99,
  price:17.99
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
  extra3:"Extra mashed potatoes",
  extra1price:1.99,
  extra2price:7.99,
  extra3price:1.99,
  price:22.99
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
  extra3:"Extra vegetables",
  extra1price:1.99,
  extra2price:7.99,
  extra3price:0.99,
  price:21.99
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
  extra3:"Add mushrooms",
  extra1price:1.99,
  extra2price:7.99,
  extra3price:0.99,
  price:26.99
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
  extra3:"Add vegetables",
  extra1price:4.99,
  extra2price:0.99,
  extra3price:0.99,
  price:31.99
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
  extra3:"No parsley",
  extra1price:2.99,
  extra2price:3.99,
  extra3price:0.00,
  price:6.99
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
  extra3:"Upsize (2x)",
  extra1price:1.99,
  extra2price:1.99,
  extra3price:2.99,
  price:4.99
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
  extra3:"Extra broccoli",
  extra1price:3.99,
  extra2price:1.99,
  extra3price:0.99,
  price:7.99
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
  extra3:"Add cheese",
  extra1price:2.99,
  extra2price:1.99,
  extra3price:1.99,
  price:5.99
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
  extra3:"Extra vegetables",
  extra1price:2.99,
  extra2price:1.99,
  extra3price:0.99,
  price:5.99
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
  extra3:"Add bacon",
  extra1price:2.99,
  extra2price:0.99,
  extra3price:1.99,
  price:5.99
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
  extra3:"Upsize (2x)",
  extra1price:0.00,
  extra2price:0.00,
  extra3price:0.99,
  price:1.99
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
  extra3:"Upsize (2x)",
  extra1price:0.00,
  extra2price:0.00,
  extra3price:0.99,
  price:1.99
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
  extra3:"Upsize (2x)",
  extra1price:0.00,
  extra2price:0.00,
  extra3price:0.99,
  price:1.99
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
  extra3:"Upsize (2x)",
  extra1price:0.00,
  extra2price:0.00,
  extra3price:0.99,
  price:1.99
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
  extra3:"Add sugar",
  extra1price:0.00,
  extra2price:0.00,
  extra3price:0.00,
  price:1.59
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
  extra3:"Add sugar",
  extra1price:0.00,
  extra2price:0.00,
  extra3price:0.00,
  price:1.59
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
  extra3:"Upsize (2x)",
  extra1price:0.99,
  extra2price:0.99,
  extra3price:1.99,
  price:3.99
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
  extra3:"Upsize (2x)",
  extra1price:0.99,
  extra2price:0.99,
  extra3price:1.99,
  price:3.99
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
  extra3:"Add chocolate sauce",
  extra1price:0.99,
  extra2price:0.99,
  extra3price:0.99,
  price:4.99
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
  extra3:"Upsize (2x)",
  extra1price:0.99,
  extra2price:1.99,
  extra3price:2.99,
  price:5.99
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
  extra3:"Upsize (2x)",
  extra1price:0.99,
  extra2price:1.99,
  extra3price:2.99,
  price:4.99
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
  extra3:"Add chocolate sauce",
  extra1price:0.99,
  extra2price:1.99,
  extra3price:0.99,
  price:5.99
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
  document.getElementById("item_detail_block").style.display = "block";
  document.getElementById("checkout_block").style.display = "none";

  var title = document.getElementsByClassName("item_detail_title")[0];
  var ingredients = document.getElementsByClassName("item_ingredients")[0];
  var allergens = document.getElementsByClassName("item_allergens")[0];
  var extraOptions = document.getElementsByClassName("extra_options")[0];
  var checkbox1 = "<input type='checkbox' id='checkbox1'>";
  var checkbox2 = "<input type='checkbox' id='checkbox2'>";
  var checkbox3 = "<input type='checkbox' id='checkbox3'>";
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

  extraOptions.innerHTML += checkbox1 + curr.extra1 + " - " + curr.extra1price.toFixed(2);
  extraOptions.innerHTML += "<br>" + checkbox2 + curr.extra2 + " - " + curr.extra2price.toFixed(2);
  extraOptions.innerHTML += "<br>" + checkbox3 + curr.extra3 + " - " + curr.extra3price.toFixed(2);
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("item_detail_block").style.display = "none";
  document.getElementById("checkout_block").style.display = "none";
}

function submitPress() {
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox3 = document.getElementById("checkbox3");
  var curr = items[currentItem];
  var currPriceTotal = 0;

  var itemObject = {
    item_num:currentItem,
    extra1:0,
    extra2:0,
    extra3:0,
    price_total:0
  };

  currPriceTotal += curr.price;

  if(checkbox1 != null && checkbox1.checked){
    currPriceTotal += curr.extra1price;
    itemObject.extra1 = 1;
  }

  if(checkbox2 != null && checkbox2.checked){
    currPriceTotal += curr.extra2price;
    itemObject.extra2 = 1;
  }

  if(checkbox3 != null && checkbox3.checked){
    currPriceTotal += curr.extra3price;
    itemObject.extra3 = 1;
  }

  itemObject.price_total = currPriceTotal;

  orderedItems = orderedItems.concat(itemObject);

  drawOrderSummary();
  closeOverlay();
}

function drawOrderSummary() {
  var orderItems = document.getElementById("order_items");
  var curr;
  var total = 0;

  orderItems.innerHTML = ""; //clear it first, just in case

  if(orderedItems.length == 0){
    orderItems.innerHTML = "Your order is currently empty";
  }
  else{
    for(var i = 0; i < orderedItems.length; i++){
      curr = orderedItems[i];

      orderItems.innerHTML += items[curr.item_num].name + " - " + curr.price_total.toFixed(2) + "<br><br>";
      total += curr.price_total;
    }
  }

  document.getElementById("order_total_amount").innerHTML = total.toFixed(2);
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

function checkOut() {
  if(orderedItems == 0)
  {
    alert("You must add items to your order before checking out!");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("item_detail_block").style.display = "none";
    document.getElementById("checkout_block").style.display = "none";
  }
  else{
    var htmlOutput = "";
    var calculated_subtotal = 0;
    var calculated_taxes = 0;
    var calculated_total = 0;

    document.getElementById("overlay").style.display = "block";
    document.getElementById("item_detail_block").style.display = "none";
    document.getElementById("checkout_block").style.display = "block";

    var checkoutList = document.getElementsByClassName("checkout_list")[0];
    var subtotal = document.getElementById("subtotal_amount");
    var taxes = document.getElementById("taxes_amount");
    var total = document.getElementById("total_amount");

    htmlOutput += "<table id='checkout_list_table'>";

    for(var i = 0; i < orderedItems.length; i++)
    {
      var curr = orderedItems[i];

      calculated_subtotal += curr.price_total;

      htmlOutput += "<tr class='checkout_list_table_row'>"
      htmlOutput += "<td class='checkout_list_table_cell_left'>";

      htmlOutput += items[curr.item_num].name;

      htmlOutput += "<div class='extras'>";

      if(curr.extra1 == 0 && curr.extra2 == 0 && curr.extra3 == 0){
        htmlOutput += "<br>No extras";
      }
      else{
        var extra1 = items[curr.item_num].extra1;
        var extra1price = items[curr.item_num].extra1price;
        var extra2 = items[curr.item_num].extra2;
        var extra2price = items[curr.item_num].extra2price;
        var extra3 = items[curr.item_num].extra3;
        var extra3price = items[curr.item_num].extra3price;

        if(curr.extra1 == 1){
          htmlOutput += "<br>" + extra1 + " - " + extra1price.toFixed(2);
        }

        if(curr.extra2 == 1){
          htmlOutput += "<br>" + extra2 + " - " + extra2price.toFixed(2);
        }

        if(curr.extra3 == 1){
          htmlOutput += "<br>" + extra3 + " - " + extra3price.toFixed(2);
        }
      }


      htmlOutput += "</div>"


      htmlOutput += "</td><td class='checkout_list_table_cell_right'>";

      htmlOutput += curr.price_total.toFixed(2);

      htmlOutput += "</td><td class='order_delete_button' onclick='deleteOrder(" + i + ")'>";

      htmlOutput += "<img src='images/delete_button.jpg' height='10' width='10'>";

      htmlOutput += "</td></tr>";
    }

    htmlOutput += "</table>";

    checkoutList.innerHTML = htmlOutput;

    subtotal.innerHTML = "$" + calculated_subtotal.toFixed(2);

    calculated_taxes = calculated_subtotal * 0.15;

    taxes.innerHTML = "$" + calculated_taxes.toFixed(2);

    calculated_total = calculated_taxes + calculated_subtotal;

    total.innerHTML = "$" + calculated_total.toFixed(2);

  }
}

function deleteOrder(numToDelete){
  orderedItems.splice(numToDelete, 1);
  drawOrderSummary();
  checkOut();
}

function completeOrder(){
  var cardNumber = document.getElementById("card_input").value;
  var expiryMonth = document.getElementById("month_input").value;
  var expiryYear = document.getElementById("year_input").value;

  var cardValid = cardNumber != null && cardNumber != "";
  var expiryMonthValid = expiryMonth != null && expiryMonth != "";
  var expiryYearValid = expiryYear != null && expiryYear != "";

  if(cardValid && expiryMonthValid && expiryYearValid)
  {
    window.alert("Your order has been successfully placed. Thanks for dining at Joey's Gallery!");
    goToHome();
  }
  else {
    window.alert("Please completely fill out payment information.");
  }
}
