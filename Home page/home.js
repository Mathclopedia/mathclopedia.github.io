//start button
var startButton = document.getElementById("start");

//asks what math they're in
var math = document.getElementById("math");
var welcome = document.getElementById("welcome");

//allows start! to work
startButton.addEventListener("click", start);
function start() {
    welcome.innerHTML = math.innerHTML;
    startButton.style.display = "none";
}

//select button
var select = document.getElementById("select");

var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight= document.getElementById("eight");
var alg1 = document.getElementById("alg1");
var geo = document.getElementById("geo");
var alg2 = document.getElementById("alg2");
var precalc = document.getElementById("precalc");
var calcAB = document.getElementById("calcAB");
var calcBC = document.getElementById("calcBC");
var stats = document.getElementById("stats");
var unitCircle = document.getElementById("unitCircle");
var unitConversion = document.getElementById("unitConversion");