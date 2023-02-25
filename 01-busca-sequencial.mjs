function buscaSequencial(frutas, valorDeBusca) {
    for (let i = 0; i < frutas.length; i++ ) {
        if (frutas[i] === valorDeBusca) return i 
    }
    return -1
}

const frutas = ["laranja", "maça", "uva", "pera", "jabuticaba", "limão"]
console.log("A posição da uva é", buscaSequencial(frutas, "uva"))