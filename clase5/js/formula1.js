//ubicar elementos dentro del DOM
//const redbull = document.getElementById('redbull');
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');

/* estado inicial */
ferrari.style.display = 'none';
mercedes.style.display ='none';
mclaren.style.display ='none';

//declaramos función de control
function mostrarOcultar( team )
{
    if( team == 'redbull' ){
        redbull.style.display = 'flex';
        ferrari.style.display = 'none';
        mercedes.style.display ='none';
        mclaren.style.display ='none';
    }
    else if( team == 'ferrari' ){
        redbull.style.display = 'none';
        ferrari.style.display = 'flex';
        mercedes.style.display ='none';
        mclaren.style.display ='none';
    }
    else if ( team == "mercedes" ) {
        redbull.style.display ='none';
        ferrari.style.display ='none';
        mercedes.style.display ='flex';
        mclaren.style.display ='none';
    }
    else{
        redbull.style.display ='none';
        ferrari.style.display ='none';
        mercedes.style.display ='none';
        mclaren.style.display ='flex';
    }
}