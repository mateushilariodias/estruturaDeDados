//Implementação Iterativa

function fatorial(number){
    let resultado = 1
    for(let i=number; i > 1; i--) resultado *= i
    return resultado
}

console.log('Fatorial de 5:', fatorial(5))

//Implementação Recursiva

function fatorialRec(number){
    if(number <= 1) return 1
    return number * fatorialRec(number-1)
}

console.log('Fatorial Recursivo de 5:', fatorialRec(5))