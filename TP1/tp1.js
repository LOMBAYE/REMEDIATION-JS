const units = document.querySelectorAll('.unit')
h3 = document.querySelector('h3')

function listening() {
    units.forEach(unit => listener(unit))
}
listening()

function listener(e) {
    e.addEventListener('click', function() {

        var bodyCSS = window.getComputedStyle(e, null);
        var bgColor = bodyCSS.getPropertyValue('background-color');
        h3.style.backgroundColor = bgColor
        h3.innerText = e.innerText
        h3.style.visibility = 'visible';

    })
}