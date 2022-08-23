/*

documento.querySelector() selecciona al elemento <h1>
miTitutlo,text

const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Hola Mundo';

document.querySelector('html').onclick =
function(){
    alert("¡Ouch! ¡Deja de pincharme!");
}

Es el mismo código que el de arriba nada más
que más desglosado.

let miHTML = document.querySelector('html');
miHTML.onclick = function(){
    //En esta parte va el código
};
*/

let miImagen = document.querySelector('img');
miImagen.onclick = 
    function(){
        let miSrc = miImagen.getAttribute('src');
        
        if(miSrc === "./images/programmig.jpg"){
            miImagen.setAttribute('src', './images/cafe.jpg');
        }else{
            miImagen.setAttribute('src', './images/programmig.jpg');
        }
    }

let miBoton = document.querySelector('button');

let miTitulo = document.querySelector('h1');

/*
function estableceNombreDeUsuario(){
    let miNombre = prompt("Por favor, ingrese su nombre");
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = "La programación es grandiosa " + miNombre;
}
*/

function estableceNombreDeUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreDeUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }
  

if (!localStorage.getItem('nombre')){
    estableceNombreDeUsuario();
}else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = "La programación es grandiosa " + nombreAlmacenado;
}

miBoton.onclick = 
    function(){
        estableceNombreDeUsuario();
    }

/*

Es el mismo código que el de arriba nada más
que más desglosado.

let miHTML = document.querySelector('html');
miHTML.onclick = function(){};
*/



/*
function multiplicacion(num1,num2){
    let resultado = num1*num2;
    return resultado;
}
*/