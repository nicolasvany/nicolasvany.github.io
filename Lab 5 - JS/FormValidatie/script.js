const setup = () => {
	let validatieButton=document.getElementById("validatieButton");
	validatieButton.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
    valideerNaam();
    valideerDatum();
    valideerEmail();
    valideerAantalKinderen();
};


/* Valideer methodes */
const valideerVoornaam = () => {
	let txtVoornaam = document.querySelector("#voornaam>input");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
};

const valideerNaam = () => {
	let txtNaam = document.querySelector("#naam>input");
	let naam = txtNaam.value.trim();
    if(naam.length == 0){
        reportError(txtNaam, "verplicht veld");
    }
	else if (naam.length > 50) {
		reportError(txtNaam, "max. 50 karakters");
	} else {
		clearError(txtNaam);
	}
};

const valideerDatum = () => {
    let txtDatum = document.querySelector("#datum>input");
    let datum = txtDatum.value.trim();

    if(datum.length  > 0){
        if(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(datum)){
            clearError(txtDatum);
        } else {
            reportError(txtDatum, "formaat is niet jjjj-mm-dd");
        }
    } else {
        reportError(txtDatum, "verplicht veld");
    }
};

const valideerEmail = () => {
    let txtEmail = document.querySelector("#email>input");
    let email = txtEmail.value.trim();
    
    if(email.length > 0){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
           clearError(txtEmail); 
        } else {
            reportError(txtEmail, "geen geldig email adres");
        }
    } else {
        reportError(txtEmail, "verplicht veld");
    }
};

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.querySelector("#kinderen>input");
    let aantalKinderen = txtAantalKinderen.value.trim();

    if(!isNaN(aantalKinderen)){
        if(aantalKinderen > 99){
            reportError(txtAantalKinderen, "is te vruchtbaar");
        } else if(aantalKinderen < 0) {
            reportError(txtAantalKinderen, "is geen positief getal");
        } else {
            clearError(txtAantalKinderen);
        }
    } else {
        reportError(txtAantalKinderen, "is geen getal");
    }
};

/* Error methodes */
const reportError = (element, message) => {
	element.className="invalid";
	element.nextElementSibling.innerHTML = message;
};

const clearError = (element) => {
	element.className="";
	element.nextElementSibling.innerHTML = "";
};

window.addEventListener("load", setup);