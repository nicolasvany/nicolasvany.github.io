const setup = () => {
    let button = document.createElement('button');
    button.style.width = '200px';
    button.style.height = '1.3rem';
    button.append('zet text in het div');
    document.getElementsByTagName('body')[0].append(button);
    button.addEventListener('click',voegTextToe);
}
window.addEventListener("load", setup);

const voegTextToe = () => {
    let p = document.createElement('p');
    p.append(prompt('text'));
    let div = document.querySelector("#myDIV");
    if(p.textContent != "null"){
        div.append(p);
    }
}