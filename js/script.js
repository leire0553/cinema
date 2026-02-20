//boton para login

$("#entrar").click(function () {

    localStorage.setItem("logueado", "si");
    window.location.href = "eventos.html";

});

if (window.location.pathname.includes("eventos.html")) {

    if (localStorage.getItem("logueado") != "si") {

       
        window.location.href = "login.html";
         alert("Debes iniciar sesión primero");

    }

}
//eventos
//añadir eventos
$(".apuntar").click(function () {
    let evento = $(this).parent().text();
    $("#misEventos").append("<li>" + evento + " <button class='borrar'>X</button></li>");
});


//borrar eventos

$(document).on("click", ".borrar", function () {

    $(this).parent().remove();

});
//reordenar
$("#misEventos").sortable();

//widgets datapicker y tootltip en formualrio de contacto
$("#fecha").datepicker();
$("#nombre").tooltip();



//identificacion usuario
$("#formLogin").submit(function (e) {
    e.preventDefault();
    window.location.href = "eventos.html";
});


//carrito
let total = parseInt(localStorage.getItem("carrito")) || 0;
$("#carrito").text(total);

$(".addCarrito").click(function () {

    let cantidad = parseInt($(this).siblings("input").val());
    total += cantidad;

    localStorage.setItem("carrito", total);

    $("#carrito").text(total);
});



$("#fecha").datepicker();

//contacto
let temas = [
    "Información General",
    "Duda sobre Eventos",
    "Problema con la Tienda",
    "Sugerencia de Película"
];

$("#asunto").autocomplete({
    source: temas
});