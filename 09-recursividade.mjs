//Implementação Iterativa

function fatorial(number){
    let resultado = 1
    for(let i=number; i > 1; i--) resultado *= i
    return resultado
}

console.log('Fatorial de 5:', fatorial(5))

//Implementação Recursiva

function fatorialRecursivo(number){
    if(number <= 1) ret
    return number * fatorialRecursivo(number-1)
}

console.log('Fatorial Recursivo de 5:', fatorialRecursivo(5))