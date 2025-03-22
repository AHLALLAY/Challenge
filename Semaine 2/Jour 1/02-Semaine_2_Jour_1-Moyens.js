/*
- Créer une fonction estAdulte(age) retournant true si age ≥ 18, sinon false.
- Écrire un switch affichant le jour (ex. 1 → "Lundi") selon une variable jour (1 à 7).
- Utiliser if-else imbriqués pour vérifier si un nombre est pair, impair ou nul.
- Créer maxTrois(a, b, c) retournant le plus grand des trois nombres avec if.
*/

// 01
function estAdulte(age){
    retrun (age >= 18) ? true : false;
}

// 02
switch(n){
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Le nombre doit être entre 1 et 7");
        break;
}

// 03
if(num % 2 === 0){
    console.log("pair");
}else if(num % 2 != 0){
    console.log("impair");
}else{
    console.log("null");
}

// 04
let max = 0;
let a=2, b=3, c=5;
if(a>b && a>c){
    max = a;
}else if(b>c){
    max = b;
}else{
    max = c;
}
console.log(max);