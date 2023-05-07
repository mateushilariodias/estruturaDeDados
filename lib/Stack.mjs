//Estrutura de dados Pilha

export default class Stack {
    
    #arrayData //vetor privado
    
    constructor(){
        this.#arrayData = []
    }

    //inserir
    insert(value){
        this.#arrayData.push(value)
    }

    //retirar
    remove(){
        return this.#arrayData.pop()
    }

    //mostrar
    show(){
        return this.#arrayData[this.#arrayData.length -1]
    }

    //saber se a pilha está vazia
    get isEmpty(){
        return this.#arrayData.length === 0
    }
    
    //imprimir a pilha

}