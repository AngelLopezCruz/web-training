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

let numeroInicio = 1;
let numeroFinal = 100;
let divisible = 3;
let divisible2 = 5; 

//divisible 3
for (let i = 1; i <= numeroFinal; i++){ 

if (i % divisible == 0)
{ 
console.log("fuzz");

  }
  if (i % divisible2 == 0){ 
  console.log("buzz");
  }
  
}






