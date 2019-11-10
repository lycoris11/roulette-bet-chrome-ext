var startMsg = "I'm Dumb";

function clickPenny() {
    document.getElementsByClassName("bet-input__control")[1].click();
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


chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        window.startMsg = request.msg;
        if(request.msg === "start" ) {
          beginBetting();
        }
});









function beginBetting(){
  var stopOrRun = true;
    var balance = getBalance();
    clickPenny();

    var click = false;
    var checkTime = setInterval(function(){
      if($())
    })
      if(getBlackCount > getGoldCount){
        clickBlack();
      }else if(getBlackCount === getGoldCount){
        clickBlack();
      }else{
        clickGold();
      }
    });

    if(tempBalance>balance)

  }
}
