const setup = () =>{
    let body = document.getElementsByTagName('body')[0];
    let oldP = body.firstElementChild;
    let newP = document.createElement('p');
    newP.append("Good job!");
    oldP.remove();
    body.prepend(newP);
}

window.addEventListener("load", setup);