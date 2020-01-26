const cores = [
    "#DAA520", //0 - Tomato
    "#A020F0", //1 - Indigo
    "#7B68EE", //2 - MediumBlue
]

function changeColor() {
    var habilidades = document.getElementsByClassName('selo')
    for(let i = 0; i < habilidades.length; i++) {
        let decimal = Math.random() * 3 + 0
        habilidades[i].style.backgroundColor = cores[Math.floor(decimal)]
    }
}