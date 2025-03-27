/*
- Créer `CompteBancaire` avec un constructeur initialisant `solde` à `0`, et `deposer(montant)`.
- Ajouter `retirer(montant)` qui vérifie si le solde est suffisant.
- Créer `Etudiant` avec `nom` et `notes` (tableau), et `moyenne()` pour calculer la moyenne.
- Instancier un étudiant avec `[15, 18, 12]` et afficher sa moyenne.
*/


class CompteBancaire {
// 01
    constructor(solde = 0) {
        this.solde = solde;
    }

    deposer(montant) {
        this.solde += montant;
    }

// 02
    retirer(montant) {
        if (montant <= this.solde) {
            this.solde -= montant;
            console.log(`Retrait effectué, nouveau solde : ${this.solde}`);
        } else {
            console.log("Fonds insuffisants");
        }
    }
}

// 03
class Etudiant {
    constructor(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }

    moyenne() {
        let somme = 0;
        for (let i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
        }
        return somme / this.notes.length;
    }
}

// 04
const etudiant = new Etudiant('Ali', [15, 18, 12]);
console.log(`La moyenne de ${etudiant.nom} est : ${etudiant.moyenne()}`);