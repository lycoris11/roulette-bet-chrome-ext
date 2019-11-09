document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("runBetToggle").addEventListener('change', function(){
		if(this.checked){
			alert("Betting Started!");
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            	chrome.tabs.executeScript(tabs[0].id, {file: "page.js"});
        	});
		}else{
			stopBetting();
		}
	});
	function stopBetting() {
		alert("Betting Stopped!");
	}
});