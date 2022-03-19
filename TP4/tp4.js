const jour = document.getElementById('jours')
const heure = document.getElementById('heures')
const minute = document.getElementById('minutes')
const seconde = document.getElementById('secondes')
    // d = new Date();
console.log(Date());
jour.addEventListener('click', function() {
    d = new Date();
    h = 24 - d.getHours();
    m = 60 - d.getMinutes();
    s = 60 - d.getSeconds();
    heure.innerText = h;
    minute.innerText = m;
    seconde.innerText = s;

    m = 60 - d.getMinutes();
    s = 60 - d.getSeconds();
    console.log(d);
    console.log(h);
    console.log(m);
    console.log(s);

})
console.log

function f() {
    d = new Date();
    console.log(d);

}