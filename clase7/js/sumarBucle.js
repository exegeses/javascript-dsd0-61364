let arrayRaro = [ 
                    3, 'manzana', 
                    5, 'banana', 
                    8, 'kiwi',
                    12, 'pera',
                    15, 'fresa'
                ];

let n = 0;
let cantidad = arrayRaro.length;
let suma = 0;
while ( n < cantidad ){
    /*console.log( typeof arrayRaro[n] );
    if( !isNaN( arrayRaro[n] ) ){
        console.log('es un número, acumulamos');
        suma = suma + arrayRaro[n];
    }*/

    if ( typeof arrayRaro[n] == 'number' )
    {
        suma += arrayRaro[n];
    }

    n++;
}

console.log('resultado: '+ suma);

