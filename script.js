document.getElementById("button").addEventListener("click", boy);
var b = document.getElementsByClassName("grid-item"); //The number of boxes in the grid
var hehe = document.getElementById("gcon")
var non = 0
var penis = 0
var timeout = 1
var buttenable = false
var raudio
var rfunc
var rimage
var rdir
var gridx = 54
var gridy = 26
//document.onload = HO()  //W.I.P
var bigbee = 0
var total = gridx * gridy
var frickrear = total - gridx;
var a = [
	new Audio('sounds/bep-01.mp3'),
	new Audio('sounds/bep-02.mp3'),
	new Audio('sounds/bep-03.mp3'),
	new Audio('sounds/bep-04.mp3'),
	new Audio('sounds/bep-05.mp3'),
	new Audio('sounds/bep-06.mp3'),
	new Audio('sounds/bep-07.mp3'),
	new Audio('sounds/bep-08.mp3'),
	new Audio('sounds/bep-09.mp3'),
	new Audio('sounds/bep-10.mp3'),
	new Audio('sounds/bep-11.mp3'),
	new Audio('sounds/bep-12.mp3'),
	new Audio('sounds/bep-13.mp3'),
	new Audio('sounds/bep-14.mp3'),
	new Audio('sounds/bep-15.mp3'),
	new Audio('sounds/bep-16.mp3'),
	new Audio('sounds/bep-17.mp3'),
	new Audio('sounds/bep-18.mp3'),
	new Audio('sounds/bep-19.mp3'),
	new Audio('sounds/bep-20.mp3'),
	new Audio('sounds/bep-21.mp3'),
	new Audio('sounds/bep-22.mp3'),
	new Audio('sounds/bep-23.mp3'),
	new Audio('sounds/bep-24.mp3'),
	new Audio('sounds/bep-25.mp3'),
	new Audio('sounds/bep-26.mp3'),
]

while (non !== total){	//creates the divs with the "grid-item" class
	var g = document.createElement("div");
	g.classList.add("grid-item");
	
	if (non < total){
		hehe.appendChild(g);
		//b[non].innerHTML = non; //Use this in case you need to visualise the number of a "grid-item"
		non++
	}
	
	if (non > total){
		hehe.removeChild(hehe.childNodes[non]);
		non--
	}
}

/*function HO(){
	if(window.innerWidth < 600){	//TODO
		grix = 11
		grid = 21
	}
	else if(window.innerWidth > 600){
		gridx = 54
		gridy = 26
	}
}*/

console.log(b.length, "Grid items");	//Prints the number of elements with "grid-item" class to the browser console

function boy(){
	if (buttenable == false){
		reset()
		buttenable = true;
		console.log("buttenable", buttenable)
	}
	
	else if (buttenable == true){
		buttenable = false;
		frickrear = total - gridx;
		bigbee = 0
		console.log("buttenable", buttenable)
	}
	
	if (buttenable == true && i == 0){
		rfunc = Math.floor(Math.random() * 2);
		
		if(rfunc == 0){color()}
		else if(rfunc == 1){reveal()}
		
	}
}

function reset(){
	for(i = 0; i < b.length; i++){b[i].style.background = "rgba(255,255,255,1)";}
	i = 0
	i2 = 0
	frickrear = total - gridx;
	bigbee = 0
}

function color(){
	if (i == 0 && buttenable == true){rdir = Math.floor(Math.random() * 2)}
	
	if (buttenable == true){
		raudio = Math.floor(Math.random() * 26);
		var red =  Math.floor(Math.random() * 256) + 32;
		var green = Math.floor(Math.random() * 256) + 32;
		var blue = Math.floor(Math.random() * 256) + 32;
		var bgColor = "rgba(" + red + "," + green + "," + blue + ")";
		
		b[i].style.background = bgColor
		a[raudio].play()
		
		if(rdir == 0){i++}
		else if(rdir == 1){upDown()}
		
		if(i == b.length || frickrear == b.length){
			bigbee = 0
			frickrear = total - gridx;
			i = 0
		}
		
		setTimeout(color, timeout)//waits the value of var "timeout" in millasenconds before repeating the color() function
	}		
}

function reveal(){
	if (i == 0 && buttenable == true){
		rimage = Math.floor(Math.random() * 8)
		rdir = Math.floor(Math.random() * 2)
	}
	
	if (rimage == 0){document.body.style.backgroundImage = 'url("images/ario.jpg")'}
	if (rimage == 1){document.body.style.backgroundImage = 'url("images/nothank.png")'}
	if (rimage == 2){document.body.style.backgroundImage = 'url("images/deletethis.png")'}
	if (rimage == 3){document.body.style.backgroundImage = 'url("images/idc.jpg")'}
	if (rimage == 4){document.body.style.backgroundImage = 'url("images/non.jpg")'}
	if (rimage == 5){document.body.style.backgroundImage = 'url("images/homie.png")'}
	if (rimage == 6){document.body.style.backgroundImage = 'url("images/oshoot.png")'}
	if (rimage == 7){document.body.style.backgroundImage = 'url("images/wide.jpg")'}
	
	if (i2 !== 1 && buttenable == true){
		raudio = Math.floor(Math.random() * 26)
		b[i].style.background = "rgba(255,255,255,0)";
		a[raudio].play()
		
		if(rdir == 0){i++}
		else if(rdir == 1){upDown()}
		
		if(i !== b.length && frickrear !== b.length){setTimeout(reveal, timeout)}	// waits the value of "timeout" before repeating reveal() again
		
		if(i == b.length || frickrear == b.length){
			buttenable = false
			i2 = 1
		}
	}
	
	else if(i2 == 1){
		reset()
	}
}

function upDown(){
	if (i == frickrear){
		bigbee++
		frickrear++
		if(frickrear !== b.length){
			i = bigbee
		}
	}
	
	else{i += gridx}
}