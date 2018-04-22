/**
 * Escribe un programa que cree una cadena de texto que represente una cuadrícula de 8x8,
 * usando el salto de línea como separador ("\n"). En cada posición de la cuadrícula está o
 * un espacio o un carácter "#". Los caracteres deberían formar un tablero de ajedrez.
 * 
 *  # # # # 
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 */

let cadena = '';
const LIMITE = 8;
const SEPARADOR = '\n';
let simbolo_1;
let simbolo_2;

for (let i = 1; i <= LIMITE; i++) {
  if (i % 2) {
    simbolo_1 = '#';
    simbolo_2 = ' ';
  } else {
    simbolo_1 = ' '; 
    simbolo_2 = '#';
  }

  for (let j = 1; j <= LIMITE; j++) {
    if (j % 2 == 0) {
      cadena += simbolo_1;
    } else {
      cadena += simbolo_2;
    }
  }

  cadena += SEPARADOR;
}

console.log(cadena);