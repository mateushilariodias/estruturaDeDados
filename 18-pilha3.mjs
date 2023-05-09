import Stack from "./lib/Stack.mjs";

let phrase = 'Socorram-me, subi no ônibus em Marrocos'

let palindromo = new Stack()

for (let i = 0; i < phrase.length; i++){
    palindromo.insert(phrase.charAt(i))
}

console.log(palindromo.print());

let reverse = ""

while(!palindromo.isEmpty){
    reverse += palindromo.remove()
}

console.log(reverse)