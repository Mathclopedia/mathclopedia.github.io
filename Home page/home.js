//start button
var startButton = document.getElementById("start");

//asks what math they're in
var math = document.getElementById("math");
var welcome = document.getElementById("welcome");

//select button
/*
var selectButton = document.getElementById("select");

selectButton.addEventListener("click", newPage);
function newPage() {
    
}
*/

//allows start! to work
startButton.addEventListener("click", start);
function start() {
    welcome.innerHTML = math.innerHTML;
    startButton.style.display = "none";
}