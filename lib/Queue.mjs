//Estrutura de dados Fila

export default class Queue {

    #arrayData //vetor privado

    constructor() {
        this.#arrayData = []
    }

    //inserir
    insert(value) {
        this.#arrayData.push(value)
    }

    //retirar
    remove() {
        return this.#arrayData.shift()
    }

    //mostrar
    show() {
        return this.#arrayData[0]
    }

    //saber se a pilha está vazia
    get isEmpty() {
        return this.#arrayData.length === 0
    }

    //imprimir a pilha
    print() {
        let output = '[ '
        for (let i = 0; i < this.#arrayData.length; i++) {
            if (output !== '[ ') output += ', '
            output += `(${i}): ${this.#arrayData[i]}`
        }
        return output += ' ]'
    }
}