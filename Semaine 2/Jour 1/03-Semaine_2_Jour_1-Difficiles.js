/*
- Demander un nombre à l’utilisateur et afficher s’il est pair ou impair.
- Créer calculatrice(a, b, operation) pour +, -, *, / avec switch.
- Vérifier si une année est bissextile (divisible par 4 mais pas 100, ou par 400).
*/

// 01
let input_nambre = prompt("saisir un nombre : ");

if((input_nambre % 2 === 0) && (input_nambre !== 0)){
    console.log("pair");
}else{
    console.log("impair");
}

// 02
function calculatrice(a, b, operation){
    switch(operation){
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            console.log("this operation not supported");
            break;
    }
}

// 03

let an = 0;
if ((an % 4 === 0 && an % 100 !== 0) ||(an % 400 === 0)){
    console.log("bissextile");
}