// acciones sobre el texto 1 del html
let miTexto = document.getElementById("text1") 

// acciones sobre el texto 1 del html
let miBoton = document.getElementById("boton1") 

// Obtener el cuadro de texto
let miCuadroDeTexto = document.getElementById("miCuadroTexto");

// Crear un manejador de evento para el botón función(evento, función anónima)
miBoton.addEventListener("click", function (){

    // Obtener el valor del cuadro de texto
    let palabra = miCuadroDeTexto.value;
    // Si el cuadro de texto está vacío
    if (palabra === "") {
        miTexto.textContent = "¡Por favor, ingresa una palabra!";
    } else {
        // Si no está vacío, contar las letras de la palabra
        let cantidadDeLetras = palabra.length;
        miTexto.textContent = "La palabra tiene " + cantidadDeLetras + " letras.";
    }

    // Recorrer cada letra de la palabra
    for (let letra of palabra.toUpperCase()) {
        // Si la letra ya está en el objeto, incrementamos su contador
        if (frecuenciaLetras[letra]) {
            frecuenciaLetras[letra]++;
        } else {
            // Si la letra no está, la agregamos con un contador inicial de 1
            frecuenciaLetras[letra] = 1;
        }
    }

    // Crear una cadena para mostrar la frecuencia de las letras
    let resultadoFrecuencia = "Frecuencia de cada letra: \n";
    for (let letra in frecuenciaLetras) {
        resultadoFrecuencia += `${letra} ${frecuenciaLetras[letra]}\n`;
    }

    // Mostrar el resultado de las frecuencias
    miTexto.textContent += "\n" + resultadoFrecuencia;
}
    // lo que va a pasar al captar el clic
    miBoton.style.backgroundColor="purple";
    
})