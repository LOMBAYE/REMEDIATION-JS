const units = document.querySelectorAll('.unit')
h3 = document.querySelector('h3')
units.forEach(elem => {
    elem.addEventListener('click', (e) => {
        const P = listener(e)
        h3.appendChild(P);
        setTimeout(() => h3.removeChild(P), 3000);
    })
});

function listener(e) {
    P = document.createElement('p');
    P.classList.add('general')
    var eCSS = window.getComputedStyle(e.target, null);
    var bgColor = eCSS.getPropertyValue('background-color');
    P.style.backgroundColor = bgColor
    P.innerText = e.target.innerText
    return P
}