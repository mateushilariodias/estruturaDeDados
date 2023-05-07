class FormaGeometrica {
    #base
    #altura
    #tipo

    constructor(base, altura, tipo) {

        if(typeof base != 'number' || base <= 0) {
            throw new Error('ERRO: a base precisa ser númerica e maior que zero')
        }
        this.#base = base

        if(typeof altura != 'number' || altura <= 0) {
            throw new Error('ERRO: a altura precisa ser númerica e maior que zero')
        }
        this.#altura = altura

        if (! ['Retângulo', 'Triângulo', 'Elipse'].includes(tipo)) {
            throw new Error('ERRO: o tipo precisa ser Retãngulo, Triângulo, ou Eclipse')
        }
        this.#tipo = tipo

    }

    get base() {
        return this.#base
    }

    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }

    set base(value){
        this.#base = value
    }
    
    set altura(value){
        this.#altura = value
    }

    set tipo(value){
        this.#tipo = value
    }

    calculateArea(){
        switch (this.tipo) {
            case "Retângulo":
                return this.base * this.altura
            case "Triângulo":
                return (this.base * this.altura) / 2
            case "Elipse":
                return (this.base / 2) * (this.altura / 2) * Math.PI
            default:
                return null
        }
    }
}

let objectOne = new FormaGeometrica(2, 20, 'Retângulo')
let objectTwo = new FormaGeometrica(1, 30, 'Triângulo')
let objectThree = new FormaGeometrica(4, 40, 'Elipse')

console.log(objectOne.calculateArea())
console.log(objectTwo.calculateArea())
console.log(objectThree.calculateArea())