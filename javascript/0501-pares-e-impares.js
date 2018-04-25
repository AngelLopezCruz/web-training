// crear una funcion que reciba como entrada una lista de numeros
// y que regrese de esa lista cuantos numeros son pares y cuantos impares:
// ejemplo:
//
// entrada
// lista = [1, 5, 2, 5, 8, 3, 2]
//
// salida
// pares: 3
// impares: 4

function contarParesEImpares(listaDeNumeros) {
  let conteo = {
    pares: 0,
    impares: 0
  };

  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] % 2 == 0) {
      conteo.pares++;
    } else {
      conteo.impares++;
    }
  }

  return conteo;
}

