const setup = () => {

    let tekst = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase().split(" ");
    let aantal = 0;
    let woord;

    for(let i = 0; i < tekst.length; i++){
        woord = tekst[i];
        if(woord.indexOf("an") >= 0){
            aantal++;
        } 
    }

    console.log(aantal);
}

window.addEventListener('load', setup);

