const setup = () =>{

    let herberekenButton = document.getElementById("herbereken");
    herberekenButton.addEventListener("click", bereken);
}

const bereken = () => {

    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = 0;

    for(let i = 0; i < prijzen.length; i++){
        let tussenresultaat = (parseFloat(prijzen[i].innerHTML) * parseFloat(aantallen[i].value));

        subtotalen[i].innerHTML = (tussenresultaat + (tussenresultaat * (parseInt(btw[i].innerHTML) / 100))).toFixed(2) +  " Eur";
    }


    for(let i = 0; i < subtotalen.length; i++){
        totaal += parseFloat(subtotalen[i].innerHTML);
    }

    document.getElementById("totaal").innerHTML = totaal.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);
