/*document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
	document.getElementById("runBetToggle").addEventListener('click', function(){
		alert("Betting Started!");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        	chrome.tabs.executeScript(tabs[0].id, {file: "page.js"});
    	});
	});

	document.getElementById("stopBet").addEventListener('click', function(){
		alert("Betting Stopped!");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        	chrome.tabs.executeScript(tabs[0].id, {file: "page.js"}, run=false);
    	});
	});
});
=======
	document.getElementById("runBetToggle").addEventListener('click', popup);
});*/


function popup() {
	 chrome.runtime.sendMessage({msg: "start"});
}
>>>>>>> 2b87c0ffaa2dec995e526f1f66cb5778d1e90a80
