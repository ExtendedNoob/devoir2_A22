    // Facteur logique: La temprerature ne peut pas passé de -20 à 30 °C dans un délait de 1 jour.
    //                  Une différence de + ou - 10 °C sera appliqué entre les jours.
    //                  La temperature ne dépassera pas -20 ou 30°C.
// Function
    function Generation(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
//Génération de temperature initiale. (Jour1)
    var tempInitiale = Generation(-20, 30)
        /*// Entre -20 et 0 alors l’icône neige.jpg est affichée.
            if (tempInitiale >= -20 && tempInitiale <= 0) {
                document.getElementById("imgNeige").classList.remove("imgHide");
            }
        // Entre 1 et 10 alors l’icône pluie.jpg est affichée.
            else if (tempInitiale >= 1 && tempInitiale <= 10) {
                document.getElementById("imgPluie").classList.remove("imgHide");
            }
        // Entre 11 et 20 alors l’icône nuage.jpg est affichée.
            else if (tempInitiale >= 11 && tempInitiale <= 20) {
                document.getElementById("imgNuage").classList.remove("imgHide");
            }
        // Entre 21 et 30 alors l’icône soleil.jpg est affichée.
            else if (tempInitiale >= 21 && tempInitiale <= 30) {
                document.getElementById("imgSoleil").classList.remove("imgHide");
            }*/
// Génération temperature des jours suivants.
    // Jour 2.
        var tempJour2 = tempInitiale + (Generation(-10, 10))
        var tempJour2 = Math.min(Math.max(parseInt(tempJour2), -20), 30);
            /*// Entre -20 et 0 alors l’icône neige.jpg est affichée.
                if (temp >= -20 && temp <= 0) {
                    document.getElementById("imgNeige").classList.remove("imgHide");
                }
            // Entre 1 et 10 alors l’icône pluie.jpg est affichée.
                else if (temp >= 1 && temp <= 10) {
                    document.getElementById("imgPluie").classList.remove("imgHide");
                }
            // Entre 11 et 20 alors l’icône nuage.jpg est affichée.
                else if (temp >= 11 && temp <= 20) {
                    document.getElementById("imgNuage").classList.remove("imgHide");
                }
            // Entre 21 et 30 alors l’icône soleil.jpg est affichée.
                else if (temp >= 21 && temp <= 30) {
                    document.getElementById("imgSoleil").classList.remove("imgHide");
                }*/
    //Jour 3. 
        var tempJour3 = tempJour2 + (Generation(-10, 10))
        var tempJour3 = Math.min(Math.max(parseInt(tempJour3), -20), 30);
            /*// Entre -20 et 0 alors l’icône neige.jpg est affichée.
                if (tempJour3 >= -20 && tempJour3 <= 0) {
                    document.getElementById("imgNeige").classList.remove("imgHide");
                }
            // Entre 1 et 10 alors l’icône pluie.jpg est affichée.
                else if (tempJour3 >= 1 && tempJour3 <= 10) {
                    document.getElementById("imgPluie").classList.remove("imgHide");
                }
            // Entre 11 et 20 alors l’icône nuage.jpg est affichée.
                else if (tempJour3 >= 11 && tempJour3 <= 20) {
                    document.getElementById("imgNuage").classList.remove("imgHide");
                }
            // Entre 21 et 30 alors l’icône soleil.jpg est affichée.
                else if (tempJour3 >= 21 && tempJour3 <= 30) {
                    document.getElementById("imgSoleil").classList.remove("imgHide");
                }*/
// Affiché les variables dans le HTML.
    document.getElementById('tempInitiale').innerHTML = tempInitiale;
    document.getElementById('tempJour2').innerHTML = tempJour2;
    document.getElementById('tempJour3').innerHTML = tempJour3;