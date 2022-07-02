colors = '';
selectDiv = '';

function select(id) {

    selectDiv= id;

}

document.addEventListener('keydown', function (event) {


    div = document.getElementById(selectDiv)

    if (event.key === 'a') {
        colors = 'red'

    } else if (event.key === 's') {
        colors = 'purple'

    } else if (event.key === 'd') {
        colors = 'yellow'

    } else {
        alert('Debes pulsar a s o d')
        colors = div.style.backgroundColor
    }

    div.style.backgroundColor = colors;
}

)
