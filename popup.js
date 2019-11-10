document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("runBetToggle").addEventListener('click', popup);
});


function popup() {
	 chrome.runtime.sendMessage({msg: "start"});
}
