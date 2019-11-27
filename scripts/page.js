var bet; 
var betCycle;
var testBet
var testBalance = 1755.7;
var randRegExp = new Array(7);
randRegExp[0] = new RegExp("4{1}\.[0-9]{2}");
randRegExp[1] = new RegExp("5{1}\.[0-9]{2}");
randRegExp[2] = new RegExp("6{1}\.[0-9]{2}");
randRegExp[3] = new RegExp("7{1}\.[0-9]{2}");
randRegExp[4] = new RegExp("8{1}\.[0-9]{2}");
randRegExp[5] = new RegExp("9{1}\.[0-9]{2}");
randRegExp[6] = new RegExp("10{1}\.[0-9]{2}");

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

//bettingfunction
function regexMatchBetting(){
  console.log("Inside Regex Match Betting");
  clickPenny()
  //return the class of the coin we bet on
  var ourBetClass = clickBlackOrGold();
  //loop that runs every second
  var regEx = new RegExp("6{1}\.[0-9]{2}");
  betCycle = setInterval(function(){
    //check for existance of timer
    if(document.getElementsByClassName("text-2xl font-bold").length > 0){
      //match regular expression to time and execute betting
      if(regEx.test(document.getElementsByClassName("text-2xl font-bold")[0].innerText)){
        //win condition
        if(ourBetClass == getWinningBetClass()){
          console.log("We Won!");
          clickClear();
          clickPenny()
          ourBetClass = clickBlackOrGold();
        //loss  
        }else{
          console.log("We Lost, Double Bet!");
          clickDouble();
          ourBetClass = clickBlackOrGold();
        }
      }
    }
  },1000);
}

//listener for stop
chrome.runtime.onMessage.addListener(function(request, sender, response){
  if(request.msg === "stop"){
    clearInterval(betCycle);
  }
});

//listener for start
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  window.startMsg = request.msg;
  if(request.msg === "start"/* && request.customBetVal === ""*/) {
    regexMatchBetting();
  }/*else if(request.msg === "start" && request.customBetVal.length > 0){
    beginCustomBetting(request.customBetVal);
  }*/
});

/************************************TESTING FUNCTIONS FOR DRY RUNS*************/

//bets the optimal bet amount
function testClickOptimumBet(){
  if(testBalance >= 1024 && testBalance < 1229){
    testBet = 0.5;
    console.log("Bet is 0.5!");
  }
  if(testBalance >= 1229 && testBalance < 1433){
    testBet = 0.6;
    console.log("Bet is 0.6!");
  }
  if(testBalance >= 1433 && testBalance < 1638){
    testBet = 0.7;
    console.log("Bet is 0.7!");
  }
  if(testBalance >= 1638 && testBalance < 1842){
    testBet = 0.8;
    console.log("Bet is 0.8!");
  }
  if(testBalance >= 1842 && testBalance < 2048){
    testBet = 0.9;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 2048 && testBalance < 2252){
    testBet = 1.0;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 2252 && testBalance < 2456){
    testBet = 1.1;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 2456 && testBalance < 2661){
    testBet = 1.2;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 2661 && testBalance < 2865){
    testBet = 1.3;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 2865 && testBalance < 3071){
    testBet = 1.4;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 3071 && testBalance < 3275){
    testBet = 1.5;
    console.log("Bet is 0.9!");
  }
  if(testBalance >= 3275){
    testBet = 1.6;
    console.log("Bet is 0.9!");
  }

}

//subtracts from balance
function testSubtractBet(n){
  testBalance -= n;
}

//bets on black or gold
function testClickBlackOrGold(){
  if(getBlackCount()>=getGoldCount()){
    console.log("Betting Black!");
    return "inline-block w-24 h-24 rounded-full ml-1 coin-ct";
  }else{
    console.log("Betting Gold!");
    return "inline-block w-24 h-24 rounded-full ml-1 coin-t";
  }
}

//sets balance
function testChangeBalance(){
  document.getElementsByClassName("balance")[1].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerText = testBalance;
}

//betting function
function testBetMoney(){
  testClickOptimumBet()
  testSubtractBet(testBet);
  testChangeBalance()
}

//simulates betting
function testTimeBasedBetting(){
  console.log("Inside Test Time Based Betting");
  testChangeBalance();
  testBetMoney()
  //return the class of the coin we bet on
  var ourBetClass = testClickBlackOrGold();

  checkforThree = setInterval(function(){
    if(document.getElementsByClassName("text-2xl font-bold").length > 0){
      var regEx = new RegExp("6{1}\.[0-9]{2}"); 
      if(regEx.test(document.getElementsByClassName("text-2xl font-bold")[0].innerText)){
        if(ourBetClass == getWinningBetClass()){
          testBet *= 2;
          testBalance += testBet;
          console.log("We Won!");
          testChangeBalance();
          testBet = 0;
          testBetMoney();
          ourBetClass = testClickBlackOrGold();
        }else{
          testBet *= 2;
          if(testBet > testBalance){
            clearInterval(checkforThree);
            console.log("We Lost It All!")
          }else{
            testSubtractBet(testBet);
            testChangeBalance();
            console.log("We Lost, Double Bet to " + testBet + " Balance: $" + testBalance);
            ourBetClass = testClickBlackOrGold();
          }
        }
      }
    }
  },1000);
}

/**********************************************BET AT INTERVAL**********************
function betterBeginBetting(){
  console.log("Inside Better Betting");
  //click bet ammount
  clickDollar()
  //return the class of the coin we bet on
  var ourBetClass = clickBlackOrGold();
  bet = setInterval(function(){
    //if the coin matches the winning class then we double down
    if(ourBetClass == getWinningBetClass()){
      console.log("We Won!");
      clickClear();
      clickDollar()
      ourBetClass = clickBlackOrGold();
    }else{
      console.log("We Lost, Double Bet!");
      clickDouble();
      ourBetClass = clickBlackOrGold();
    }
  }, 23000);
}
************************************************************************************/

/**********************************************CUSTOM BETTING***********************
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
*************************************************************************************/
