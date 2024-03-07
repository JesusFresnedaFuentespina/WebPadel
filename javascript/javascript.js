function mostrarImagenSeleccionada() {
    // Obtener el elemento select y la imagen
    var selector = document.getElementById("selector_imagen");
    var imagen = document.getElementById("imagen_seleccionada");

    // Obtener la URL de la imagen seleccionada
    var imagenSeleccionada = selector.options[selector.selectedIndex].value;

    // Establecer la fuente de la imagen
    imagen.src = imagenSeleccionada;
}