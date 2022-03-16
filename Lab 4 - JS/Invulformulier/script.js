const setup = () => {
    let slider = document.getElementsByClassName("slider");

    slider[0].addEventListener("change", update);
    slider[0].addEventListener("input", update);

    document.getElementById("sliderValue").textContent = slider[0].value;
}

const update = () => {
    let slider = document.getElementsByClassName("slider");

    document.getElementById("sliderValue").textContent = slider[0].value;
}

window.addEventListener("load", setup);