const personne = {
    nom : "Alice",
    age : "30",
    adresse: {
        rue: "3 ouns olympus",
        ville: "mars",
        codePostal: 69420
    },
    hobbies: ["yoga", "smiling", "cooking", "aquaponey"]
}

console.log(personne.adresse)
personne.hobbies.push("tennis")
personne.age = 3000
delete personne.adresse.codePostal


console.log(personne)