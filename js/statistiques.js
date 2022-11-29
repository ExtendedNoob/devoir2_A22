// Function
    function Generation(min, max) { // min and max inclu.
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
// Temperature Hivers
// Si hiver (décembre, janvier ou février) alors la température du mois est entre -10 et 5.
    var tempDecembre = Generation(-10, 5)
    var tempJanvier = Generation(-10, 5)
    var tempFevrier = Generation(-10, 5)
// Temperature Automne
// Si automne (septembre, octobre ou novembre) alors la température du mois est entre 5 et 20.
    var tempSeptembre = Generation(5, 20)
    var tempOctobre = Generation(5, 20)
    var tempNovembre = Generation(5, 20)
// Temperature Printemps
// Si printemps (mars, avril ou mai) alors la température du mois est entre 0 et 20.
    var tempMars = Generation(0, 20)
    var tempAvril = Generation(0, 20)
    var tempMai = Generation(0, 20)
// Temperature Été
// Si été (juin, juillet ou août) alors la température du mois est entre 15 et 30.
    var tempJuin = Generation(15, 30)
    var tempJuillet = Generation(15, 30)
    var tempAout = Generation(15, 30)
// Temperature moyenne
    var tempMoyenneAnnuel = Math.round((tempDecembre + tempJanvier + tempFevrier + tempSeptembre + 
        tempOctobre + tempNovembre + tempMars + tempAvril + tempMai + tempJuin + tempJuillet + tempAout) / 12);
    document.getElementById('tempMoyenneAnnuel').innerHTML = tempMoyenneAnnuel;
// Temperature minimum / maximum
    var tempMinAnnuel = Math.min(tempDecembre, tempJanvier, tempFevrier, tempSeptembre,
        tempOctobre, tempNovembre, tempMars, tempAvril, tempMai, tempJuin, tempJuillet, tempAout)
        document.getElementById('tempMinAnnuel').innerHTML = tempMinAnnuel;
    var tempMaxAnnuel = Math.max(tempDecembre, tempJanvier, tempFevrier, tempSeptembre,
        tempOctobre, tempNovembre, tempMars, tempAvril, tempMai, tempJuin, tempJuillet, tempAout)
        document.getElementById('tempMaxAnnuel').innerHTML = tempMaxAnnuel;
// Affiché les variables dans le HTML.
    document.getElementById('tempDecembre').innerHTML = tempDecembre;
    document.getElementById('tempJanvier').innerHTML = tempJanvier;
    document.getElementById('tempFevrier').innerHTML = tempFevrier;

    document.getElementById('tempSeptembre').innerHTML = tempSeptembre;
    document.getElementById('tempOctobre').innerHTML = tempOctobre;
    document.getElementById('tempNovembre').innerHTML = tempNovembre;

    document.getElementById('tempMars').innerHTML = tempMars;
    document.getElementById('tempAvril').innerHTML = tempAvril;
    document.getElementById('tempMai').innerHTML = tempMai;

    document.getElementById('tempJuin').innerHTML = tempJuin;
    document.getElementById('tempJuillet').innerHTML = tempJuillet;
    document.getElementById('tempAout').innerHTML = tempAout;