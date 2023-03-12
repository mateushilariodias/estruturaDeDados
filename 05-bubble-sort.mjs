let pass, trocas, comp

function bubbleSort(array) {
    let swap
    pass = 0, trocas = 0, comp = 0

    do{
        swap = false
        pass++

        for(let i = 0; i < array.length-1; i++) {
            comp++
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                swap = true
                trocas++
        }
    }
    }while(swap)
}

// let numeros = [0,1,6,4,3,5,7,2,9,8]

// bubbleSort(numeros)
// console.log("Ordenação: ", numeros)
// console.log({pass, comp, trocas})

import {nomes} from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
bubbleSort(nomes)
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({pass, comp, trocas})