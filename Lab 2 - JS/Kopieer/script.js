const setup = () =>{
    const kopieer = () => { 
        let txtInput = document.getElementById("txtInput"); 
        let tekst = txtInput.value; 
        console.log(tekst); 
        txtOutput.innerHTML= tekst;
    } 
    
    let btnKopieer = document.getElementById("btnKopieer"); 
    btnKopieer.addEventListener("click", kopieer);
}

window.addEventListener("load", setup);