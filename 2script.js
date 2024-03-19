// Función para saludar al usuario
function saludar() {
    // Obtener el valor ingresado en el campo de nombre
    var nombre = document.getElementById("nombreInput").value;

    // Verificar si se ingresó un nombre
    if (nombre.trim() !== "") {
        // Obtener la hora actual del ordenador del usuario
        var hora = new Date().getHours();
        
        // Determinar si es AM o PM
        var saludo;
        if (hora < 12) {
            saludo = "Buenos días";
        } else if (hora >= 12 && hora < 18) {
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }

        // Mostrar el saludo
        alert(saludo + ", " + nombre + "!");
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}