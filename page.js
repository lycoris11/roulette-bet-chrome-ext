function clickPenny() {
    document.getElementsByClassName("bet-input__control")[1].click();
}

function clickDime() {
    document.getElementsByClassName("bet-input__control")[2].click();
}

function clickDollar() {
    document.getElementsByClassName("bet-input__control")[3].click();
}

function clickBlackBet(){
	document.getElementsByClassName("bet-btn")[0].click()
}

function clickGoldBet(){
	document.getElementsByClassName("bet-btn")[2].click()
}

function getBalance(){
  return document.getElementsByClassName("balance")[1].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerText;
}

function getBlackCount(){
  return document.getElementsByClassName("text-light-grey-1 text-xxs font-bold mr-2")[3].innerText;
}

function getGoldCount(){
  return document.getElementsByClassName("text-light-grey-1 text-xxs font-bold mr-2")[5].innerText;
}

function clickClear(){
  document.getElementsByClassName("ml-3 button-pill uppercase")[0].click();
}


chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        window.startMsg = request.msg;
        if(request.msg === "start" ) {
          beginBetting();
        }
});

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
  var balance = getBalance();
  clickDime();
  
  afterBetBal = getBalance();
  setInterval(function(){
    afterBetBal = getBalance();
    if(balance >= afterBetBal){
      console.log("Double Bet!");
      document.getElementsByClassName("bet-input__control")[7].click();
      balance = getBalance();
      clickBlackOrGold();
    }else{
      console.log("We Won!");
      clickClear();
      clickDime();
      balance = getBalance();
      clickBlackOrGold();
    }
  },28000);
}
