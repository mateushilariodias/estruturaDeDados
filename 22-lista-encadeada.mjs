import LinkedList from "./lib/LinkedList.mjs";

const list = new LinkedList();

console.log(list.isEmpty);
list.insert(0, 'Pedregulho');
list.insert(0, 'Franca');
list.insert(2, 'São Paulo');
list.insert(7, 'Rio de Janeiro');
list.insert(4, 'Ribeirão Preto');
list.insert(4, 'Nova York');
console.log(list.print());
