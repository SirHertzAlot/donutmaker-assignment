let total = 0;

//Player One Object, the object that keeps track of all player modifications to their donuts(score).
const playerOne = {
  name: "player",
  donutCount: 0,
  donutMultiplierCost: 10,
  score: 0
};

// Auto Clicker Object used to hold all auto clicker properties, instead of using variables.
const autoClicker = {
  quantity: 0,
  cost: 100,
  multiplier: 0.1,
  rate: 1
};

//Donut Multiplier Object used to hold all properties for our donut multiplier entity.
const donutMultiplier = {
  quantity: 0,
  cost: 10,
  multiplier: 1.2
};

//Retrieve all the donut counters and donut manual clicker buttons
let manualClickerCounter = document.getElementById("donutCounter");
let manualClickerButton = document.getElementById("donutManualClicker");

//Create the function that increments our player donuts(score).
function manualClickerFunc() {
  if(donutMultiplier.quantity >= 1){
    playerOne.donutCount = playerOne.donutCount + 1 || 1;
    manualClickerCounter.innerText = playerOne.donutCount;
    let initialRate = playerOne.donutCount;
    let donutMultiplied = donutMultiplier.multiplier * initialRate;
    playerOne.donutCount = donutMultiplied;
    console.log(`${playerOne.donutCount} has been generated via manual clicking. This is being triggered inside manualClicker if statement.`);
    return playerOne.donutCount;
  } else {
    console.log(`${playerOne.donutCount} has been generated via manual clicking.`);
    playerOne.donutCount = playerOne.donutCount + 1 || 1;
    manualClickerCounter.innerText = playerOne.donutCount;
    return playerOne.donutCount;
  }
  
}

//This tells our manual Clicker function that every time we click the manual Clicker button, we should perform the manualClickerFunc set of actions.
manualClickerButton.addEventListener("click", manualClickerFunc);

// Let's retrieve all autoClicker elements(button, counter span, and cost)
let autoClickerButton = document.getElementById("donutAutoClicker");
let autoClickerCounter = document.getElementById("autoClickerCounter");
let autoClickerCost = document.getElementById("autoClickerCost");

//Let's retrieve our donut multiplier elements now so we can link them to functions. 
let donutMultiplierCost = document.getElementById("donutMultiplierCost");
let donutMultiplierButton = document.getElementById("donutMultiplierButton");

//Try to render the starting cost of donut auto clicker & donut multiplier 
 window.onload = function(){
  autoClickerCost.innerText = autoClicker.cost;
  donutMultiplierCost.innerText = playerOne.donutMultiplierCost;
}; 

//Since we only want our auto Clicker to work when the button is clicked using a function that can be passed a callback to an event listener.
function autoClickerFunc() {
  if(playerOne.donutCount > autoClicker.cost){
    console.log(`Right now auto clickers cost ${autoClicker.cost}`);
    playerOne.donutCount = playerOne.donutCount - autoClicker.cost;
    //Every time we fire our autoClickerFunc, the autoClicker quantity increments by one.
    autoClicker.quantity = autoClicker.quantity + 1 || 1;
    //Display the auto Clicker number
    autoClickerCounter.innerText = autoClicker.quantity;
    //Set the rate in which auto clicker, auto clicks (default is 1 second or 1000 milliseconds.)
    timer = window.setInterval(manualClickerFunc, 1000);
    setTimeout(function(){
      clearInterval(timer);
    }, 30000);
    console.log(`Congratulations, you've activated ${autoClicker.quantity} auto clicker(s)!`);
  } else if(playerOne.donutCount < autoClicker.cost) {
    console.log(`Please make more donuts, you need at least ${autoClicker.cost}`);
  }
}

function autoClickerCostFunc(){
  if(autoClicker.quantity > 1){
    let percentage = autoClicker.multiplier;
    let subtotal = autoClicker.cost * percentage;
    let total = subtotal + autoClicker.cost;
    autoClickerCost.innerText = total;
    console.log(`The total after applying ${percentage}% to clicker cost ${autoClicker.cost}`);
    return autoClicker.cost = total;
  } else {
    return;
  }
}

//donutMultiplier function to make donut multiplier 
function donutMultiplierFunc() {
  if(playerOne.donutCount > donutMultiplier.cost){
    console.log(`Right now your donut multiplier cost ${donutMultiplier.cost}`);
    playerOne.donutCount = playerOne.donutCount - donutMultiplier.cost;
    //Every time we fire our autoClickerFunc, the autoClicker quantity increments by one.
    donutMultiplier.quantity = donutMultiplier.quantity + 1 || 1;
    //Display the donut multiplier number
    donutMultiplierCost.innerText = donutMultiplier.cost;
    //Set the rate in which auto clicker, auto clicks (default is 1 second or 1000 milliseconds.)
    //setInterval(manualClickerFunc, 1000);
    donutMultiplierCounter.innerText = donutMultiplier.quantity;
    console.log(`Congratulations, you've activated ${donutMultiplier.quantity} donut multiplier(s)!`);
  } else if(playerOne.donutCount < donutMultiplier.cost) {
    console.log(`Please make more donuts, you need at least ${donutMultiplier.cost}.`);
  }
}

//donutMultiplier cost function to keep increasing the cost of the donut multipliers.
function donutMultiplierCostFunc(){
  if(donutMultiplier.quantity > 1){
    let percentage = donutMultiplier.multiplier;
    let subtotal = donutMultiplier.cost * percentage;
    let total = subtotal + donutMultiplier.cost;
    donutMultiplier.innerText = total;
    console.log(`The total after applying ${percentage}% to donut multiplier cost ${donutMultiplier.cost}`);
    return donutMultiplier.cost = total;
  } else {
    return;
  }
}

//Let's make sure the user is not able to click the buttons until we have enough to pay for each in-game item.
setInterval( function(){
  if(playerOne.donutCount < autoClicker.cost){
    //Auto Clicker disable button. Thinking about turning it into a function and passing it as a callback to setInterval, even though that's essentially what I'm doing now. 
    autoClickerButton.style.backgroundImage = 'none';
    autoClickerButton.style.border = 'none';
    autoClickerButton.style.boxShadow = 'none';
    autoClickerButton.style.cursor = "not-allowed"
    autoClickerButton.style.opacity = '0.4';
    autoClickerButton.style.pointerEvents = 'none';
  } else {
    autoClickerButton.style.backgroundImage = '';
    autoClickerButton.style.border = '';
    autoClickerButton.style.boxShadow = '';
    autoClickerButton.style.cursor = ""
    autoClickerButton.style.opacity = '';
    autoClickerButton.style.pointerEvents = '';
  };
  if(playerOne.donutCount < donutMultiplier.cost){
    //Donut Multiplier disable button. Thinking about turning it into a function and passing it as a callback to setInterval, even though that's essentially what I'm doing now. 
    donutMultiplierButton.style.backgroundImage = 'none';
    donutMultiplierButton.style.border = 'none';
    donutMultiplierButton.style.boxShadow = 'none';
    donutMultiplierButton.style.cursor = "not-allowed"
    donutMultiplierButton.style.opacity = '0.4';
    donutMultiplierButton.style.pointerEvents = 'none';
  } else {
    donutMultiplierButton.style.backgroundImage = '';
    donutMultiplierButton.style.border = '';
    donutMultiplierButton.style.boxShadow = '';
    donutMultiplierButton.style.cursor = ""
    donutMultiplierButton.style.opacity = '';
    donutMultiplierButton.style.pointerEvents = '';
  };
},0125);

//Let's grab our reset button so we can build our reset function and wire it to an event listener.
let resetButton = document.getElementById("reset");

//Logic for reset button.
function reset(){
  if(playerOne.donutCount >= 1 || autoClicker.quantity >= 1 || donutMultiplier.quantity >= 1){
    //Reset all the variables to early game.
    playerOne.donutCount = 0;
    autoClicker.quantity = 0;
    autoClicker.cost = 100;
    donutMultiplier.cost = 10;
    donutMultiplier.quantity = 0;

    //Reset all the views to reflect new values.
    manualClickerCounter.innerText = playerOne.donutCount;
    autoClickerCounter.innerText = autoClicker.quantity;
    donutMultiplierCost.innerText = donutMultiplier.cost;
    autoClickerCost.innerText = autoClicker.cost;
    donutMultiplierCounter.innerText = donutMultiplier.quantity;
    //break reset;
    clearInterval(timer, 0);
  } else {
    return false;
  }
}

//Add an event listener to our auto Clicker button so every time it's clicked, we can pay for our auto clickers and also enable them to click for us.
autoClickerButton.addEventListener("click", autoClickerCostFunc);
autoClickerButton.addEventListener("click", autoClickerFunc);


//Add an event listener to our donut multiplier button and cost.
donutMultiplierButton.addEventListener("click", donutMultiplierFunc);
donutMultiplierButton.addEventListener("click", donutMultiplierCostFunc);

//Add an event listener to our reset button so we can link it to our reset function.
resetButton.addEventListener("click", reset);

