let pass, trocas, comp

function selectionSort(array, funcaoDeComparacao) {

    pass = 0, comp = 0, trocas = 0

    for (let posicaoSelecionada = 0; posicaoSelecionada < array.length - 1; posicaoSelecionada++) {
        let menorPosicao = posicaoSelecionada + 1
        pass++

        for (let i = menorPosicao + 1; i < array.length; i++) {
            if (funcaoDeComparacao(array[menorPosicao], array[i])) {
                menorPosicao = i
                comp++
            }
        }

        if (funcaoDeComparacao(array[posicaoSelecionada], array[menorPosicao])) {
            [array[posicaoSelecionada], array[menorPosicao]] = [array[menorPosicao], array[posicaoSelecionada]]
            trocas++
        }
    }
}

// let array = [12, 4, 56, 34, 55, 32, 1, 5, 88, 0, 3, 77, 92]

// selectionSort(array)
// console.log(array)

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

console.time('Tempo de ordenação')
// Ordenando por nome_motorista
selectionSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista > elementTwo.nome_motorista)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Tempo de ordenação')

console.log(objMotoristas)
console.log({pass, comp, trocas, memoriaMB})