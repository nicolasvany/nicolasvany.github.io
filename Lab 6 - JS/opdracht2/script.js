const setup = () =>{
    let listElementen = document.querySelectorAll('li');

    for(let i = 0; i < listElementen.length; i++){
        listElementen[i].classList.add('listitem');
        listElementen[i].style.color = "red";
    }
    
    
    let img = document.createElement('img');
    let img2 = document.createElement('img');
    img.src = "foto.png";
    img2.src = "foto2.png";
    img.width = 600;
    img2.width = 300;
    document.getElementsByTagName("body")[0].append(img);
    document.getElementsByTagName("body")[0].append(img2);
}

window.addEventListener("load", setup);