// https://omegaup.com/arena/problem/Bolsas-de-dulces#problems

function ventaClandestina(listaDeDulces, listaDePrecios, numerosElementos){
    let resultado = 0;

    for(let i = 0; i < numerosElementos; i++){
        resultado = resultado + (listaDeDulces[i] * listaDePrecios[i]);
    }

    return resultado;
}

function calculaVentas(numElementos, listaDeDulces) {
    let resultado = 0;

    for (let i = 0; i < numElementos; i++) {
        resultado += (listaDeDulces[i].tipoDeDulce * listaDeDulces[i].precio); // abreviamos la suma
    }

    return resultado;
}

let N = 5;
let tiposDeBolsas = [1,2,3,8,2];
let preciosDeDulces = [3,5,15,50,31];

let bolsasDeDulces = [
    { tipoDeDulce: 1, precio: 3 },
    { tipoDeDulce: 2, precio: 5 },
    { tipoDeDulce: 3, precio: 15 },
    { tipoDeDulce: 8, precio: 45 },
    { tipoDeDulce: 2, precio: 31 }
];

// console.log(ventaClandestina(tiposDeBolsas,preciosDeDulces,N));
console.log(calculaVentas(N, bolsasDeDulces));
