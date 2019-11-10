document.addEventListener('DOMContentLoaded', function() {
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