/*
- Définissez une classe vide appelée Voiture avec class Voiture {}.
- Créez un objet maVoiture à partir de cette classe avec new Voiture() et affichez-le.
- Ajoutez une propriété marque à la classe Voiture, instanciez un objet avec marque = "Toyota", et affichez la marque.
*/

// 01
class Voiture{}

// 02
const maVoiture = new Voiture();

// 03
class Voituree{
    constructor(marque){
        this.marque = marque;
    }

    printMark() {
        console.log(this.marque);    
    }
}

const mark = new Voituree("Toyota");
mark.printMark();