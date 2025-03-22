/*
- Créez une fonction sommeTableau(tableau) qui prend un tableau de nombres et retourne leur somme avec une boucle.
- Créez une fonction inverserChaine(chaine) qui retourne la chaîne inversée (ex. "abc" → "cba") avec une boucle ou split().
- Créez une fonction estPalindrome(chaine) qui vérifie si une chaîne est un palindrome (ex. "radar") et retourne true ou false.
*/

// 01
function sommeTableau(tableau){
    let somme = 0;
    for(let i =0; i < tableau.length; i++){
        somme += tableau[i];
    }
    return somme;
}

// 02
// méthode 01
function inverserChaine(chaine){
    let res = "";
    for(let i = chaine.length-1; i >= 0; i--){
        res += chaine[i];
    }
    return res;
}

// méthode 02
function inverserChaine(chaine){
    return chaine.split("").reverse("").join("");
}

// 03
function estPalindrome(chaine){
    return (chaine.split("").reverse("").join("") === chaine) ? true : false;
}