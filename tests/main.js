document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        alert('Arriba')
    }
    else if (e.keyCode == '40') {
        alert('Abajo')
    }
    else if (e.keyCode == '37') {
        alert('Izquierda')
    }
    else if (e.keyCode == '39') {
        alert('Derecha')
    }

}