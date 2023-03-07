function buscaBinaria(array, valorDeBusca) {
    let inicio = 0
    let fim = array.length - 1

    while(fim >= inicio) {
        let meio = Math.floor((inicio + fim) / 2);

        switch(valorDeBusca(array[meio])) {
            case 0:
                return meio
            case 1:
                inicio = meio + 1
                break
            default:
                fim = meio - 1
        }
    }
    return -1
}

function funcaoDeComparacao(valorMeio, valorDeBusca = "GUSTAVO") {
    if (valorDeBusca === valorMeio.first_name) return 0
    else if (valorDeBusca > valorMeio.first_name) return 1
    else return -1
}

import { objNomes } from "./data/vetor-obj-nomes.mjs"

console.log("Posição de first name: GUSTAVO: ", buscaBinaria(objNomes, funcaoDeComparacao))