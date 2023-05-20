//Classe que representa a unidade de armazenamento da lista encadeada

class Node {
    arrayData
    next
    constructor(value){
        this.arrayData = value;
        this.next = null;
    }
}

//Classe que representa a estrutura de dados lista encadeada

export default class LinkedList {
    #head
    #tail
    #count
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }
    get isEmpty() {
        return (this.#count === 0);
    }
    get count() {
        return this.#count;
    }
    insert(position, value) {
        const inserted = new Node(value);
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        else if(position === 0){
            inserted.next = this.#head
            this.#head = inserted
        }

    }
}