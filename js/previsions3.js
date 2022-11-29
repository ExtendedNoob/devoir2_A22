    // Facteur logique: La temprerature ne peut pas passé de -20 à 30 °C dans un délait de 1 jour.
    //                  Une différence de + ou - 15 °C sera appliqué entre les jours.
    //                  La temperature ne dépassera pas -20 ou 30°C.
// Function
    function Generation(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
// Jour 1 (demain)
    var tempInitiale = Generation(-20, 30)
    var tempMax1 = tempInitiale + (Generation(0, 5))
    var tempMax1 = Math.min(Math.max(parseInt(tempMax1), -20), 30);
    var tempMin1 = tempInitiale - (Generation(0, 5))
    var tempMin1 = Math.min(Math.max(parseInt(tempMin1), -20), 30);
        if (tempInitiale >= -20 && tempInitiale <= 0) {
            document.getElementById("imgNeige-1").classList.remove("imgHide");
        }
        else if (tempInitiale >= 1 && tempInitiale <= 10) {
            document.getElementById("imgPluie-1").classList.remove("imgHide");
        }
        else if (tempInitiale >= 11 && tempInitiale <= 20) {
            document.getElementById("imgNuage-1").classList.remove("imgHide");
        }
        else if (tempInitiale >= 21 && tempInitiale <= 30) {
            document.getElementById("imgSoleil-1").classList.remove("imgHide");
        }
// Jour 2.
        var tempJour2 = tempInitiale + (Generation(-15, 15))
        var tempJour2 = Math.min(Math.max(parseInt(tempJour2), -20), 30);
        var tempMax2 = tempJour2 + (Generation(0, 5))
        var tempMax2 = Math.min(Math.max(parseInt(tempMax2), -20), 30);
        var tempMin2 = tempJour2 - (Generation(0, 5))
        var tempMin2 = Math.min(Math.max(parseInt(tempMin2), -20), 30);
        if (tempJour2 >= -20 && tempJour2 <= 0) {
            document.getElementById("imgNeige-2").classList.remove("imgHide");
        }
        else if (tempJour2 >= 1 && tempJour2 <= 10) {
            document.getElementById("imgPluie-2").classList.remove("imgHide");
        }
        else if (tempJour2 >= 11 && tempJour2 <= 20) {
            document.getElementById("imgNuage-2").classList.remove("imgHide");
        }
        else if (tempJour2 >= 21 && tempJour2 <= 30) {
            document.getElementById("imgSoleil-2").classList.remove("imgHide");
        }
    //Jour 3. 
        var tempJour3 = tempJour2 + (Generation(-15, 15))
        var tempJour3 = Math.min(Math.max(parseInt(tempJour3), -20), 30);
        var tempMax3 = tempJour3 + (Generation(0, 5))
        var tempMax3 = Math.min(Math.max(parseInt(tempMax3), -20), 30);
        var tempMin3 = tempJour3 - (Generation(0, 5))
        var tempMin3 = Math.min(Math.max(parseInt(tempMin3), -20), 30);
            if (tempJour3 >= -20 && tempJour3 <= 0) {
                document.getElementById("imgNeige-3").classList.remove("imgHide");
            }
            else if (tempJour3 >= 1 && tempJour3 <= 10) {
                document.getElementById("imgPluie-3").classList.remove("imgHide");
            }
            else if (tempJour3 >= 11 && tempJour3 <= 20) {
                document.getElementById("imgNuage-3").classList.remove("imgHide");
            }
            else if (tempJour3 >= 21 && tempJour3 <= 30) {
                document.getElementById("imgSoleil-3").classList.remove("imgHide");
            }
// Affiché les variables dans le HTML.
    document.getElementById('tempInitiale').innerHTML = tempInitiale;
    document.getElementById('tempMax1').innerHTML = tempMax1;
    document.getElementById('tempMin1').innerHTML = tempMin1;

    document.getElementById('tempJour2').innerHTML = tempJour2;
    document.getElementById('tempMax2').innerHTML = tempMax2;
    document.getElementById('tempMin2').innerHTML = tempMin2;

    document.getElementById('tempJour3').innerHTML = tempJour3;
    document.getElementById('tempMax3').innerHTML = tempMax3;
    document.getElementById('tempMin3').innerHTML = tempMin3;