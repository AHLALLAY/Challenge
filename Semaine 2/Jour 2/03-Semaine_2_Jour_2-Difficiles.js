/*
- Créer `Rectangle` avec `longueur` et `largeur`, et méthodes `aire()` et `perimetre()`.
- Ajouter `estCarre()` retournant `true` si `longueur === largeur`.
- Créer `Personne` avec `nom` et `age`, et `anniversaire()` incrémentant l’âge.
*/

// 01
class Rectangle{
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }

    aire(){
        return this.longueur * this.largeur;
    }

    perimetre(){
        return 2*(this.longueur + this.largeur);
    }

// 02
    estCarre(){
        return this.longueur === this.largeur;
    }
}

// 03
class Personne{
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }

    anniversaire(){
        this.age ++;
    }
}