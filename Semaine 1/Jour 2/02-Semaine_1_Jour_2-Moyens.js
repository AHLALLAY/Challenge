/*
- Créez une classe Animal avec une propriété nom, et instanciez deux animaux (ex. "Lion", "Chat") en affichant leurs noms.
- Ajoutez une méthode parler() à Animal qui affiche "L'animal fait un son", et appelez-la pour un objet.
- Créez une classe Rectangle avec les propriétés longueur et largeur, et instanciez un rectangle (ex. 5 et 3).
- Ajoutez une méthode aire() à Rectangle qui retourne longueur * largeur, et affichez l’aire d’un rectangle.
*/

// 01
class Animal{
    constructor(nom){
        this.nom = nom;
    }
    printName(){
        console.log(this.nom);
    }

    parler(){
        console.log("L'animal fait un son");
    }
}

const Lion = new Animal("lion");
const Chat = new Animal("chat");

// 02
Lion.parler();

// 03
class Rectangle{
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }
    aire(){
        console.log(this.longueur * this.largeur);
    }
}

// 04
const rectangle = new Rectangle(5, 3);
rectangle.aire();