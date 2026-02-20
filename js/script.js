$(document).ready(function(){

$("#btnLogin").click(function () {

    if ($("#user").val() == "admin" && $("#pass").val() == "1234") {
        $(".zonaUsuario").show();
        $(".login").hide();
    }

});

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

//añadir eventos

$(".apuntar").click(function () {

    let nombreEvento = $(this).siblings("p").text();

    $("#misEventos").append(
        "<li>" + nombreEvento +
        " <button class='borrar'>X</button></li>"
    );

});
//borrar eventos

$(document).on("click", ".borrar", function () {

    $(this).parent().remove();

});
//reordenar
$("#misEventos").sortable();

//widgets
$("#fecha").datepicker();
$("#nombre").tooltip({ content: "Introduce tu nombre" });


//eventos
$(".apuntarse").click(function () {
    let evento = $(this).parent().text();
    $("#misEventos").append("<li>" + evento + " <button class='borrar'>X</button></li>");
});


//identificacion usuario
$("#formLogin").submit(function (e) {
    e.preventDefault();
    window.location.href = "eventos.html";
});


//carrito
let total = localStorage.getItem("carrito") || 0;

$(".addCarrito").click(function () {
    let cantidad = parseInt($(this).siblings("input").val());
    total += cantidad;
    $("#carrito").text(total);
});


$(document).tooltip();
$("#fecha").datepicker();

});