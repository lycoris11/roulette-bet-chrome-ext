chrome.runtime.onMessage.addListener(function(request, sender, response){

     if(request.msg==="start"){
         startBet();
     }
});



function startBet(){
    chrome.tabs.query({ active:true, currentWindow:true} , function(tab){
        chrome.tabs.sendMessage(tab[0].id, {msg : "start"});
        console.log("Got to me!");

    });
};
