const formulario = document.querySelector('#formulario');
const campoNombre = document.querySelector('input[name="nombre"]');
const errNombre = document.querySelector('#errNombre');

//evitamos el envío del formulario
formulario.addEventListener('submit', function( evento )
{
    evento.preventDefault();
    //obtenemos el VALOR escrito en el campo nombre
    let nombre = campoNombre.value;
    //si el valor está vacío
    if( nombre == '' || nombre == null ){
        //mostramos mensaje de error
        errNombre.innerText = 'Complete el campo "Nombre"'; 
    }
    else{
        formulario.submit();
    }
});