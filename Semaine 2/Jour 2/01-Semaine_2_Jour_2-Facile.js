/*
- Ajouter un constructeur à `Voiture` initialisant `marque`.
- Créer une méthode `demarrer()` affichant `"La voiture démarre"`.
- Instancier une voiture avec `new Voiture("Toyota")` et appeler `demarrer()`.
*/


class Voiture{
// 01
    constructor(marque){
        this.marque = null;
    }
// 02

    demarrer(){
        console.log('La voiture démarrer');
    }
}

// 03
const voiture = new Voiture("Toyota");
voiture.demarrer();