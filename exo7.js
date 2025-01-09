let numtab = [4013, 4012, 69, 911, 420, 13, 9, 11, 118712]
let somme = numtab.reduce((a, b) => a+b)
let moyenne = (somme/numtab.length)
console.log(moyenne)

if (numtab.length === NaN) {
    alert("non")
}