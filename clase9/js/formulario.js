//ubicamos elementos dentro del DOM
  //el formulario
const formulario = document.querySelector('#formulario');
  //los campos de texto
const campoNombre = document.querySelector('input[name="nombre"]');
const campoEmail = document.querySelector('input[name="email"]');
const campoComentarios = document.querySelector('textarea[name="comentarios"]');
  //los span para los mensajes de error
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');

//## funciones de validación
formulario.addEventListener(
                            'submit',
                            function( evento )
    {
        //evitamos envío del form
        evento.preventDefault();
        //borramos mensajes de error (si hubiera)
        borrarMensajes();

        let flag = true;// si es true, enviamos el form

        //obtenemos el contenido del campo nombre
        let nombre = campoNombre.value;
        if( nombre == '' || nombre == null ){
            flag = false;
            txtNombre.innerText = 'Complete el campo "Nombre"';
        }
        //obtenemos el contenido del campo email
        let email = campoEmail.value;
        if( !validarEmail(email) ){
            flag = false;
            txtEmail.innerText = 'Complete el campo "Email" con una dirección de correo';
        }
        //obtenemos el contenido del campo camentarios
        let comentarios = campoComentarios.value;
        if( comentarios == '' || comentarios == null || comentarios.length < 11 ){
            flag = false;
            txtComentarios.innerText = 'Complete el campo "Comentarios" con al menos 10 caractéres';
        }

        //enviamos el form si el flag es true
        if( flag ){
            formulario.submit();
        }
    }
);

function validarEmail( dirEmail )
{
    //const expresion = /\S+@\S+\.\S/;
    const expresion = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]/;
    return expresion.test( dirEmail );
}

function borrarMensajes()
{
    txtNombre.innerText = '';
    txtEmail.innerText = '';
    txtComentarios.innerText = '';
}