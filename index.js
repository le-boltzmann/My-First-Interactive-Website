document.querySelector("input").disabled=true;

var M;

//var numberOfnumAndOpButtons = document.querySelectorAll(".numAndOp").length;

//for(var i =0; i<numberOfnumAndOpButtons; i++){
//
//document.querySelectorAll(".numAndOp")[i].addEventListener("click",showOnScreen);
//}

function showOnScreen(calcValue){
	document.querySelector("input").value = 
	document.querySelector("input").value.concat(calcValue);
}

document.querySelector("#Evaluate").addEventListener("click",evaluate);
document.querySelector("#clear").addEventListener("click",clear);
document.querySelector("#reciprocal").addEventListener("click",reciprocal);
document.querySelector("#square").addEventListener("click",square);
document.querySelector("#squareRoot").addEventListener("click",squareRoot);
document.querySelector("#negative").addEventListener("click",negative);
document.querySelector("#MS").addEventListener("click",MS);
document.querySelector("#MR").addEventListener("click",MR);
document.querySelector("#MC").addEventListener("click",MC);
document.querySelector("#Mplus").addEventListener("click",Mplus);
document.querySelector("#decimal").addEventListener("click",decimal);


function evaluate(){
	var answer = eval(document.querySelector("input").value);
	document.querySelector("input").value = answer;
}

function clear(){
	document.querySelector("input").value = "";
}

function reciprocal(){
	document.querySelector("input").value = eval("1/".concat(document.querySelector("input").value));
}

function square(){
	document.querySelector("input").value = eval(document.querySelector("input").value)**(2);
}

function squareRoot(){
	document.querySelector("input").value = eval(document.querySelector("input").value)**(1/2);
}

function negative(){
	document.querySelector("input").value = eval("-".concat(document.querySelector("input").value));
}

function MS(){
	var str = document.querySelector("input").value;
	if(str.includes('+')||str.includes('-')||str.includes('*')||str.includes('/')){
		//do nothing
	}
	else{
		M = eval(document.querySelector("input").value);
	}
}

function MR(){
	if(M!=null){
	document.querySelector("input").value = M;}
}

function MC(){
	M = null;
}

function Mplus(){
	M = eval(document.querySelector("input").value) + M;
}

function decimal(){
	document.querySelector("input").value = document.querySelector("input").value.concat('.');
}
