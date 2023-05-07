function quickSort(array, ComparasionFunction, start = 0, end = array.length - 1) {
    if (end <= start) return 

    const pivot  = end
    let dividerOfRegions = start - 1

    for ( let i = start; i < end; i++ ) {
        if (ComparasionFunction(array[pivot], array[i])) {
            dividerOfRegions++
            if ( dividerOfRegions !== i ) {
                [array[i], array[dividerOfRegions]] = [array[dividerOfRegions], array[i]]
            }
        }
    }

    dividerOfRegions++

    if (dividerOfRegions !== pivot && ComparasionFunction(array[dividerOfRegions], array[pivot])) {
        [array[dividerOfRegions], array[pivot]] = [array[pivot], array[dividerOfRegions]]
    }

    quickSort(array, ComparasionFunction, start, dividerOfRegions - 1)
    quickSort(array,ComparasionFunction, dividerOfRegions + 1, end)
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

quickSort(objMotoristas, (elementOne, elementTwo) => {
    if(elementOne.razao_social === elementTwo.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elementOne.nome_motorista > elementTwo.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elementOne.razao_social > elementTwo.razao_social
})

console.log(objMotoristas)