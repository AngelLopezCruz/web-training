/**
 * Dado un numero N, tu tienes que crear una piramide de '#'
 * ejemplo:
 * Entrada: 
 * 7
 * 
 * Salida:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */


let rayasPiramidalInicio = 1;
let rayasPiramidalFin = 70;

for (let i = 1; i <= rayasPiramidalFin; i++) {
    
    let linea='';

    for (let j = 1; j <= i; j++) {
        linea = linea + '&';
    }

    console.log(linea);
}
