// https://omegaup.com/arena/problem/Conjunto-Capicua#problems

function esCapicua(numElementos, listaDeNumeros) {
  let izq = 0;
  let der = numElementos - 1;

  while (izq < der) {
    if (listaDeNumeros[izq] !== listaDeNumeros[der]) return 'NO';
    izq++;
    der--;
  }

  return 'SI';
}

let N = 5;
let elementos = [1, 3, 4, 3, 1];

console.log(esCapicua(N, elementos));