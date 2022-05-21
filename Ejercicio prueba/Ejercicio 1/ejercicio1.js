

window.onload= function crearElelemntos(){
    var elem;
    

    elem = document.createElement('li');
    document.body.appendChild(elem);

    for(i = 0; i<=20; i++){
       i = elem.textContent = (Math.random());
    }
    

}

