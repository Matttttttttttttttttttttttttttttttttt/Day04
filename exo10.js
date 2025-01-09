// gen des nombres
let tab = []
let num = 50
for (let i = 0; i < num; i++) {
    tab.push(Math.floor(Math.random() * 100) + 1 )
}
console.log(tab)

//moyenne (et somme pour la moyenne ducou)
let sum = tab.reduce((a, b) => a + b)
let moyenne = (sum/tab.length)
console.log(moyenne)

//sort par ordre croissant, puis on prends la première et dernière valeur.
let minmax = tab.sort(function(a, b){
    return(a-b)
});
console.log(minmax[0], minmax[49])

// parité
let pair = []
for (let i = 0; i < tab.length; i++) {
    if (i % 2 == 0) {
        pair.push(i)
    }
}
console.log(pair.length)
