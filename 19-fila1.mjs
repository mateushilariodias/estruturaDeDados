import Queue from "./lib/Queue.mjs";

let fila = new Queue();

//console.log(fila.isEmpty);

fila.insert("Renato")
fila.insert("Kauan")
fila.insert("Rafael")

//console.log(fila.isEmpty);

console.log(fila.print());

let removed = fila.remove()

console.log(removed)

console.log(fila.print());