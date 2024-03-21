function preguntaEevee (){
    cantidadTexto = prompt ("Cuántas evocluiones de Eevee existen?")
    cantidadNumero = parseInt (cantidadTexto)
    return cantidadNumero
}

while(true) {
    evoluciones = preguntaEevee () 
    if (evoluciones == 3 || evoluciones == 7){
        break 
    }
    
    else {
        alert("Tienes que poner las originales o las nuevas")
    }
    
// || this means or
}

function pintarImagenes(imageUrl, numImages) {
    // Loop to create and display the specified number of images
    for (let i = 0; i < numImages; i++) {
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Pokemon Image';
      document.body.appendChild(image);
    }
  }
  
  // Example usage: set image URL and number of images
  const imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png";
  const numImages =  evoluciones; // Change this to desired number of images
  
  pintarImagenes(imageUrl, numImages);
  