// ciclo FOR
/**
 * un ciclo for nos va ser de utilidad siempre y cuando se cumplan
 * las siguientes condiciones:
 * - Conocemos cual es el valor inicial y el valor final
 * - O conocemos el numero de veces que vamos a repetir la accion
 */

/**
 * Estructura es la siguiente:
 * for (inicio; condicion-de-fin; incremento) {}
 * 
 * ejemplo:
 * for (let i = 1; i <= 10; i++) {}
 */

let numeroAMultiplicar = 72;
let numeroDeRepeticiones = 10;

for (let i = 1; i <= numeroDeRepeticiones; i++) {
  console.log(`${numeroAMultiplicar} x ${i} = ${numeroAMultiplicar * i}`);
}
