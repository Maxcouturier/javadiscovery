let choice = prompt ("Tu veux cb d'étages dans ta pyramide ?");
let symbol = "#";
let count = 1;

while (count <= choice) {
    let espace  = "";
    for (let compteur_espace = 0; compteur_espace < (choice - count); compteur_espace++) {
        espace += " "  
    }
    for (let compteur_diese = 0; compteur_diese < count; compteur_diese++) {
        espace = espace + symbol;
    }
    count++;
    console.log(espace);
}