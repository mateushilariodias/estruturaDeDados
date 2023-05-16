import Deque from "./lib/Deque.mjs";

let loves = new Deque();

console.log(loves.isEmpty)
console.log(loves.print())

loves.insertAtEnd("Kauan"); //Começo do namoro em 2022.2
loves.insertAtStart("Renato"); //Começo do namoro em 2022.1

console.log(loves.print())

loves.removeAtTheEnd() //Terminamos o namoro em 2022.2

console.log(loves.print())

loves.insertAtEnd("Rafael"); //...
loves.removeAtTheBeginning() //Terminei o namoro em 2022.2

console.log(loves.print()) 