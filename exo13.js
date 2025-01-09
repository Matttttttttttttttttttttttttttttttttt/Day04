function calculationnateur(nb1, nb2, operationnateur){
    if (nb2 === 0 && operationnateur == "/") {
        return("connard, je peux pas diviser par 0, t'es débile ou quoi ?????")
    }
    resultat = eval(nb1 + operationnateur + nb2)
    return(resultat)
}

console.log(calculationnateur(2,0, "*"))


