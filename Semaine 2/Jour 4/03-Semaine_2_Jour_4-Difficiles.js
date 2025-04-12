/*
- Créer `trouverMax(tableau)` pour le plus grand nombre.
- Fusionner et trier deux tableaux en ordre croissant.
- Créer `supprimerDoublons(tableau)` sans doublons.
*/

// 01
function trouverMax(tableau){
    let max = tableau[0];
    for(let i=0; i<tableau.length; i++){
        if(tableau[i]>max){
            max = tableau[i];
        }
    }

}

// 02
function fusionner_et_trier(tableau1, tableau2){
    // let fusionner = [...tableau1, ...tableau2];
    // fusionner.sort((a, b) => a - b);

    let fusionner = [];
    for(let i = 0; i<tableau1.length; i++){
        fusionner.push(tableau1[i]);
    }
    for(let i = 0; i<tableau2.length; i++){
        fusionner.push(tableau2[i]);
    }

    for(let i=0; i<fusionner.length-1; i++){
        for(let j=0; j<fusionner.length-1-i; j++){
            if(fusionner[j] > fusionner[j+1]){
                let temp = fusionner[j];
                fusionner[j] = fusionner[j+1];
                fusionner[j+1] = temp;
            }
        }
    }

}

// 03
function supprimerDoublons(tableau){
    // return [...new Set(tableau)];

    let result = [];
    for(let i=0; i<tableau.length; i++){
        let added = true;
        for(let j=0; j<result.length; j++){
            if(tableau[i]===result[j]){
                added = flase;
                break;
            }
        }

        if(added){
            result.push(tableau[i]);
        }
    }
}