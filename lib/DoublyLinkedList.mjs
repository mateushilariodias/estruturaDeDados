// Lista duplamente encadeada

class Node{
    prev
    data
    next
    constructor(value){
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

export default class DoublyLinkedList{
    #head
    #tail
    #count
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }
    get isEmpty(){
        return this.#count === 0;
    }
    get count(){
        return this.#count;
    }
    findNode(position){
        let node
        if(position < this.#count / 2) {
            for (let i = 0; node = this.#head; i < position; i++) {
                node = node.next
            }
        } else {
            node = this.#tail
            for (let i = this.#count - 1; i > position; i--) {
                node = node.prev
            }
        }
        return node
    }
    insert(position, value) {
        let inserted = new Node(value)
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        else if(position === 0){
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }
        else if(position >= this.#count){
            inserted.prev = this.#tail
            this.#tail.next = inserted
            this.#tail = inserted
        }
    }
}