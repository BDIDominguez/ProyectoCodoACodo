// BOTON OCULTADOR HEADER Y SU ACCION
function crearBotonHeader(){
    let objetivo = document.querySelector('.pagina-header');
    let altura = objetivo.offsetHeight;
    let boton = document.createElement("button");
    boton.textContent = "VVVV";
    boton.style.transform = "rotate(180deg)";
    boton.className = "boton-generado-header";
    boton.style.position = "fixed";
    boton.style.top = parseInt(altura) + 'px';
    boton.style.left = '50%';
    boton.onclick = function(){
        ocultarHeader();
    }
    document.body.appendChild(boton);
}
function ocultarHeader() {
    let btnFlotanteHeader = document.querySelector('.boton-generado-header');
    let objetivo = document.querySelector('.pagina-header');
    let alturaContenedorNav = objetivo.offsetHeight;
    if (objetivo.style.display === 'none') {
        objetivo.style.display = 'block';
        let alturaContenedorNav = objetivo.offsetHeight;
        btnFlotanteHeader.style.top = parseInt(alturaContenedorNav) + 'px';
        btnFlotanteHeader.style.transform = "rotate(180deg)";
    } else {
        objetivo.style.display = 'none';
        btnFlotanteHeader.style.top = '0px';
        btnFlotanteHeader.style.transform = "rotate(0deg)";
    }
    ocuparTodaPagina();
    recargarEstilos();
}

// BOTON OCULTADOR LATERAL Y SU ACCION
function crearBotonLateral(){
    let objetivo = document.querySelector('.pagina-cuerpo-botones');
    let altura = objetivo.offsetWidth;
    let boton = document.createElement("button");
    boton.textContent = "VVVV";
    boton.style.transform = "rotate(90deg)";
    boton.className = "boton-generado-lateral";
    boton.style.position = "fixed";
    boton.style.top =  '50%';
    boton.style.left =parseInt(altura)-16 + 'px';
    boton.onclick = function(){
        ocultarLateral();
    }
    document.body.appendChild(boton);
}
function ocultarLateral() {
    let btnFlotanteHeader = document.querySelector('.boton-generado-lateral');
    let objetivo = document.querySelector('.pagina-cuerpo-botones');
    let alturaContenedorNav = objetivo.offsetWidth;
    if (objetivo.style.display === 'none') {
        objetivo.style.display = 'block';
        let alturaContenedorNav = objetivo.offsetWidth;
        btnFlotanteHeader.style.left = parseInt(alturaContenedorNav) -16 + 'px';
        btnFlotanteHeader.style.transform = "rotate(90deg)";
    } else {
        objetivo.style.display = 'none';
        btnFlotanteHeader.style.left = '-20px';
        btnFlotanteHeader.style.transform = "rotate(270deg)";
    }
    recargarEstilos();
}

// PARA MOSTRAR LOS DATOS QUE SE CARGAN EN LA PAGINA
document.addEventListener("DOMContentLoaded", function() {
    ocuparTodaPagina();
    crearBotonHeader();
    crearBotonLateral();
});

// FUNCION PARA ACOMODAR LA POSICION DEL BOTON CUANDO SE REDIMENDIONE LA VENTA
function ajustarBotonesGenerados(){
    let btnLateral = document.querySelector('.boton-generado-lateral');
    let btnHeader = document.querySelector('.boton-generado-header');
    let header = document.querySelector('.pagina-header');
    let lateral = document.querySelector('.pagina-cuerpo-botones');

    let realHeader = header.getBoundingClientRect();
    let realLateral = lateral.getBoundingClientRect();

    if (header.style.display === 'none'){
        btnHeader.style.top = '0px';
    }else{
        //let altura = header.style.offsetHeight;
        //btnHeader.style.top = parseInt(altura) + 'px';
        btnHeader.style.top = (realHeader.top + realHeader.height) + 'px';
    }
    if (lateral.style.display === 'none'){
        btnLateral.style.left = '0px';
    }else{
        //let distancia = lateral.style.offsetWidth;
        //btnLateral.style.left = parseInt(distancia) + 'px';
        btnLateral.style.left = (realLateral.left + realLateral.width) - 15 + 'px';
    }
}

// CAPTURAR EL EVENTO DE REDIMENCION DE LA VENTANA Y EJECUTANDO LA FUNCION
window.addEventListener('resize',ajustarBotonesGenerados);

// CAMBIAR LAS PROPIEDADES PAGINA-CONTENEDOR PARA QUE SE USE TODA LA PAGINA SEGUN ESTE EL HEADER
function ocuparTodaPagina(){
    let objetivo = document.querySelector('.pagina-contenedor');
    let navegador = document.querySelector('.pagina-header');
    if (navegador.style.display === 'none'){
        objetivo.style.height = '100vh';
    }else{
        // let espacio = navegador.style.offsetHeight;
        let espacio = navegador.getBoundingClientRect().height;
        //console.log(espacio);
        objetivo.style.height = 'calc(100vh - ' + espacio + 'px )';
    }
}

// RECARGA EL CSS DE LA PAGINA
function recargarEstilos() {
    let linksCSS = document.querySelectorAll('link[rel="stylesheet"]');
    linksCSS.forEach(function(link) {
        let href = link.href;
        link.href = '';
        link.href = href;
    });
}