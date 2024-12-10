
$(function() {
    $("#boton1").on("click", function(){
        
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", function(data){
            $("#resListar").text("Ok");
        })     
    })

    $("#boton2").on("click", function(){
    
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1", function(data){
            $("#resLeer").text("Ok");
        })
    });

    $("#boton3").on("click", function(){
        $(this).addClass('row')
        var datos = {
              id: 0, // para reserver una id
              nombre: "Roberto",
              apellido: "Carlos"
        }
        $.post("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", datos, function(data){
            $("#resCrear").text("Ok");
        })     
    })

    $("#boton4").on("click", function(){
        
        var actualizar = {
            nombre: "Fernando Ariel",
            apellido: "Dominguez"
        };
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1",
            type: "PUT", 
            contentType: "application/json",
            data: JSON.stringify(actualizar),
            success: function(response) {
                $("#resActualizar").text("Ok");
                },   
            });  
    })

    $("#boton5").on("click", function() {
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/2",
            type: "DELETE", 
            success: function(response) {
                $("#resBorrar").text("Ok");
            },
        });
    });
});




