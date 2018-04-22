/**
 * Escribe un programa que use console.log para imprimir todos 
 * los números del 1 al 100, con las siguientes excepciones.
 * - Para numeros divisibles por 3 - imprime la palabra "Fizz"
 * - Para numeros divisibles por 5 - imprime la palabra "Buzz"
 * 
 * -- RETO: Si ya terminaste lo anterior, intenta resolver lo
 * siguiente
 * - Para numeros divisibles por 3 y 5 - imprime la palabra "FizzBuzz"
 */
//if (numeroActual % 2 == 0)
let numeroFinal = 100;
const MULTIPLO_TRES = 3;
const MULTIPLO_CINCO = 5; 

for (let i = 1; i <= numeroFinal; i++) {
  let palabra = '';

  if (i % MULTIPLO_TRES == 0) {
    palabra += 'Fizz'
  }

  if (i % MULTIPLO_CINCO == 0) {
    palabra += 'Buzz';
  }

  if (palabra !== '') {
    console.log(palabra);
  } else {
    console.log(i);
  }

}






