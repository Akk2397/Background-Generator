var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.getElementById("random");

function setGradient(){
	body.style.background=
	"linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";

	css.textContent=body.style.background+";";
}

function random1(){
	var ram1="#"+(Math.floor(Math.random()*16777215).toString(16));
	//console.log(ram1);
	var ram2="#"+(Math.floor(Math.random()*16777215).toString(16));
	//console.log(ram2);
	body.style.background=
	"linear-gradient(to right,"
	+ram1
	+","
	+ram2
	+")";

	css.textContent=body.style.background+";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",random1);


