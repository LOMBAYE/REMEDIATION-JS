d = new Date();
document.querySelector('.today').innerText = d;
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();


const rebours = () => {
    const nouvelAn = new Date("January 1, 2023 00:00:00").getTime();
    const aujourdhui = new Date().getTime();
    const dif = nouvelAn - aujourdhui;

    const seconde = 1000;
    const minute = seconde * 60;
    const heure = minute * 60;
    const jour = heure * 24;

    const nbrjours = Math.floor(dif / jour);
    const nbrheures = Math.floor((dif % jour) / heure);
    const nbrminutes = Math.floor((dif % heure) / minute);
    const nbrsecondes = Math.floor((dif % minute) / seconde);

    document.querySelector(".jour").innerText = -nbrjours;
    document.querySelector(".heure").innerText = nbrheures;
    document.querySelector(".minute").innerText = nbrminutes;
    document.querySelector(".seconde").innerText = nbrsecondes;

};
setInterval(rebours, 1000);