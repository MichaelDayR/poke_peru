// Función para saludar al usuario
function saludar() {
    // Obtener el valor ingresado en el campo de nombre
    var nombre = document.getElementById("nombreInput").value;

    // Verificar si se ingresó un nombre
    if (nombre.trim() !== "") {
        alert ("¡Hola, " + nombre + "!");
    } else {
        alert ("Por favor, ingresa tu nombre.");
    }
}
