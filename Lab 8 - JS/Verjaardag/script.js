const setup = () =>{
    const berekenAantalDagen = () =>{
        let datumVerjaardag = document.getElementById('verjaardag').value;
        let datumVandaag = Date.now();
        let verjaardagDatum = new Date(datumVerjaardag).getTime();
        verschil = datumVandaag - verjaardagDatum;
        aantalDagen = verschil/(1000 * 3600 * 24);
        console.log(Math.floor(aantalDagen) + " dagen");
    }

    let berekenButton = document.getElementById("berekenButton");

    berekenButton.addEventListener("click", berekenAantalDagen);
}

window.addEventListener("load", setup);