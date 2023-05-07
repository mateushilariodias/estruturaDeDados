let phrase = 'Socorram-me, subi no ônibus em Marrocos'

let array = []

for (let i = 0; i < phrase.length; i++){
    array.push(phrase.charAt(i))
}

// array.unshift('X')

// array.splice(11, 0, 'W')

// array.splice(23, 2)

// console.log(array)

let reverse = ""

while(array.length > 0){
    reverse = reverse + array.pop()
}

console.log(reverse)