// Temperature functions.
    function Generation(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
// Génération de temperature.
    var temp = Generation(-20, 30)

        // Si la température du jour est entre -20 et 0 alors l’icône neige.jpg est affichée.
            if (temp >= -20 && temp <= 0) {
                document.getElementById("imgNeige").classList.remove("imgHide");
            }
        // Si la température du jour est entre 1 et 10 alors l’icône pluie.jpg est affichée.
            else if (temp >= 1 && temp <= 10) {
                document.getElementById("imgPluie").classList.remove("imgHide");
            }
        // Si la température du jour est entre 11 et 20 alors l’icône nuage.jpg est affichée.
            else if (temp >= 11 && temp <= 20) {
                document.getElementById("imgNuage").classList.remove("imgHide");
            }
        // Si la température du jour est entre 21 et 30 alors l’icône soleil.jpg est affichée.
            else if (temp >= 21 && temp <= 30) {
                document.getElementById("imgSoleil").classList.remove("imgHide");
            }
// Génération de temperature max et min de la journée. (entre 0 et 5 ±)
    //Temperature maximal.
    var tempMax = temp + (Generation(0, 5))
    var tempJour2 = Math.min(Math.max(parseInt(tempMax), -20), 30);
    //Temperature minimal.
    var tempMin = temp - (Generation(0, 5))
    var tempJour2 = Math.min(Math.max(parseInt(tempMin), -20), 30);
// Affiché les variables dans le HTML.
    document.getElementById('tempOutput').innerHTML = temp;
    document.getElementById('tempMaxOutput').innerHTML = tempMax;
    document.getElementById('tempMinOutput').innerHTML = tempMin;