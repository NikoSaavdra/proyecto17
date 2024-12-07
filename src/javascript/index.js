$(document).ready(function(){
    // programar botón 1
    $('#boton1').click(function() {
        console.log('¡Botón clickeado!');
        
    });
    // Botón 2 que desaparece
    $('#boton2').click(function() {
        $(this).hide();
    });

    // programar botón 3
    $('#boton3').click(function() {
        console.log('¡Botón clickeado!');
        $('#boton4').show();
        
    });

    // Mostrar la matriz como listas ordenadas
    const matriz = [
        [7, 8, 3, 1, 6], 
        [9, 5, 6, 2, 11],
        [1, 5, 8, 10, 3]  
    ];

    function mostrarMatrizEnLista(matriz) {
        const $contenedor = $("#lista");

        matriz.forEach(fila => {
            // Crear una lista ordenada para cada fila
            const $ol = $("<ol>");
            fila.forEach(celda => {
                // Agregar cada número como un elemento de lista
                const $li = $("<li>").text(celda);
                $ol.append($li);
            });
            // Agregar la lista ordenada al contenedor
            $contenedor.append($ol);
        });
    }

    // Mostrar la matriz en listas ordenadas
    mostrarMatrizEnLista(matriz);
    
    // Saludar
    $("#boton5").click(function() {
        const textoInput = $("#textoInput").val().trim(); 

        let textoSalida;
        if (textoInput !== "") {
            // Si hay texto, solo muestra "Hola"
            textoSalida = "Hola";
        } else {
            // Si está vacío, muestra siempre "HolaHola"
            textoSalida = "HolaHola";
        }

        $("#salida").text(textoSalida);
    });
});