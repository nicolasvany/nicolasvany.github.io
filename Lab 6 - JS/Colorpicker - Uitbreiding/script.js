const setup = () => {
	let colorBox=document.getElementsByClassName("colorBox");
	let sliderRed = document.getElementsByClassName("sliderRed");
	let sliderGreen = document.getElementsByClassName("sliderGreen");
	let sliderBlue = document.getElementsByClassName("sliderBlue");
	let textValueRed = document.getElementById("textValueRed");
	let textValueGreen = document.getElementById("textValueGreen");
	let textValueBlue = document.getElementById("textValueBlue");
	let valueRed=sliderRed[0].value;
	let valueGreen=sliderGreen[0].value;
	let valueBlue=sliderBlue[0].value;
	let saveButton = document.getElementById("saveButton");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliderRed[0].addEventListener("change", update);
	sliderRed[0].addEventListener("input", update);
	sliderGreen[0].addEventListener("change", update);
	sliderGreen[0].addEventListener("input", update);
	sliderBlue[0].addEventListener("change", update);
	sliderBlue[0].addEventListener("input", update);
	saveButton.addEventListener("click", saveColor);

	// maak het blokje rood
	colorBox[0].style.backgroundColor="rgb(" + valueRed + ',' + valueGreen + ','+ valueBlue + ')';
	textValueRed.textContent = valueRed;
	textValueGreen.textContent = valueGreen;
	textValueBlue.textContent = valueBlue;

}

const update = () => {
	let colorBox=document.getElementsByClassName("colorBox");
	let sliderRed = document.getElementsByClassName("sliderRed");
	let sliderGreen = document.getElementsByClassName("sliderGreen");
	let sliderBlue = document.getElementsByClassName("sliderBlue");
	let textValueRed = document.getElementById("textValueRed");
	let textValueGreen = document.getElementById("textValueGreen");
	let textValueBlue = document.getElementById("textValueBlue");
	let valueRed=sliderRed[0].value;
	let valueGreen=sliderGreen[0].value;
	let valueBlue=sliderBlue[0].value;

	colorBox[0].style.backgroundColor="rgb(" + valueRed + ',' + valueGreen + ','+ valueBlue + ')';
	textValueRed.textContent = valueRed;
	textValueGreen.textContent = valueGreen;
	textValueBlue.textContent = valueBlue;
}

const saveColor = () => {
	let sliderRed = document.getElementsByClassName("sliderRed");
	let sliderGreen = document.getElementsByClassName("sliderGreen");
	let sliderBlue = document.getElementsByClassName("sliderBlue");
	let valueRed=sliderRed[0].value;
	let valueGreen=sliderGreen[0].value;
	let valueBlue=sliderBlue[0].value;
	let savedBoxes=document.getElementsByClassName("savedBoxes")[0];

	let savedColorBox = document.createElement("div");
	savedColorBox.setAttribute("class", "savedColorBox");
	savedColorBox.style.backgroundColor="rgb(" + valueRed + ',' + valueGreen + ','+ valueBlue + ')';
	savedColorBox.setAttribute("red",valueRed);
	savedColorBox.setAttribute("green",valueGreen);
	savedColorBox.setAttribute("blue",valueBlue);

	let verwijderButton = document.createElement("input");
	verwijderButton.setAttribute("type", "button");
	verwijderButton.setAttribute("value", "X");
	verwijderButton.setAttribute("class", "verwijderButton");
	verwijderButton.addEventListener("click", verwijderColorBox);

	savedColorBox.addEventListener("click", restoreColor);
	savedColorBox.addEventListener("click", update);
	savedColorBox.appendChild(verwijderButton);
	savedBoxes.appendChild(savedColorBox);

}

const restoreColor = (event) => {
	let colorBox=document.getElementsByClassName("colorBox");
	colorBox[0].style.backgroundColor= event.target.style.backgroundColor;

	let sliderRed = document.getElementsByClassName("sliderRed");
	let sliderGreen = document.getElementsByClassName("sliderGreen");
	let sliderBlue = document.getElementsByClassName("sliderBlue");

	sliderRed[0].value = event.target.getAttribute("red");
	sliderGreen[0].value = event.target.getAttribute("green");
	sliderBlue[0].value = event.target.getAttribute("blue");

	let textValueRed = document.getElementById("textValueRed");
	let textValueGreen = document.getElementById("textValueGreen");
	let textValueBlue = document.getElementById("textValueBlue");

	textValueRed.textContent = event.target.getAttribute("red");
	textValueGreen.textContent = event.target.getAttribute("green");
	textValueBlue.textContent = event.target.getAttribute("blue");
}

const verwijderColorBox = (event) => {
	event.target.parentElement.remove();

}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
