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

//clears the bet
function clickClear(){
  document.getElementsByClassName("ml-3 button-pill uppercase")[0].click();
}

//clicks on the bet that has the most previous wins
function clickBlackOrGold(){
  if(getBlackCount()>=getGoldCount()){
    clickBlackBet();
    console.log("Betting Black!");
  }else{
    clickGoldBet();
    console.log("Betting Gold!");
  }
}

function beginBetting(){
  console.log("Inside Begin Betting!");
  var initialBalance = getBalance();
  //Click on a Dime
  clickDime();
  //Bet
  clickBlackOrGold();
  //Check balance afterwards
  afterBetBal = getBalance();
  setInterval(function(){
    //Get the balance after the bet
    afterBetBal = getBalance();
    //If the balance after bet is less than initial
    //you lose and double your bet
    if(afterBetBal <= initialBalance){
      console.log("Double Bet!");
      clickDouble();
      initialBalance = getBalance();
      clickBlackOrGold();
    }else{
      //If balance after bet is greater than inital
      //you win, clear bet, click dime, and bet
      console.log("We Won!");
      clickClear();
      clickDime();
      initialBalance = getBalance();
      clickBlackOrGold();
    }
  },27500);
}

chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        window.startMsg = request.msg;
        if(request.msg === "start" ) {
          beginBetting();
        }
});
