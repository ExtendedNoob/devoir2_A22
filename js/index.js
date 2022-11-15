// Temperature functions.
    function GenerationTemp(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function GenerationTempMax(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function GenerationTempMin(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
// Génération de temperature.
    var temp = GenerationTemp(-20, 30)

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
    const tempMax = temp + (GenerationTempMax(0, 5))
    //Temperature minimal.
    const tempMin = temp - (GenerationTempMin(0, 5))
// Affiché les variables dans le HTML.
    document.getElementById('tempOutput').innerHTML = temp;
    document.getElementById('tempMaxOutput').innerHTML = tempMax;
    document.getElementById('tempMinOutput').innerHTML = tempMin;