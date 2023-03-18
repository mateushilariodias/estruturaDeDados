function bubbleSort(array, funcaoDeComparacao) {
    let swap

    do {
        swap = false
        for (let i = 0; i < array.length - 1; i++) {
            if(funcaoDeComparacao(array[i], array[i+1])) {
                [ array[i], array[i+1] ] = [ array[i+1], array[i] ]
                swap = true
            }
        }
    } while(swap)
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

//Ordenação crescente
// console.time('Tempo de ordenação')
// bubbleSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista > elementTwo.nome_motorista)
// console.timeEnd('Tempo de ordenação')
// console.log(objMotoristas)

//Ordenação decrescente
// console.time('Tempo de ordenação')
// bubbleSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista < elementTwo.nome_motorista)
// console.timeEnd('Tempo de ordenação')
// console.log(objMotoristas)

//Ordenação decrescente ignorando acentos
// console.time('Tempo de ordenação')
// bubbleSort(objMotoristas, (elementOne, elementTwo) => elementOne.nome_motorista.localeCompare( elementTwo.nome_motorista, 'pt-br' ) <= 0)
// console.timeEnd('Tempo de ordenação')
// console.log(objMotoristas)


//Ordenação Dois Níveis: primeiro por razão_social, depois por nome_motorista
bubbleSort(objMotoristas, (elementOne, elementTwo) => {
    if(elementOne.razao_social === elementTwo.razao_social){
        return elementOne.nome_motorista > elementTwo.nome_motorista
        }
        return elementOne.razao_social > elementTwo.razao_social
})

console.log(objMotoristas)