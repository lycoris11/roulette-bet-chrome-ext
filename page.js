function clickPenny() {
    document.getElementsByClassName("bet-input__control")[2].click();
}

function clickBlack(){
	document.getElementsByClassName("bet-btn")[0].click()
}

function clickGold(){
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

function beginBetting(){
  var balance = getBalance();
  clickPenny();
  clickBlack();
  balance = getBalance();
  console.log("Inside Begin Betting!");
  setInterval(function(){
    var afterBetBal = getBalance();
    console.log("Inside the interval.");
    if(balance >= afterBetBal){
      console.log("Inside balance > getBalance");
      document.getElementsByClassName("bet-input__control")[7].click();
      clickBlack();
    }else{
      console.log("inside this");
      clickClear();
      clickPenny();
      clickBlack();
      balance = getBalance();
    }
  },28000);
}
