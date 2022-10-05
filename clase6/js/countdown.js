//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function countDown()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date( 2022, 10, 20 );

    //conversión a UNIX TAMESTAMP
      // tiempo transcurrido desde el 01/01/1970
      // expresado en milisegundos
    let actual = ahora.getTime();
    let evento = final.getTime();

    //diferencia entre momnetos de fecha
    let diferencia = evento - actual;

    //obtenemos el tiempo expresado en segundos, minutos, horas y días
    let segundos = Math.trunc( diferencia / 1000 );
    console.log( segundos );

    let minutos = Math.trunc( segundos / 60 );
    console.log( minutos );

    let horas = Math.trunc( minutos / 60 );
    console.log( horas );

    let dias = Math.trunc( horas / 24 );
    console.log( dias );


    //calculamos tiempos sobrantes en horas, minutos y segundos
     horas = horas%24;
     minutos = minutos%60;
     segundos = segundos%60;

    //agregarmos 0 para dos digitos
    if( horas < 10 ){
        horas = '0'+ horas;
    }

    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }

    if ( segundos < 10) {
        segundos = '0'+ segundos;
    }

    //imprimimos en el HTML
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//invocamos a la función countDown
countDown();
//actualizamos el llamado a la función countDown
setInterval( countDown );