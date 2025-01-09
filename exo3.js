let nombres =  "10, 20, 30, 40"
let tab = (nombres.split(",")).map(Number);
let somme = tab.reduce((acc1, curr1) => acc1 + curr1, 0);
let moyenne = (somme/tab.length)
let supmoyenne = tab.filter(nb => nb > moyenne)

console.log(tab)
console.log(tab.length)
console.log(somme)
console.log(moyenne)
console.log(supmoyenne)

