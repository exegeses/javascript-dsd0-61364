const lista = document.querySelector('#listaCars');

let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let cantidad = italianos.length;
let contenido = '';

for( let n = 0; n < cantidad; n++ )
{
    contenido = contenido + '<li>' + italianos[n] + '</li>'; 
}

lista.innerHTML = contenido;