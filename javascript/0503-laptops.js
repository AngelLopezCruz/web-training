// https://omegaup.com/arena/problem/LapTops#problems

function comprarLaptop(numDeLaptops, listaDeLaptops) {
  let laptopNueva = { posicion: 0, ventas: 0 };
  let laptopActual = { posicion: 0, ventas: 0 };

  for (let i=0; i < numDeLaptops; i++) {
    laptopActual.posicion = i + 1; // hace que el 0 se convierta en uno, el 1 en 2, ...
    laptopActual.ventas = listaDeLaptops[i]; // toma las ventas de la listaDeLaptops

    // comparamos que la laptop actual sea mas popular que las anteriores
    if (laptopActual.ventas > laptopNueva.ventas) {
      laptopNueva.ventas = laptopActual.ventas;
      laptopNueva.posicion = laptopActual.posicion;
    }
  }

  return laptopNueva;
}

let N = 5;
let laptops = [4, 1, 2, 13, 1];

console.log(comprarLaptop(N, laptops));