function mergeSort(array) {
    if(array.length < 2){
        return array
    }

    let meio = Math.floor(array.length / 2)

    let arrayEsquerdo = array.slice(0, meio)
    let arrayDireito = array.slice(meio)

    arrayEsquerdo = mergeSort(arrayEsquerdo)
    arrayDireito = mergeSort(arrayDireito)

    let newArray = [], posicaoDireita = 0, posicaoEsquerda = 0

    while(posicaoEsquerda < arrayEsquerdo.length && posicaoDireita < arrayDireito.length){
        if(arrayEsquerdo[posicaoEsquerda]< arrayDireito[posicaoDireita]){
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

// let numeros = [54, 26, 93, 17, 77, 31, 44, 55, 20]

// let numerosOrdenados = mergeSort(numeros)

// console.log(numerosOrdenados)

import { nomes } from './data/nomes-desord.mjs'

let nomesOrdenados = mergeSort(nomes)

console.log(nomesOrdenados)