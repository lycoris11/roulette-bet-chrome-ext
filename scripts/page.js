var bet;

//sets a penny bet
function clickPenny() {
  document.getElementsByClassName("bet-input__control")[1].click();
}

//sets a dime bet
function clickDime() {
  document.getElementsByClassName("bet-input__control")[2].click();
}

//sets 1 dollar bet
function clickDollar() {
  document.getElementsByClassName("bet-input__control")[3].click();
}

//doubles bet
function clickDouble(){
  document.getElementsByClassName("bet-input__control")[7].click();
}

//clicks the black bet
function clickBlackBet(){
	document.getElementsByClassName("bet-btn")[0].click()
}

//clicks the gold bet
function clickGoldBet(){
	document.getElementsByClassName("bet-btn")[2].click()
}

//clears the bet
function clickClear(){
  document.getElementsByClassName("ml-3 button-pill uppercase")[0].click();
}

//input custom bet
function clickTextInput(customBetVal){
  document.getElementsByClassName("bg-transparent w-full h-full")[0].value = customBetVal;
}

//returns balance
function getBalance(){
  return document.getElementsByClassName("balance")[1].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerText;
}

//returns number of past black wins
function getBlackCount(){
  return document.getElementsByClassName("text-light-grey-1 text-xxs font-bold mr-2")[3].innerText;
}

//returns number of past gold bet wins
function getGoldCount(){
  return document.getElementsByClassName("text-light-grey-1 text-xxs font-bold mr-2")[5].innerText;
}

//return the most recent winning class name of either black or gold
function getWinningBetClass(){
  return document.getElementsByClassName("previous-rolls-item")[19].firstElementChild.className;
}

//clicks on the bet that has the most previous wins
function clickBlackOrGold(){
  if(getBlackCount()>=getGoldCount()){
    clickBlackBet();
    console.log("Betting Black!");
    return "inline-block w-24 h-24 rounded-full ml-1 coin-ct";
  }else{
    clickGoldBet();
    console.log("Betting Gold!");
    return "inline-block w-24 h-24 rounded-full ml-1 coin-t";
  }
}

function betterBeginBetting(){
  console.log("Inside Better Betting");
  //click bet ammount
  clickDime();
  clickDime();
  clickDime();
  clickDime();
  clickDime();
  //return the class of the coin we bet on
  var ourBetClass = clickBlackOrGold();
  bet = setInterval(function(){
    //if the coin matches the winning class then we double down
    if(ourBetClass == getWinningBetClass()){
      console.log("We Won!");
      clickClear();
      clickDime();
      clickDime();
      clickDime();
      clickDime();
      clickDime();
      ourBetClass = clickBlackOrGold();
    }else{
      console.log("We Lost, Double Bet!");
      clickDouble();
      ourBetClass = clickBlackOrGold();
    }
  }, 28000);
}

function beginCustomBetting(customBetVal){
  console.log("Inside Custom Betting!");
  //Input a custom amount
  clickTextInput(customBetVal);
  //Bet
  var ourBetClass = clickBlackOrGold();
  bet = setInterval(function(){
    if(ourBetClass == getWinningBetClass()){
      console.log("We Won!");
      clickClear();
      clickTextInput(customBetVal);
      outBetClass = clickBlackOrGold();
    }else{
      console.log("We Lost, Double Bet!");
      clickDouble();
      outBetClass = clickBlackOrGold();
    }
  },28000);
}

chrome.runtime.onMessage.addListener(function(request, sender, response){
  if(request.msg === "stop"){
    clearInterval(bet);
  }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  window.startMsg = request.msg;
  if(request.msg === "start" && request.customBetVal === "") {
    betterBeginBetting();
  }else if(request.msg === "start" && request.customBetVal.length > 0){
    beginCustomBetting(request.customBetVal);
  }
});
