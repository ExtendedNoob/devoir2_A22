    // Facteur logique: La temprerature ne peut pas passé de -20 à 30 °C dans un délait de 1 jour.
    //                  Une différence de + ou - 10 °C sera appliqué entre les jours.
    //                  La temperature ne dépassera pas -20 ou 30°C.
// Functions
    function TempInitiale(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function TempJour2(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function TempJour3(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
//Génération de temperature initiale.
    const tempInitiale = TempInitiale(-20, 30)
    console.log("tempInitial: " + tempInitiale)
// Génération temperature des jours suivants.
    // Jour 2
        const tempJour2 = tempInitiale + (TempJour2(-10, 10 ))
        if (tempJour2 <= -20) {
            const tempJour2 = -20;
        }
        else if (tempJour2 >= 30) {
            const tempJour2 = 30;
        }
        console.log("TempJour2: " + tempJour2)
    //Jour 3.
        const tempJour3 = tempJour2 + (TempJour3(-10, 10))
        if (tempJour3 <= -20) {
            const tempJour3 = -20;
        }
        else if (tempJour3 >= 30) {
            const tempJour3 = 30;
        }
        console.log("TempJour3: " + tempJour3)
// Affiché les variables dans le HTML.
document.getElementById("").innerHTML = m;