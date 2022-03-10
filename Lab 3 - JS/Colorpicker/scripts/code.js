const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);

	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);

	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

	document.getElementById("rood").textContent=sliders[0].value;
	document.getElementById("groen").textContent=sliders[1].value;
	document.getElementById("blauw").textContent=sliders[2].value;

	colorDemos[0].style.backgroundColor= "rgb(" + sliders[0].value + ", " + sliders[1].value + ", " + sliders[2].value +")";	

}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos = document.getElementsByClassName("colorDemo");

	document.getElementById("rood").textContent=sliders[0].value;
	document.getElementById("groen").textContent=sliders[1].value;
	document.getElementById("blauw").textContent=sliders[2].value;

	colorDemos[0].style.backgroundColor= "rgb(" + sliders[0].value + ", " + sliders[1].value + ", " + sliders[2].value +")";	
}


window.addEventListener("load", setup);