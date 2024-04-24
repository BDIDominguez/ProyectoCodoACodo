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
});


// Opcion Cancelar en los Botones
function cancelar() {
    // Implementa la lógica para cancelar aquí
    console.log('Formulario cancelado');
}

