function buscaBinaria(array, valorDeBusca) {
    let inicio = 0;
    let fim = array.length - 1;

    while (fim >= inicio) {
        let meio = Math.floor((inicio + fim) / 2);

        if (valorDeBusca === array[meio]) {
            return meio;
        }
        else if (valorDeBusca > array[meio]) {
            inicio = meio + 1;
        }
        else {fim = meio - 1;}
    }
    return -1
}

// let numeros = [0,11,22,33,44,55,66,77,88,99]

// console.log('Posição de 33: ', buscaBinaria(numeros, 33))
// console.log('Posição de 77: ', buscaBinaria(numeros, 77))
// console.log('Posição de 80: ', buscaBinaria(numeros, 80))

import {nomes} from './data/vetor-nomes.mjs'

console.log('Posição de ALEXANDRE: ',buscaBinaria(nomes, "ALEXANDRE"))