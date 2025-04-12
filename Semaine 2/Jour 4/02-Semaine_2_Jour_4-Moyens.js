/*
- Créer `sommeTableau(tableau)` retournant la somme avec `for`.
- Afficher `1` à `10` avec `while`.
- Créer `pairs` avec les nombres pairs de `1` à `20`.
- Inverser un tableau avec une boucle.
*/

// 01
function sommeTableau(tableau) {
    let s = 0;
    for (let i = 0; i < tableau.length; i++) {
        s += tableau[i];
    }
    // return s;
    console.log(s);
}

// 02
let x = 0;
while (x < 10) {
    console.log(x + 1);
    x++;
}

// 03
let pairs = [];

for(let i=0; i<=20; i++){
    if(i%2 === 0){
        pairs.push(i);
    }
}

// 04
const tableau = [];
for(let i=tableau.length-1; i>=0; i--){
    console.log(tableau[i]);
}