let edad = prompt('Brindame tu edad:');
document.write('su edad es ' + edad + '<br>');

// Verificar si la edad es menor de 18
if (parseInt(edad) < 18) {
    // Si es menor de 18, mostrar un mensaje de negación de acceso
    document.write('Lo siento, acceso denegado. Debes ser mayor de 18 años para ingresar.');
} else {
    // Si es mayor o igual a 18, permitir el acceso
    document.write('¡Bienvenido! Puedes acceder.');
}
if (parseInt(edad) < 18) {
    document.body.style.backgroundColor = "red";
}
let userConfirm = confirm("estás seguro?");
console.log(userConfirm);

if (userConfirm) {
    console.log("ACEPTO!!!");
} else {
    console.log("CANCELO!!!");
}
