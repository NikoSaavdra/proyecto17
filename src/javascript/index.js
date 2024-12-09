
$(function() {
    $("#boton1").on("click", function(){
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", function(data){
            $("#resListar").text("Ok");
        })     
    })

    $("#boton2").on("click", function(){
        $.post("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", function(data){
            $("#resListar").text("Ok");
        })     
    })
});
