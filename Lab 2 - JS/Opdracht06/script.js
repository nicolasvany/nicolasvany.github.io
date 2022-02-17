 const kopieer = () => { 
    let txtInput = document.getElementById("txtInput"); 
    let tekst = txtInput.value; 
    console.log(tekst); 
} 

let btnKopieer = document.getElementById("btnKopieer"); 
btnKopieer.addEventListener("click", kopieer);
