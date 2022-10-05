const marcas = [ 
                    'Hermes', 'Zara', 'Boss', 
                    'Aeropostale', 'Tommy', 'Hollister'
               ];
console.log( marcas );
//document.write( marcas );

const dias = [ 
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sábado'
             ];
const txt = document.querySelector('#txt');

//creamos objeto fecha
let fecha = new Date();
//obtenemos el número del día de la semana
let diaSemana = fecha.getDay();

//imprimimos en el span
txt.innerText = dias[ diaSemana ];