const units = document.querySelectorAll('.unit')
h3 = document.querySelector('h3')
units.forEach(elem => {
    elem.addEventListener('click', (e) => {
        const P = creator(e)
        h3.appendChild(P);
        setTimeout(() => h3.removeChild(P), 3000);
    })
});

function creator(unit) {
    P = document.createElement('p');
    P.classList.add('general')
    var unitCSS = window.getComputedStyle(unit.target, null);
    var bgColor = unitCSS.getPropertyValue('background-color');
    P.style.backgroundColor = bgColor
    P.innerText = unit.target.innerText
    return P
}