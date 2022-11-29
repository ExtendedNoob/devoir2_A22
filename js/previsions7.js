    // Facteur logique: La temprerature ne peut pas passé de -20 à 30 °C dans un délait de 1 jour.
    //                  Une différence de + ou - 15 °C sera appliqué entre les jours.
    //                  La temperature ne dépassera pas -20 ou 30°C.
    //                  Le Min et Max ne dépassera pas -20 ou 30°C.
// Function
    function Generation(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
//Temperature des jours.
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
    // Jour 4.
        var tempJour4 = tempJour3 + (Generation(-15, 15))
        var tempJour4 = Math.min(Math.max(parseInt(tempJour4), -20), 30);
        var tempMax4 = tempJour4 + (Generation(0, 5))
        var tempMax4 = Math.min(Math.max(parseInt(tempMax4), -20), 30);
        var tempMin4 = tempJour4 - (Generation(0, 5))
        var tempMin4 = Math.min(Math.max(parseInt(tempMin4), -20), 30);
            if (tempJour4 >= -20 && tempJour4 <= 0) {
                document.getElementById("imgNeige-4").classList.remove("imgHide");
            }
            else if (tempJour4 >= 1 && tempJour4 <= 10) {
                document.getElementById("imgPluie-4").classList.remove("imgHide");
            }
            else if (tempJour4 >= 11 && tempJour4 <= 20) {
                document.getElementById("imgNuage-4").classList.remove("imgHide");
            }
            else if (tempJour4 >= 21 && tempJour4 <= 30) {
                document.getElementById("imgSoleil-4").classList.remove("imgHide");
            }
    //Jour 5. 
        var tempJour5 = tempJour4 + (Generation(-15, 15))
        var tempJour5 = Math.min(Math.max(parseInt(tempJour5), -20), 30);
        var tempMax5 = tempJour5 + (Generation(0, 5))
        var tempMax5 = Math.min(Math.max(parseInt(tempMax5), -20), 30);
        var tempMin5 = tempJour5 - (Generation(0, 5))
        var tempMin5 = Math.min(Math.max(parseInt(tempMin5), -20), 30);
            if (tempJour5 >= -20 && tempJour5 <= 0) {
                document.getElementById("imgNeige-5").classList.remove("imgHide");
            }
            else if (tempJour5 >= 1 && tempJour5 <= 10) {
                document.getElementById("imgPluie-5").classList.remove("imgHide");
            }
            else if (tempJour5 >= 11 && tempJour5 <= 20) {
                document.getElementById("imgNuage-5").classList.remove("imgHide");
            }
            else if (tempJour5 >= 21 && tempJour5 <= 30) {
                document.getElementById("imgSoleil-5").classList.remove("imgHide");
            }
    // Jour 6.
        var tempJour6 = tempJour5 + (Generation(-15, 15))
        var tempJour6 = Math.min(Math.max(parseInt(tempJour6), -20), 30);
        var tempMax6 = tempJour6 + (Generation(0, 5))
        var tempMax6 = Math.min(Math.max(parseInt(tempMax6), -20), 30);
        var tempMin6 = tempJour6 - (Generation(0, 5))
        var tempMin6 = Math.min(Math.max(parseInt(tempMin6), -20), 30);
            if (tempJour6 >= -20 && tempJour6 <= 0) {
                document.getElementById("imgNeige-6").classList.remove("imgHide");
            }
            else if (tempJour6 >= 1 && tempJour6 <= 10) {
                document.getElementById("imgPluie-6").classList.remove("imgHide");
            }
            else if (tempJour6 >= 11 && tempJour6 <= 20) {
                document.getElementById("imgNuage-6").classList.remove("imgHide");
            }
            else if (tempJour6 >= 21 && tempJour6 <= 30) {
                document.getElementById("imgSoleil-6").classList.remove("imgHide");
            }
    //Jour 7. 
        var tempJour7 = tempJour6 + (Generation(-15, 15))
        var tempJour7 = Math.min(Math.max(parseInt(tempJour7), -20), 30);
        var tempMax7 = tempJour7 + (Generation(0, 5))
        var tempMax7 = Math.min(Math.max(parseInt(tempMax7), -20), 30);
        var tempMin7 = tempJour7 - (Generation(0, 5))
        var tempMin7 = Math.min(Math.max(parseInt(tempMin7), -20), 30);
            if (tempJour7 >= -20 && tempJour7 <= 0) {
                document.getElementById("imgNeige-7").classList.remove("imgHide");
            }
            else if (tempJour7 >= 1 && tempJour7 <= 10) {
                document.getElementById("imgPluie-7").classList.remove("imgHide");
            }
            else if (tempJour7 >= 11 && tempJour7 <= 20) {
                document.getElementById("imgNuage-7").classList.remove("imgHide");
            }
            else if (tempJour7 >= 21 && tempJour7 <= 30) {
                document.getElementById("imgSoleil-7").classList.remove("imgHide");
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

    document.getElementById('tempJour4').innerHTML = tempJour4;
    document.getElementById('tempMax4').innerHTML = tempMax4;
    document.getElementById('tempMin4').innerHTML = tempMin4;

    document.getElementById('tempJour5').innerHTML = tempJour5;
    document.getElementById('tempMax5').innerHTML = tempMax5;
    document.getElementById('tempMin5').innerHTML = tempMin5;

    document.getElementById('tempJour6').innerHTML = tempJour6;
    document.getElementById('tempMax6').innerHTML = tempMax6;
    document.getElementById('tempMin6').innerHTML = tempMin6;

    document.getElementById('tempJour7').innerHTML = tempJour7;
    document.getElementById('tempMax7').innerHTML = tempMax7;
    document.getElementById('tempMin7').innerHTML = tempMin7;