// https://omegaup.com/arena/problem/Coleccionista/#problems
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

// function encontrarFaltante(numElementos, elementosActuales) {
//   for (let i = 1; i <= N; i++) {
//     // if (noExisteElementoEnLaLista(i)) {
//     if (elementosActuales.indexOf(i) < 0) {
//       return i;
//     }
//   }
// }

function encontrarFaltante(numElementos, elementosActuales) {
  let sumaDeElementos = 0;
  let sumaActual = 0;

  for (let i=1; i <=numElementos; i++) {
    sumaDeElementos += i; //  sumaDeElementos = sumaDeElementos + i;
  }

  for (let i = 0; i < listaDeNumeros.length; i++) {
    sumaActual += listaDeNumeros[i];
  }
  
  return sumaDeElementos - sumaActual;
}



let N = 5;
let listaDeNumeros = [5, 2, 4, 1];

console.log(encontrarFaltante(N, listaDeNumeros));