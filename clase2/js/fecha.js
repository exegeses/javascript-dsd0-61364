//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    mostrar la fecha
    formato  Lunes 19/09/2022
 */

//creamos objeto de fecha
let fecha = new Date();

//obtenemos el número del día de la semana
/* Dom  -  0 */
/* Lun  -  1 */
/* Mar  -  2 */
/* Mié  -  3 */
let diaSemana = fecha.getDay();
    console.log(diaSemana);

    switch( diaSemana ){
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miércoles';
            break;
        case 4:
            diaSemana = 'Jueves';
            break;
        case 5:
            diaSemana = 'Viernes';
            break;
        default:
            diaSemana = 'Sábado';
            break;
    }

    console.log(diaSemana);


//obtenemos número del día del mes
let diaMes = fecha.getDate();
    if ( diaMes < 10 ){
        diaMes = '0'+ diaMes;
    }

//obtenemos número del mes actual
let mes = fecha.getMonth()+1;
    if ( mes < 10 ){
        mes = '0'+ mes;
    }

//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos dentro del span  CONCATENANDO
//txt.innerText = diaSemana +' '+ diaMes +'/'+ mes +'/'+ anio;

//Template Literal  (backtick  ${ nVariable } )
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;

