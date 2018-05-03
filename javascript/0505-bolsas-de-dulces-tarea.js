// https://omegaup.com/arena/problem/Bolsas-de-dulces#problems

function ventaClandestina(listaDeDulces, listaDePrecios, numerosElementos){
    let resultado = 0;

    for(let i = 0; i < numerosElementos; i++){
        resultado = resultado + (listaDeDulces[i] * listaDePrecios[i]);
    }

    return resultado;
}


let N = 5;
let tiposDeBolsas = [1,2,3,8,2];
let preciosDeDulces = [3,5,15,50,31];

console.log(ventaClandestina(tiposDeBolsas,preciosDeDulces,N));
