$(document).ready(function() {
    
    solicitudes = [
        solicitud = {
            "id": 1,
            "nombre": "Juan",
            "apellido": "Secreto"
        },
        solicitud = {
            "id": 1,
            "nombre": "Alvaro",
            "apellido": "Rueda"
        },
        solicitud = {
            "id": 1,
            "nombre": "Alfredo",
            "apellido": "Galvan"
        }];
    

    for(i=0; i < solicitudes.length; i++){
        $("#maestro").append(
            $("<li>").text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
        );
    }

    
    $("#id").val(solicitud.id); // Fijaria el valor
    $('#nombre').val(solicitud.nombre);
    $('#apellido').val(solicitud.apellido);

    $("li").on("click", function() {
        if($("#detalle").is(":visible")){
            $("#detalle").hide(); 
        } else{ 
            $("#detalle").hide();
        }
        
    })

});


/*document.getElementById('boton').onclick = function() {
    alert('Me ha presionado... me voy de vacaciones a relajarme');
}
document.getElementById('boton').onclick = function() {
    this.innerText = 'Ya me ha comido <br> En otra linea';
}

console.log('Hola mundo... tercera vez');*/
