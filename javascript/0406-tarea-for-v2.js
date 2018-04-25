/**
 * Descripción
 * Dado un conjunto de N datos enteros, determina el mayor de ellos.
 * 
 * Entrada
 * En la primera línea el entero N. En la segunda los N enteros separados por espacios.
 * 
 * Salida
 * El número mayor del conjunto
 * 
 * Ejemplo:
 * 
 * Entrada:
 * 5
 * 2 3 50 8 1
 * 
 * Salida:
 * 50
 * 
 * https://omegaup.com/arena/problem/Encuentra-el-mayor#problems
 */

let numeros = [80,2,3,50,8,1];
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++){
    if( mayor < numeros[i]){
        mayor = numeros[i];
    }
}

console.log(mayor);