const enlace = document.querySelector('#enlace');

enlace.addEventListener( 'click', function( evento )
{
    //evitamos la acción del enlace
    evento.preventDefault();
    console.log( evento );
} );