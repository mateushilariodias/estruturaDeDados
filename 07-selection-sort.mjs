let pass, trocas, comp

function selectionSort(array) {

    pass = 0, comp = 0, trocas = 0

    for (let posicaoSelecionada = 0; posicaoSelecionada < array.length - 1; posicaoSelecionada++) {
        let menorPosicao = posicaoSelecionada + 1
        pass++

        for (let i = menorPosicao + 1; i < array.length; i++) {
            if (array[menorPosicao] > array[i]) {
                menorPosicao = i
                comp++
            }
        }

        if (array[posicaoSelecionada] > array[menorPosicao]) {
            [array[posicaoSelecionada], array[menorPosicao]] = [array[menorPosicao], array[posicaoSelecionada]]
            trocas++
        }
    }
}

// let array = [12, 4, 56, 34, 55, 32, 1, 5, 88, 0, 3, 77, 92]

// selectionSort(array)
// console.log(array)

import { nomes } from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
selectionSort(nomes)
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({ pass, comp, trocas })