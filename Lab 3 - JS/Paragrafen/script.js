const setup = () =>{
    const belangrijk = document.getElementsByClassName("belangrijk");

    for(let i = 0; i < belangrijk.length; i++){
        belangrijk.item(i).classList.add("opvallend");
    }
}

window.addEventListener("load", setup);