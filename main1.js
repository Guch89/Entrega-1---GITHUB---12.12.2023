
let opcion;

do {
    alert ("Bienvenido");

    opcion = Number (prompt ("Para ingresar a su sesión ingrese 1 // Para recuperar contraseña ingrese 2 // Para generar un nuevo usuario ingrese 3"));

    switch (opcion) {
        case 1:
            ingreso ();
            break;

        case 2:
            recupero ();
            break;

        case 3:
            nuevoUsuario ();
            break;
                    
        default:
            alert ("Elecciòn invalida. Seleccione una opciòn correcta");
    }
} while (opcion !== 1 && opcion !==2 && opcion !==3);


function ingreso (){
    let usuario = prompt ("Ingrese su usuario");
    let contraseña = prompt ("Ingrese su contraseña");
    
    alert (`Bienvenido ${usuario}`);
}

function recupero (){
    let usuario = prompt ("Ingrese su usuario");
    let mail = prompt ("Ingrese su mail de registro");
    
    alert (`Bienvenido ${usuario}. Su nueva contraseña será enviada a ${mail} `);
}

function nuevoUsuario (){
    let usuario = prompt ("Ingrese el nombre de su nuevo usuario");
    let mail = prompt ("Ingrese un mail para asociar la cuenta");
    
    alert (`Bienvenido ${usuario}. Favor de validar la cuenta en ${mail}`);
}
