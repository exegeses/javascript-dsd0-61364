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

        let flag = true;// si es true, enviamos el form

        //obtenemos el contenido del campo nombre
        let nombre = campoNombre.value;
        if( nombre == '' || nombre == null ){
            flag = false;
            txtNombre.innerText = 'Complete el campo "Nombre"';
        }
        //obtenemos el contenido del campo email
        let email = campoEmail.value;
        if( validarEmail(email) ){
            flag = false;
            txtEmail.innerText = 'Complete el campo "Email" con una dirección de correo';
        }
    }
);

function validarEmail( txtEmail )
{
    
}