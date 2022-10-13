//ubicamos elemento dentro del DOM
//const lista = document.getElementById('lista');
const lista = document.querySelector('#lista');

const marcas = [ 
    'Hermes', 'Zara', 'Boss', 
    'Aeropostale', 'Tommy', 'Hollister'
];
let n = 0;
let cantidad = marcas.length; 
let contenido = '';

while( n < cantidad ){
    //código a iterar
    contenido = contenido + '<li>'+ marcas[n] +'</li>';
    n++;
}


//imprimimos dentro de la lista
lista.innerHTML = contenido;