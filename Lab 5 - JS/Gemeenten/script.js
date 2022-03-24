const setup = () => {
    let gemeenten = "";
    let select = document.getElementById("gemeenten");
    do{
        gemeenten = prompt("gemeenten");
        if(gemeenten.trim().localeCompare("stop") != 0){
            select.innerHTML += "<option>" + gemeenten.trim() + "</option>";
        }
    }while(gemeenten.trim().localeCompare("stop") != 0)
}
window.addEventListener("load", setup);