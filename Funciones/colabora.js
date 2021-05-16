/* function validarFormulario(scontacto) {
    var nombre = $("#fname").val();
    var apellido = $("#lname").val();;
    var nro_doc = $("#nro_doc").val();;
    var email = $("#email");
    var ciudad = $("#city");
    var asunto = $("#message");

    // Validación de la edad: Comprueba si el dato ha sido introducido, si es un número y si es mayor de edad.
    if(length(nombre) ){
        if(length(nombre) == "") {
            alert('Escriba nombre correcto');
            return false; 
        }else{
            if(lenght(nombre) > 3){
                alert('Debe ingresar un nombre válidp.');
                return false;                 
            }
        }
    }else{
        alert('Falta por rellenar el campo "Edad"');
        return false;            
    }            
    
    // Validación del Código Postal (en España son 5 caracteres numéricos): Comprueba si el dato ha sido introducido y si cumple con el patrón indicado.
    var patronCP=/(^([0-9]{5,5})|^)$/;
    if($("input[name*='cp']").val().length>0){
        if (!(patronCP.test(formulario.cp.value))) {
            alert('Contenido del código postal no es un código postal válido');
            return false; 
        }            
    }else{
        alert('Falta por rellenar el campo "Código Postal"');
        return false;                
    }
 
    // Validación de DNI: Comprueba si el DNI es correcto.
    if($("input[name*='dni']").val().length>0){
        
        //Recogemos el valor del DNI en una variable.
        var dni = $("input[name*='dni']").val();
            
        // En caso que ponga el DNI con guión, se suprime.
        if((dni.length==10)&&(dni.indexOf('-') != -1)){            
            dni = dni.replace('-', '');
        }
        
        // En caso que ponga el guión pero le faltan números de identificación
        if(((dni.length<10)||(dni.length>10))&&(dni.indexOf('-') != -1)){            
          alert("Debe de escribir un DNI correcto");
          return false;    
        }    
 
        //Se separan los números de la letra
        var letraDNI = dni.substring(8, 9).toUpperCase();
        var numDNI = parseInt(dni.substring(0, 8));
        
        //Se calcula la letra correspondiente al número
        var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
        var letraCorrecta = letras[numDNI % 23];
 
        if(letraDNI!= letraCorrecta){
          alert("Debe de escribir un DNI correcto");
          return false;    
        }
    }else{
          alert('Falta por rellenar el campo "DNI"');
          return false;                
    }
    
    // Validación del correo electrónico: Comprueba si el dato ha sido introducido y si es un correo electrónico 
    if($("input[name*='email']").val().length>0){
        var patronEmail=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;       
        if (!(patronEmail.test($("input[name*='email']").val()))) {
            alert('Contenido del email no es un correo electrónico válido.');
            return false; 
        }            
    }else{
        alert('Falta por rellenar el campo "Email"');
        return false;                
    }
    // Validación del Sistema Operativo: Comprueba si el dato ha sido introducido 
    if($("select[name*='so']").val().length<1){
        alert('Seleccione un Sistema Operativo.');
        return false;
    }        
    // Validación de horas de programación: Comprueba si el dato ha sido introducido 
    if($("input[name='horas']:checked").length < 1) {
        alert('Seleccione cuántas horas ha programado.');
        return false;
    }        
    // Validación del correo electrónico: Comprueba si acepta enviar el formulario 
    if(!$("input[name*='condiciones']").is(":checked")){
        alert('Debe de aceptar el envío de este formulario.');
        return false;                
    }    
} */

/* var patronEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function () {
    $("#submit").click(function () {
        var nombre = $("#fname").val();
        var apellido = $("#lname").val();
        var nro_doc = $("#nro-doc").val();
        var email = $("#email").val();
        var ciudad = $("#city").val();
        var asunto = $("#message").val();

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
}); */

/* $(document).ready(function() {
    $("#scontacto").validate({
        rules: {
            fname: {
                required: true,
                minlength: 3
            },
            lname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            city: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            fname: {
                required: "Debes completar tu Nombre",
                minlength: "Tu nombre debe tener al menos 3 caracteres"
            },
            lname: {
                required: "Debes completar tu Apellido",
                minlength: "Tu apellido debe tener al menos 3 caracteres"
            },
            message: {
                required: "El campo comentarios es obligatorio",
                minlength: "El campo comentario debe tener al menos 5 caracteres"
            },
            email: "Debes ingresar un email valido"
        }
    });
}); 


/* $(document).ready(function () {
    $("#scontacto").validate({
    });
}); */




$(document).ready(function(){
    /* Nombre */
    $("#submit").click(function(){
        var nombre = $("#fname").val().trim().toString();
        if (nombre.length == 0) {
            $("#mensaje1").fadeIn();
            return false;
        }else {
            if (nombre.length < 3) {
                $("#mensaje1.2").fadeIn();
                return false;
            }else {
                $("#mensaje1.2").fadeOut();
                return false;
            }
            $("#mensaje1").fadeOut();
            return false;
        }
    });
    /* Apellido */
    $("#submit").click(function(){
        var apellido = $("#lname").val().trim().toString();
        if (apellido.length == 0) {
            $("#mensaje2").fadeIn();
            return false;
        }else {
            if (apellido.length < 3) {
                $("#mensaje2.2").fadeIn();
                return false;
            }else {
                $("#mensaje2.2").fadeOut();
                return false;
            }
            $("#mensaje2").fadeOut();
            return false;
        }
    });
    /* Número de Documento */
    $("#submit").click(function(){
        var nro_doc = $("#nro_doc").val().trim().toString();
        if (nro_doc.length == 0) {
            $("#mensaje3").fadeIn();
            return false;
        }else {
            if (nro_doc.lenght < 11) {
                $("#mensaje3.2").fadeIn();
                return false;
            }else {
                $("#mensaje3.2").fadeOut();
                return false;
            }
            $("#mensaje3").fadeOut();
            return false;
        }
    });
    /* Email */
    $("#submit").click(function(){
        var patronEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var email = $("#email").val().trim().toString();
        if (email.length == 0) {
            $("#mensaje4").fadeIn();
            return false;
        }else {

            $("#mensaje4").fadeOut();
            return false;
        }
    });
    /* Telefono */
    $("#submit").click(function(){
        var phone = $("#phone").val().trim().toString();
        if (phone.length == 0){
            $("#mensaje5").fadeOut();
            return false;
        }
        if (phone.length == 9) {
            $("#mensaje5").fadeOut();
            return false;
        }else{
            if (phone.length > 0 || phone.length < 9) {
                $("#mensaje5").fadeIn();
            return false;
            }
        }
    });
    /* Ciudad */
    $("#submit").click(function(){
        var ciudad = $("#city").val().trim().toString();
        if (ciudad.length == 0) {
            $("#mensaje6").fadeIn();
            return false;
        }else {
            if (ciudad.lenght < 5) {
                $("#mensaje6.2").fadeIn();
                return false;
            }else {
                $("#mensaje6.2").fadeOut();
                return false;
            }
            $("#mensaje6").fadeOut();
            return false;
        }
    });
    /* Comentarios */
    $("#submit").click(function(){
        var asunto = $("#message").val().trim().toString();
        if (asunto.length == 0) {
            $("#mensaje7").fadeIn();
            return false;
        }else {
            if (asunto.lenght < 5) {
                $("#mensaje7.2").fadeIn();
                return false;
            }else {
                $("#mensaje7.2").fadeOut();
                return false;
            }
            $("#mensaje7").fadeOut();
            return false;
        }
    });
});