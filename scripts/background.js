chrome.runtime.onMessage.addListener(function(request, sender, response){
     if(request.msg === "start"){
         startBet(request.customBetVal);
     }
});

chrome.runtime.onMessage.addListener(function(request, sender, response){
	if(request.msg === "stop"){
		stopBet();
	}
});

function startBet(customBetVal){
    chrome.tabs.query({active:true, currentWindow:true}, function(tab){
        chrome.tabs.sendMessage(tab[0].id, {msg: "start", customBetVal: customBetVal});
        console.log("Got to me!");
    });
}

function stopBet(){
	chrome.tabs.query({active:true, currentWindow:true}, function(tab){
		chrome.tabs.sendMessage(tab[0].id, {msg: "stop"});
	});
}
