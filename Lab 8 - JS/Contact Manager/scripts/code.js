let personen = [];
let nieuwForm = true;
let gekozenPersoonID = 0;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    let valid = document.getElementsByClassName("invalid")
    if(valid.length === 0){
        let tekstnaam = document.getElementById("txtVoornaam").value;
        let tekstfamilienaam = document.getElementById("txtFamilienaam").value;
        let tekstgeboortedatum = document.getElementById("txtGeboorteDatum").value;
        let tekstemail = document.getElementById("txtEmail").value;
        let tekstaantalKinderen = document.getElementById("txtAantalKinderen").value;
        let persoon = {
            naam: tekstnaam,
            familienaam: tekstfamilienaam,
            geboortedatum: tekstgeboortedatum,
            email: tekstemail,
            aantalKinderen: tekstaantalKinderen
        }
        if(nieuwForm){
            personen.push(persoon)

            // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

            let lijst = document.getElementById("lstPersonen")
            let nieuwPersoon = document.createElement('option')
            nieuwPersoon.innerText = persoon.naam + ' ' + persoon.familienaam
            nieuwPersoon.setAttribute('id', "persoon"+(personen.length-1).toString())
            nieuwPersoon.setAttribute('idPersoon', (personen.length-1).toString())
            nieuwPersoon.addEventListener('click', zetDataTerug)
            lijst.appendChild(nieuwPersoon)
        }else{
            console.log(gekozenPersoonID)
            console.log(personen[gekozenPersoonID])
            console.log(JSON.stringify(persoon))
            personen[gekozenPersoonID] = persoon;
            document.getElementById("persoon"+(personen.length-1).toString()).innerText = persoon.naam + " " + persoon.familienaam

        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let inputs = document.getElementsByTagName("input")
    for (let input = 0; input < inputs.length; input++) {
        if(inputs[input].getAttribute('type') === "text"){
            inputs[input].value = '';
        }
    }
    nieuwForm = true;
};

const zetDataTerug = (event) =>{
    let gekozenPersoon = personen[event.target.getAttribute('idPersoon')]
    gekozenPersoonID = event.target.getAttribute('idPersoon')
    document.getElementById("txtVoornaam").value = gekozenPersoon.naam;
    document.getElementById("txtFamilienaam").value = gekozenPersoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = gekozenPersoon.geboortedatum;
    document.getElementById("txtEmail").value = gekozenPersoon.email;
    document.getElementById("txtAantalKinderen").value = gekozenPersoon.aantalKinderen;
    nieuwForm = false;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);