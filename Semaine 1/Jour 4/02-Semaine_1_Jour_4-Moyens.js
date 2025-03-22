/*
- Créez une fonction estPair(nombre) qui retourne true si le nombre est pair (nombre % 2 === 0), et testez-la.
- Créez une fonction factorielle(n) qui calcule la factorielle d’un nombre (ex. 5! = 54321) avec une boucle.
- Créez une fonction maximum(a, b) qui retourne le plus grand des deux nombres avec if.
- Créez une fonction bienvenue(nom) qui affiche "Bienvenue, [nom] !", et testez-la avec votre nom.
*/

// 01
function estPair(nombre){
    return (nombre % 2 === 0) ? true : false;
}

// 02
function factorielle(n){
    let result = 1;
    while(n>1){
        result *= n;
        n--;
    }
    return result;
}

console.log(factorielle(5));

// 03
function maximum(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

// 04
function bienvenue(nom){
    console.log("Bienvenue, " + nom);
}