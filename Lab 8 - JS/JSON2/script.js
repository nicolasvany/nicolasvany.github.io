const setup = () =>{
    let tekst = '{"voornaam":"Test","naam":"Test","geboorteDatum":"2003-06-08T00:00:00.000Z","adres":{"straat":"Teststraat, 69","gemeente":"Test","land":"Testland","postcode":"6969"}}';
    let student1 = JSON.parse(tekst);
    console.log(student1);
}



window.addEventListener("load", setup);