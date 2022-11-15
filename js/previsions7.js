    // Facteur logique: La temprerature ne peut pas passé de -20 à 30 °C dans un délait de 1 jour.
    //                  Une différence de + ou - 10 °C sera appliqué entre les jours.
    //                  La temperature ne dépassera pas -20 ou 30°C.
// Function
    function Generation(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
//Génération de temperature initiale. (Jour1)
    var tempInitiale = Generation(-20, 30)
// Génération temperature des jours suivants.
    // Jour 2.
        var tempJour2 = tempInitiale + (Generation(-10, 10))
        var tempJour2 = Math.min(Math.max(parseInt(tempJour2), -20), 30);
    //Jour 3. 
        var tempJour3 = tempJour2 + (Generation(-10, 10))
        var tempJour3 = Math.min(Math.max(parseInt(tempJour3), -20), 30);
    // Jour 4.
        var tempJour4 = tempJour3 + (Generation(-10, 10))
        var tempJour4 = Math.min(Math.max(parseInt(tempJour4), -20), 30);
    //Jour 5. 
        var tempJour5 = tempJour4 + (Generation(-10, 10))
        var tempJour5 = Math.min(Math.max(parseInt(tempJour5), -20), 30);
    // Jour 6.
        var tempJour6 = tempJour5 + (Generation(-10, 10))
        var tempJour6 = Math.min(Math.max(parseInt(tempJour6), -20), 30);
    //Jour 7. 
        var tempJour7 = tempJour6 + (Generation(-10, 10))
        var tempJour7 = Math.min(Math.max(parseInt(tempJour7), -20), 30);
// Affiché les variables dans le HTML.
    document.getElementById('tempInitiale').innerHTML = tempInitiale;
    document.getElementById('tempJour2').innerHTML = tempJour2;
    document.getElementById('tempJour3').innerHTML = tempJour3;
    document.getElementById('tempJour4').innerHTML = tempJour4;
    document.getElementById('tempJour5').innerHTML = tempJour5;
    document.getElementById('tempJour6').innerHTML = tempJour6;
    document.getElementById('tempJour7').innerHTML = tempJour7;