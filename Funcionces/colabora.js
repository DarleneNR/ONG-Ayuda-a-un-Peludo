var patronEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function () {
    $("#submit").click(function () {
        var nombre = $("#fname").val();
        var apellido = $("#lname").val();
        var nro_doc = $("#nro-doc").val();
        var email = $("#email").val();
        var ciudad = $("#city").val();
        var asunto = $("#message").val();
        /* Nombre */
        if (nombre == "") {
            $("#mensaje1").fadeIn();
            return false;
        } else {
            if (nombre.lenght < 3) {
                $("#mensaje1.2").fadeIn();
                return false;
            } else {
                $("#mensaje1.2").fadeOut();
                return false;
            }
            $("#mensaje1").fadeOut();
            return false;
        }
    });
    $("#submit").click(function () {
        var nombre = $("#fname").val();
        var apellido = $("#lname").val();
        var nro_doc = $("#nro-doc").val();
        var email = $("#email").val();
        var ciudad = $("#city").val();
        var asunto = $("#message").val();
        /* Apellido */
        if (apellido == "") {
            $("#mensaje2").fadeIn();
            return false;
        } else {
            if (apellido.lenght < 3) {
                $("#mensaje2.2").fadeIn();
                return false;
            } else {
                $("#mensaje2.2").fadeOut();
                return false;
            }
            $("#mensaje2").fadeOut();
            return false;
        }
    });
});