function buscaSequencial(array, funcaoDeComparacao) {
    for (let i = 0; i < array.length; i++ ) {
        if (funcaoDeComparacao(array[i])) return i 
    }
    return -1
}

function comparaNome(obj) {
    return obj.first_name === "LUCAS"
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

console.log("Posição de LUCAS:", buscaSequencial(objNomes, comparaNome))
