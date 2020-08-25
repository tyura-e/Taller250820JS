var nombreVocalista;
var inicio;
var qIntegrantes;
var primerAlbum;

var mensajeNombre = document.getElementById('nombreVocalista')
var mensajeInicio = document.getElementById('inicio')
var mensajeIntegrantes = document.getElementById('qIntegrantes')
var mensajeAlbum = document.getElementById('primerAlbum')

function artista() {
    nombreVocalista = prompt("Escribe el nombre del vocalista")
    mensajeNombre.innerText = nombreVocalista

    inicio = prompt("¿Cuando se creó la banda")
    mensajeInicio.innerText = inicio

    qIntegrantes = prompt("¿Cuantos integrantes conforman la banda")
    mensajeIntegrantes.innerText = qIntegrantes

    primerAlbum = prompt("¿Cuál es el nombre del albúm que cumple 20 años en octubre")
    mensajeAlbum.innerText = primerAlbum
}