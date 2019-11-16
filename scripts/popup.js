document.getElementById("runBetToggle").addEventListener('click', popup);
document.getElementById("stopBet").addEventListener('click', stopBetting);

function popup() {
	var customBetVal = document.getElementById("customBet").value;
	chrome.runtime.sendMessage({msg: "start", customBetVal: customBetVal});
}

function stopBetting(){
	chrome.runtime.sendMessage({msg: "stop"});
}
