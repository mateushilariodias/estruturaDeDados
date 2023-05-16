//Estrutura de dados Fila

export default class Deque {

    #arrayData //vetor privado

    constructor() {
        this.#arrayData = []
    }

    insertAtStart(value) {
        this.#arrayData.unshift(value)
    }

    insertAtEnd(value) {
        this.#arrayData.push(value)
    }

    removeAtTheBeginning() {
        return this.#arrayData.shift()
    }

    removeAtTheEnd() {
        return this.#arrayData.pop()
    }

    showAtStart() {
        return this.#arrayData[0]
    }

    showAtTheEnd() {
        return this.#arrayData[this.#arrayData.length - 1]
    }

    get isEmpty() {
        return this.#arrayData.length === 0
    }

    print() {
        let output = '[ '
        for (let i = 0; i < this.#arrayData.length; i++) {
            if (output !== '[ ') output += ', '
            output += `(${i}): ${this.#arrayData[i]}`
        }
        return output += ' ]'
    }
}