document.getElementById("runBetToggle").addEventListener('click', popup);


function popup() {
	var customBetVal = document.getElementById("customBet").value;
	chrome.runtime.sendMessage({msg: "start", customBetVal: customBetVal});
}
