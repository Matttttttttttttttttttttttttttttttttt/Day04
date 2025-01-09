let tab = []
let num = 90
for (let i = 0; i < num; i++) {
    tab.push(Math.floor(Math.random() * 100))
}

function tri(tab) {
    for (let n = 0; n < tab.length ; n++) {
        for (let j = 0; j < tab.length - n + 1; j++) {
            if (tab[j] > tab[j + 1]) {
                let temp = tab[j]
                tab[j] = tab[j+1]
                tab[j+1] = temp
            }
        }
    }
    return(tab)
}

console.log(tri(tab))
