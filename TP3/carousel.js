const right = document.getElementById('right');
const container = document.getElementById('container');
const left = document.getElementById('left');


function hide() {
    if (pos == -nbr + 1)
        right.style.visibility = "hidden";
    else
        right.style.visibility = "visible";
    if (pos == 0)
        left.style.visibility = 'hidden';
    else
        left.style.visibility = 'visible';
}

// Listeners
document.body.onload = function() {
    nbr = 9
    pos = 0
    container.style.width = (800 * nbr) + "px";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement('div');
        div.className = 'tof';
        div.style.backgroundImage = "url('im" + i + ".jpg')"
        container.appendChild(div);
        // div.addEventListener('mouseover', function() { alert('okiii') })
    }
    hide();
}
right.onclick = function() {
    if (pos > -nbr + 1)
        pos--;
    container.style.transform = "translate(" + pos * 800 + "px)";
    container.style.transition = "all 1s ease";
    hide();
}
left.onclick = function() {
    if (pos < 0)
        pos++;
    container.style.transform = "translate(" + pos * 800 + "px)";
    container.style.transition = "all 1s ease";
    hide();
}