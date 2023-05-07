function mergeSort(array, funcaoDeComparacao) {
    if(array.length < 2){
        return array
    }

    let meio = Math.floor(array.length / 2)

    let arrayEsquerdo = array.slice(0, meio)
    let arrayDireito = array.slice(meio)

    arrayEsquerdo = mergeSort(arrayEsquerdo, funcaoDeComparacao)
    arrayDireito = mergeSort(arrayDireito, funcaoDeComparacao)

    let newArray = [], posicaoDireita = 0, posicaoEsquerda = 0

    while(posicaoEsquerda < arrayEsquerdo.length && posicaoDireita < arrayDireito.length){
        if(funcaoDeComparacao(arrayEsquerdo[posicaoEsquerda], arrayDireito[posicaoDireita])){
            newArray.push(arrayEsquerdo[posicaoEsquerda])
            posicaoEsquerda++
        }else{
            newArray.push(arrayDireito[posicaoDireita])
            posicaoDireita++
        }
    }

    let sobra

    if(posicaoEsquerda < posicaoDireita){
        sobra = arrayEsquerdo.slice(posicaoEsquerda)
    }else{
        sobra = arrayDireito.slice(posicaoDireita)
    }

    return [...newArray,...sobra]
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

console.time('Tempo de ordenação')

// Ordenando por nome_motorista
//selectionSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista > elementTwo.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE
// selectionSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista < elementTwo.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// selectionSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista.localeCompare(elementTwo.nome_motorista, 'pt-br') <= 0)  // LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
let objMotoristasOrd = mergeSort(objMotoristas, (elementOne, elementTwo) => {
    if(elementOne.razao_social === elementTwo.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elementOne.nome_motorista > elementTwo.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elementOne.razao_social > elementTwo.razao_social
})

console.log(objMotoristasOrd)