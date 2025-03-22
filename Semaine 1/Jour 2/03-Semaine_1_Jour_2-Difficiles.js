/*
- Créez une classe Personne avec un constructeur constructor(nom, age) qui initialise ces propriétés, et instanciez une personne.
- Instanciez deux objets Personne (ex. "Alice", 25 et "Bob", 30), et affichez leurs propriétés.
- Ajoutez une méthode saluer() à Personne qui affiche "Bonjour, je m'appelle [nom]", et testez-la.
*/

// 01
class Personne{
    constructor(nom = null, age= null){
        this.nom = nom;
        this.age = age;
    }
    saluer(){
        console.log('Bonjour, je m\'appelle ' + this.nom)
    }
}

const personne = new Personne();

// 02

const personne1 = new Personne("Alice", 25);
const personne2 = new Personne("Bob", 30);
console.log(personne1);
console.log(personne2);

// 03

personne1.saluer();
personne2.saluer();

