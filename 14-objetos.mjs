let shapeOne =  {
    base: 15,
    altura: 12,
    tipo: "Retângulo"
}

let shapeTwo = {
    base: 10,
    altura: 26,
    tipo: "Triângulo"
}

let shapeThree = {
    base: 20,
    altura: 10,
    tipo: "Elipse"
}

let shapeFour = {
    base: 7.5,
    altura: 12.3,
    tipo: "aaaaa",
}

let shapeFive = {
    base: "migos",
    altura: "love",
    tipo: "eeeee"
}

function calcularArea(shape) {
    switch (shape.tipo) {
        case "Retângulo":
            return shape.base * shape.altura
        case "Triângulo":
            return (shape.base * shape.altura) / 2
        case "Elipse":
            return (shape.base / 2) * (shape.altura / 2) * Math.PI
        default:
            return null
    }
}

console.log(`A área de um ${shapeOne.tipo} de ${shapeOne.base}x${shapeOne.altura} é: ${calcularArea(shapeOne)}`)
console.log(`A área de um ${shapeTwo.tipo} de ${shapeTwo.base}x${shapeTwo.altura} é: ${calcularArea(shapeTwo)}`)
console.log(`A área de um ${shapeThree.tipo} de ${shapeThree.base}x${shapeThree.altura} é: ${calcularArea(shapeThree)}`)
console.log(`A área de um ${shapeFour.tipo} de ${shapeFour.base}x${shapeFour.altura} é: ${calcularArea(shapeFour)}`)
console.log(`A área de um ${shapeFive.tipo} de ${shapeFive.base}x${shapeFive.altura} é: ${calcularArea(shapeFive)}`)