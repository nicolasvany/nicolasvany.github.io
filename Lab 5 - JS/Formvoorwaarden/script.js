const setup = () =>{
    verzendenButton = document.getElementById("verzenden");
    verzendenButton.addEventListener("click", verzenden)
}

const verzenden = () =>{
    let isRocker = document.getElementById("isRocker");
    const isRockerOfNiet = isRocker.checked ? 'is een rocker' : 'is geen rocker';

    let moedertaal = document.getElementsByName("moedertaal");
    for(let i = 0; i < moedertaal.length; i++){
        if(moedertaal[i].checked){
            moedertaal = moedertaal[i].value;
        }
    }
    moedertaal = "moedertaal is " + moedertaal;

    let favBuurland = document.getElementById("favBuurland");
    for(let i = 0; i < favBuurland.length; i++){
        if(favBuurland[i].selected){
            favBuurland = favBuurland[i].text;
        }
    }
    favBuurland = "favoriete buurland is " + favBuurland;

    let bestelling = document.getElementById("bestelling");
    bestellingLijst = "";
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].selected){
            bestellingLijst += bestelling[i].text + " ";
        }
    }
    bestelling = "bestelling bestaat uit " + bestellingLijst;

    console.log(isRockerOfNiet);
    console.log(moedertaal);
    console.log(favBuurland);
    console.log(bestelling);
}

window.addEventListener("load", setup);