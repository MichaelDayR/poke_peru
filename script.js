// Function to change the body background color based on user's choice
function chooseColor(color) {
    // Convert the color input to lowercase for case-insensitive comparison
    color = color.toLowerCase();

    // Check the user's input and change the body background color accordingly
    switch (color) {
        case "yellow":
            document.body.style.backgroundColor = "yellow";
            break;
        case "red":
            document.body.style.backgroundColor = "red";
            break;
        case "blue":
            document.body.style.backgroundColor = "blue";
            break;
        default:
            alert("Invalid color choice. Please choose Yellow, Red, or Blue.");
    }
}