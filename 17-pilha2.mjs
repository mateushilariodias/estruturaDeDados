import Stack from "./lib/Stack.mjs";

let pilha = new Stack();

//console.log(pilha.isEmpty);

//console.log(pilha.print());

pilha.insert("Renato")
pilha.insert("Kauan")
pilha.insert("Rafael")
pilha.insert("Matheus")

//console.log(pilha.isEmpty);
console.log(pilha.print());

let removed = pilha.remove()

console.log(removed)

console.log(pilha.print());

pilha.unshift("Leo")