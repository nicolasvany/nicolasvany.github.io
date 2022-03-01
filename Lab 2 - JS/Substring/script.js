const setup = () =>{
    const substring = () => { 
        let txtInput = document.getElementById("txtInput"); 
        let tekst = txtInput.value; 
        txtOutput.innerHTML = tekst.substring((number1.value), number2.value);
    } 

    let btnSubstring= document.getElementById("btnSubstring"); 
    btnSubstring.addEventListener("click", substring);
}

window.addEventListener("load", setup);