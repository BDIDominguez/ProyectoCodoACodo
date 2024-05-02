// Seleccionar las Filas de una tabla

document.addEventListener("DOMContentLoaded", function() {
    const filas = document.querySelectorAll(".tabla-fila");

    filas.forEach(fila => {
        fila.addEventListener("click", () => {
            // Eliminar la selección de todas las filas
            filas.forEach(f => f.classList.remove("seleccionada"));
            
            // Añadir clase 'seleccionada' a la fila clicada
            fila.classList.add("seleccionada");
        });
    });


    crearBotonHeader();

});


// Opcion Cancelar en los Botones
function cancelar() {
    // Implementa la lógica para cancelar aquí
    console.log('Formulario cancelado');
}

// Para el funcionamiento memu-hamburguesa
function toggleMenu() {
    var menu = document.querySelector('.menu-navegacion');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Función para mostrar u ocultar el aside
function toggleAside() {
    var aside = document.querySelector('.contenedor-aside');
    aside.classList.toggle('aside-visible'); // Alternar la clase para mostrar/ocultar el aside
}

// Funcion para seccion flotante

// Obtener el elemento que queremos hacer flotante
var elemento = document.getElementById('elemento');

// Variables para almacenar la posición inicial del mouse y la posición inicial del elemento
var posXInicio, posYInicio, posXElemento, posYElemento;

// Función para iniciar el arrastre del elemento
function iniciarArrastre(e) {
  // Obtener la posición inicial del mouse
  posXInicio = e.clientX;
  posYInicio = e.clientY;
  
  // Obtener la posición inicial del elemento
  var estilos = window.getComputedStyle(elemento);
  posXElemento = parseInt(estilos.getPropertyValue('left'));
  posYElemento = parseInt(estilos.getPropertyValue('top'));
  
  // Agregar el evento de movimiento del mouse
  document.addEventListener('mousemove', moverElemento);
  
  // Agregar el evento de finalización del arrastre
  document.addEventListener('mouseup', finalizarArrastre);
}

// Función para mover el elemento según la posición del mouse
function moverElemento(e) {
  // Calcular la nueva posición del elemento
  var nuevaPosX = posXElemento + e.clientX - posXInicio;
  var nuevaPosY = posYElemento + e.clientY - posYInicio;
  
  // Asignar la nueva posición al elemento
  elemento.style.left = nuevaPosX + 'px';
  elemento.style.top = nuevaPosY + 'px';
}


// OPCION DE OCULTAR LA SECCION
function togglePanel(panel) {
    var btnFlotante = document.querySelector('.boton-flotante');
    var btnFlotanteHeader = document.querySelector('.boton-generado-header');
    var contenedorNav = document.querySelector('.contenedor-navegador');
    var alturaContenedorNav = contenedorNav.offsetHeight;
    var element = document.querySelector('.' + panel);
    if (element.style.display === 'none') {
        element.style.display = 'block';
        btnFlotante.style.top = '15px'
        var alturaContenedorNav = contenedorNav.offsetHeight;
        btnFlotanteHeader.style.top = parseInt(alturaContenedorNav) + 'px';
    } else {
        element.style.display = 'none';
        btnFlotante.style.top = '0px'
        btnFlotanteHeader.style.top = '0px';
    }
    
}


// CREAREMOS NUESTROS PROPIOS BOTONES PARA OCULTAR PANELES
function crearBotonHeader(){
    var contenedorNav = document.querySelector('.contenedor-navegador');
    var alturaContenedorNav = contenedorNav.offsetHeight;
    console.log(alturaContenedorNav)
    var boton = document.createElement("button");
    boton.textContent = "VVVV";
    boton.className = "boton-generado-header";
    boton.style.position = "fixed";
    boton.style.top = parseInt(alturaContenedorNav) + 'px';
    boton.style.left = '50%';

    boton.onclick = function(){
        togglePanel('contenedor-header');
    }

    document.body.appendChild(boton);

}