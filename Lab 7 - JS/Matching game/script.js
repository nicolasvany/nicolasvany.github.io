const setup = () => {
    startButton.addEventListener("focus", startGame);
}

const kaarten = Array("kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png");
const grid = document.querySelector("#kaartContainer");
const startButton = document.getElementById("start");

let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_KAARTEN : 6,
    IMAGE_PATH_PREFIX: "images/",
    AANTAL_GEDRAAIDE_KAARTEN: 0,
    GEDRAAIDE_KAART: "",
    GEVONDEN_KAARTEN: Array(),
    INTERVAL: 0,
}

const toonKaart = (event) => {
    let nummer = event.target.id;
    if(event.target.id > 6){
        nummer -= 6;
    }
    if(global.AANTAL_GEDRAAIDE_KAARTEN !== 2 && global.IMAGE_PATH_PREFIX + "/kaart" + nummer + ".png" !== global.GEDRAAIDE_KAART){
        event.target.src = global.IMAGE_PATH_PREFIX + "/kaart" + nummer + ".png";
        global.AANTAL_GEDRAAIDE_KAARTEN += 1;
        if(global.AANTAL_GEDRAAIDE_KAARTEN === 2){
            if(event.target.src === global.GEDRAAIDE_KAART){
                clearInterval(global.INTERVAL);
                global.GEVONDEN_KAARTEN.push(event.target.src, global.GEDRAAIDE_KAART);
                global.AANTAL_GEDRAAIDE_KAARTEN = 0;
                if(global.GEVONDEN_KAARTEN.length === kaarten.length * 2){
                    startButton.style.display= "block";
                }
            }else {
                global.INTERVAL = setInterval(draaiKaarentOm, 1000);
                global.GEDRAAIDE_KAART = "";
            }
        }
        global.GEDRAAIDE_KAART = event.target.src;
    }
}

const voegKaartenToe = () => {
    let nummers = Array();
    for (let i = 0; i < kaarten.length * 2; i++) {
        nummers[i] = i + 1;
    }

    let kaartNum = 0;
    for (let i = 0; i < kaarten.length * 2; i++) {
        let kaart = document.createElement("img");
        kaartNum = Math.floor(Math.random() * nummers.length);

        kaart.src = global.IMAGE_PATH_PREFIX + "/achterkant.png";
        kaart.className = "kaart";
        kaart.id = nummers[kaartNum];

        grid.append(kaart);
        nummers.splice(kaartNum,1);
    }
}

const draaiKaarentOm = () => {
    document.querySelectorAll(".kaart").forEach(item => {
        if(!isKaartGevonden(item.src, global.GEVONDEN_KAARTEN)){
            item.src = global.IMAGE_PATH_PREFIX + "/achterkant.png";
        }
    });
    clearInterval(global.INTERVAL);
    global.AANTAL_GEDRAAIDE_KAARTEN = 0;
}

const isKaartGevonden = (kaart, list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === kaart) {
            return true;
        }
    }
    return false;
}

const startGame = (event) => {
    event.target.style.display = "none";
    if(global.GEVONDEN_KAARTEN.length === 0){
        voegKaartenToe();
    }else {
        global.GEVONDEN_KAARTEN = Array();
        draaiKaarentOm()
    }

    document.querySelectorAll(".kaart").forEach(item => {
        item.addEventListener("click", toonKaart);
    });
}

window.addEventListener("load", setup);