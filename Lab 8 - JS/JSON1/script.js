let student1={
    voornaam: "Test",
    naam: "Test",
    geboorteDatum: new Date("2003-06-08"),
    adres: {
        straat: "Teststraat, 69",
        gemeente: "Test",
        land: "Testland",
        postcode: "6969"
    }
}

const setup = () =>{
    let tekst = JSON.stringify(student1);
    console.log(tekst);
}



window.addEventListener("load", setup);