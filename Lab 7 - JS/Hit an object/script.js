const setup = () => {
    startknop.addEventListener("click", startGame);
    klikobject.addEventListener("click", klik);
}

let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    timerId: 0
    };

const score = document.getElementById("score");
const klikobject = document.getElementById("klikobject")
const startknop = document.getElementById("startButton");

const bomAlert = () => {
    window.alert("Game over");
}

const klik = (event) => {
    if(global.timeoutId !== 0){
        if(event.target.src.slice(-5) !== "0.png"){
            global.score += 1;
            score.innerText = "score: " + global.score;
            clearInterval(global.timerId);
            global.timerId = setInterval(verplaats, global.MOVE_DELAY);
            verplaats();
        } else {
            global.score = 0;
            score.innerText = "score : " + global.score;
            startknop.style.display = "block";
            klikobject.style.top = "0px";
            klikobject.style.left = "0px";
            bomAlert();
            clearInterval(global.timerId);
        }
    }
}

const verplaats = () => {
    if(global.timeoutId !== 0){
        klikobject.style.top = Math.random() * 752 + "px";
        klikobject.style.left = Math.random() * 552 + "px";
        klikobject.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;
    }  
}

const startGame = () => {
    global.timerId = setInterval(verplaats, global.MOVE_DELAY);
    global.timeoutId = 1;
    startknop.style.display = "none";
    verplaats();
}

window.addEventListener("load", setup);
