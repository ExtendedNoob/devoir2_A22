// Génération de temperature

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const temp = randomIntFromInterval(-20, 30)
  console.log("La temperature est de " + temp + "°C")


// Si la température du jour est entre -20 et 0 alors l’icône neige.jpg est affichée.

    if (temp >= -20 && temp <= 0) {

        console.log("neige.jpg")
    }

// Si la température du jour est entre 1 et 10 alors l’icône pluie.jpg est affichée.

    else if (temp >= 1 && temp <= 10) {
        console.log("pluie.jpg")
    }

// Si la température du jour est entre 11 et 20 alors l’icône nuage.jpg est affichée.

    else if (temp >= 11 && temp <= 20) {
        console.log("nuage.jpg")
    }

// Si la température du jour est entre 21 et 30 alors l’icône soleil.jpg est affichée.

    else if (temp >= 21 && temp <= 30) {
        console.log("soleil.jpg")
    }

// Autre. (Impossible)

    else {
        console.log("Erreur")
    }