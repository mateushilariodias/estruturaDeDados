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
        else if(position >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }
        else{
            let before = this.#head
            for(let i = 1; i < position; i++){
                before = before.next
            }
            let after = before.next
            inserted.next = after
            before.next = inserted
        }
        this.#count++
    }
    insertHead(value){
        this.insert(0, value)
    }
    insertTail(value){
        this.insert(this.#count, value)
    }
    remove(position){
        if(this.isEmpty || position < 0 || position > this.#count - 1) return undefined
        let removed
        if(position === 0){
            removed = this.#head
            this.#head = this.#head.next
            if(this.count === 1) this.#tail = null
        }
       else{
        let before = this.#head
        for(let i = 0; i < position; i++) before = before.next
        removed = before.next
        let after = removed.next
        inserted.next = after
       }
       this.#count--
    }
}