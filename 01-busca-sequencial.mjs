function buscaSequencial(array, valorDeBusca) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] === valorDeBusca) return i 
    }
    return -1
}

// const frutas = ["laranja", "maça", "uva", "pera", "jabuticaba", "limão"]
// console.log("A posição da uva é", buscaSequencial(frutas, "uva"))

import { nomes } from './data/vetor-nomes.mjs'

console.log("Posição de MATEUS: ", buscaSequencial(nomes, "MATEUS"))