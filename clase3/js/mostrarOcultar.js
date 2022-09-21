//ubicar elemento dentro del DOM
const caja = document.getElementById('caja');


//declaramos funciones de control
function ocultar()
{
    caja.style.visibility = 'hidden';
}
function mostrar()
{
    caja.style.visibility = 'visible';
}

function mostrarOcultar()
{
    if ( caja.style.visibility == 'visible' )
    {
        //caja.style.visibility = 'hidden';
        ocultar();
    }
    else{
        //caja.style.visibility = 'visible';
        mostrar();
    }
}