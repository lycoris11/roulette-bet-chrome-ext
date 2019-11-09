document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("runBetToggle").addEventListener('click', function(){
		if(this.clicked){
			alert("Betting Started!");
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            	chrome.tabs.executeScript(tabs[0].id, {file: "page.js"});
        	});
		}
	});

	document.getElementById("stopBet").addEventListener('click', function(){
		if(this.clicked){
			alert("Betting Started!");
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            	chrome.tabs.executeScript(tabs[0].id, {file: "page.js"}, clearInterval());
        	});
		}
	});
});