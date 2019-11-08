document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("runBetToggle").addEventListener('change', function(){
		if(this.checked){
			startBetting();
		}else{
			stopBetting();
		}
	});

	function startBetting() {
		alert("Betting Started!");
	}

	function stopBetting() {
		alert("Betting Stopped!");
	}
});