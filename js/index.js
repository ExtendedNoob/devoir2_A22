// Génération de temperature

    function randomIntFromInterval(min, max) { // min and max inclu
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const temp = randomIntFromInterval(-20, 30)
    console.log("La temperature est de " + temp + "°C")


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

        // Autre. (Impossible)

            else {
                console.log("Erreur")
            }

// Génération de temperature max et min de la journée (entre 0 et 5 ±)


    //Temperature maximal

    function temperatureMinimalJournée(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const tempMax = temp + (temperatureMinimalJournée(0, 5))
    console.log("La tempreature max est " + tempMax + "°C")

    //Temperature minimal

    function temperatureMinimalJournée(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const tempMin = temp - (temperatureMinimalJournée(0, 5))
    console.log("La temperature min est " + tempMin + "°C")

// Affiché les variables dans le HTML

document.getElementById('tempOutput').innerHTML = temp;
document.getElementById('tempMaxOutput').innerHTML = tempMax;
document.getElementById('tempMinOutput').innerHTML = tempMin;