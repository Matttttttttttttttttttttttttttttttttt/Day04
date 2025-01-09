const etudiants = [
    eleve1 = {
        nom: "jean bon",
        age: 38,
        note: 3
    },
    eleve2 = {
        nom: "jean mi",
        age: 5,
        note: 20
    },
    eleve3 = {
        nom: "jean claude",
        age: 3000,
        note: 1
    },
]

tabnotes = [eleve1.note, eleve2.note, eleve3.note]
tabnotes.sort((a, b) => a-b)
const meilleurEleve = etudiants.find(eleve => eleve.note === tabnotes[2]);

for (i = 0; i < etudiants.length; i++)  {
    if (etudiants[i].note > 15) {
        console.log(etudiants[i].nom)
    }
}

