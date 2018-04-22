/**
 * https://omegaup.com/arena/problem/A-contar-lapices#problems
 */

let N = 5;
let K = 1;
let numeros = [1, 2, 3, 2, 1];

let result = 0;

for( let i = 0; i < N; i++){

    if (K === numeros[i]) {
        result++;
    }
}

console.log(result);