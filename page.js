var run = true;

function startRunning(run){
    // do whatever you like here
    if(run){
    	console.log("Running!");
    }else{
    	console.log("Stopping!");
    }
    setTimeout(startRunning, 5000);
}

startRunning(run);

function clickPenny() {
    document.getElementsByClassName("bet-input__control")[1].click();
}

function clickBlack(){
	document.getElementsByClassName("bet-btn")[0].click()
}

function clickGold(){
	document.getElementsByClassName("bet-btn")[2].click()
}

function toggleRun(){
	if(run){
		run = false;
	}else{
		run = true;
	}
}