/**
 * VARIABLES: son elementos que durante la ejecucion del programa
 * pueden ir cambiando su valor, de acuerdo a las necesidades 
 * programadas
 */

// si pueden ser
let a,b,c,d, hola, mundo, perro, gato, perro_1, perro_2;
let _hola, _mundo, holaMundo, tarjetaDeCredito, hola_mundo, _hola_mundo;


// no pueden ser
// let 1a, 1b, 1c, hola-mundo;
// let 1hola, 3mundo, 67_hola_mundo, $hola;

// RECOMENDABLE SI SE PUEDE HACER
let tarjetaDeReservacion;

// ejemplo

tarjetaDeReservacion = 1;
console.log(tarjetaDeReservacion);

tarjetaDeReservacion = 'hola';
console.log(tarjetaDeReservacion);
/**
 * 
 * CONSTANTES: son elementos que NUNCA van a cambir de valor
 */

// const FICHADERECOMENDACION; // no se debe de hacer
const FICHA_DE_RESERVACION = '800A23Q42';

console.log(FICHA_DE_RESERVACION);

// si hacemos lo de abajo, debe de marcar un error
// FICHA_DE_RESERVACION = '801A24F002';
// console.log(FICHA_DE_RESERVACION); // (?)

console.log(tarjetaDeReservacion == FICHA_DE_RESERVACION);

