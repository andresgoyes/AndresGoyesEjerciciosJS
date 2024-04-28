alert("Ejercicio 1");

var num1_e1 = parseInt(prompt("Ingresa el primer numero"));
var num2_e1 = parseInt(prompt("Ingresa el segundo numero"));

if (num1_e1 > num2_e1) {
    console.log("El primer numero es mayor que el segundo");
} else {
    console.log("El segundo numero es mayor que el primero");
}

alert("Ejercicio 2");

var num1_e2 = parseInt(prompt("Ingresa el primer numero"));
var num2_e2 = parseInt(prompt("Ingresa el segundo numero"));

if (num1_e2 == num2_e2) {
    console.log("Los numeros son iguales");
} else {
    console.log("Los numeros son diferentes");
}

alert("Ejercicio 3");

var num1_e3 = parseInt(prompt("Ingresa el primer numero"));
var num2_e3 = parseInt(prompt("Ingresa el segundo numero"));

if (num1_e3 > num2_e3) {
    console.log("El numero " + num1_e3 + " es mayor");
} else if (num2_e3 > num1_e3) {
    console.log("El numero " + num2_e3 + " es mayor");
} else {
    console.log("Los numeros son iguales");
}

alert("Ejercicio 4");

var num1_e4 = parseInt(prompt("Ingresa el primer numero"));
var num2_e4 = parseInt(prompt("Ingresa el segundo numero"));
var num3_e4 = parseInt(prompt("Ingresa el tercer numero"));

if (num1_e4 < num2_e4 && num1_e4 < num3_e4) {
    console.log("El numero " + num1_e4 + " es el mas chico");
} else if (num2_e4 < num1_e4 && num2_e4 < num3_e4) {
    console.log("El numero " + num2_e4 + " es el mas chico");
} else {
    console.log("El numero " + num3_e4 + " es el mas chico");
}

alert("Ejercicio 5");

let persona1 = { nombre: "Andres", edad: 38, altura: 168 }
let persona2 = { nombre: "Samuel", edad: 17, altura: 175 }

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es mas alto que " + persona2.nombre);
} else if (persona2.altura > persona1.altura) {
    console.log(persona2.nombre + " es mas alto(a) que " + persona1.nombre);
} else {
    console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma altura.");
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre);
} else if (persona2.edad > persona1.edad) {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre);
} else {
    console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad.");
}

alert("Ejercicio 6");

var nombre_e6 = prompt("Ingresa tu nombre:");
var edad_e6 = parseInt(prompt("Ingresa tu edad:"));
var altura_e6 = parseInt(prompt("Ingresa tu altura en cms:"));
var vision_e6 = parseInt(prompt("Ingresa tu nivel de vision del 1 al 10:"));

if (edad_e6 >= 18 && altura_e6 > 150 && vision_e6 >= 8) {
    console.log(nombre_e6 + ", estas capacitado para conducir.");
} else {
    console.log(nombre_e6 + ", no cumples los requisitos minimos para conducir.");
}


alert("Ejercicio 7");

let nombre_e7 = prompt("Ingresa tu nombre:");
let pase_e7 = prompt("¿Tienes un pase (VIP/normal)?").toLowerCase();

if (nombre_e7 == "andres" || pase_e7 == "vip") {
    console.log("¡Bienvenido al evento!");
} else {
    let tieneEntrada_e7 = prompt("¿Tienes entrada? (si/no)").toLowerCase();
    if (tieneEntrada_e7 == "si") {
        let usarEntrada_e7 = prompt("¿Desea utilizar su entrada? (si/no)").toLowerCase();
        if (usarEntrada_e7 == "si") {
            console.log("¡Bienvenido al evento!");
        } else {
            console.log("¡Hasta luego!");
        }
    } else {
        let comprarEntrada_e7 = prompt("¿Desea comprar una entrada? (si/no)").toLowerCase();
        if (comprarEntrada_e7 == "si") {
            let dineroDisponible_e7 = parseInt(prompt("¿Cuanto dinero tienes disponible?"));
            if (dineroDisponible_e7 >= 1000) {
                console.log("¡Venta exitosa, bienvenido");
            } else {
                console.log("Lo siento, no tiene suficiente dinero para comprar la entrada.");
            }
        } else {
            console.log("¡Hasta luego!");
        }
    }
}

alert("Ejercicio 8");

let numeroIncognita = 6;

let numeroIngresado1 = parseInt(prompt("1er. Intento: Adivina un número (entre 1 y 10):"));

if (numeroIngresado1 == numeroIncognita) {
    alert("¡Ganaste!");
} else {
    if (numeroIngresado1 < numeroIncognita) {
        alert("El número ingresado es menor. Vuelve a intentarlo.");
    } else {
        alert("El número ingresado es mayor. Vuelve a intentarlo.");
    }

    let numeroIngresado2 = parseInt(prompt("2ndo. Intento: Adivina un número (entre 1 y 10):"));

    if (numeroIngresado2 == numeroIncognita) {
        alert("¡Ganaste!");
    } else {
        if (numeroIngresado2 < numeroIncognita) {
            alert("El número ingresado es menor. Vuelve a intentarlo.");
        } else {
            alert("El número ingresado es mayor. Vuelve a intentarlo.");
        }

        let numeroIngresado3 = parseInt(prompt("Ultima oportunidad: Adivina el número (entre 1 y 10):"));

        if (numeroIngresado3 == numeroIncognita) {
            alert("¡Ganaste!");
        } else {
            alert(`Perdiste, el numero era ${numeroIncognita}.`);
        }
    }
}

alert("Ejercicio 9");

let edad_e9 = parseInt(prompt("Ingresa tu edad:"));

if (edad_e9 >= 0 && edad_e9 <= 12) {
    console.log("Eres un infante");
} else if (edad_e9 >= 13 && edad_e9 <= 18) {
    console.log("Eres un adolescente");
} else if (edad_e9 >= 19 && edad_e9 <= 45) {
    console.log("Eres un mayor joven");
} else if (edad_e9 > 45 && edad_e9 <= 100) {
    console.log("Eres un anciano.");
} else {
    let validacion_e9 = prompt("¿En serio tienes esa edad (si/no)").toLowerCase();
    if (validacion_e9 == "si") {
        console.log("¡Felicitaciones!");
    } else {
        console.log("Me ilusionaste");
    }
}

alert("Ejercicio 10");

let jugador1_e10 = prompt("Jugador 1: Escriba (PIEDRA, PAPEL o TIJERAS").toUpperCase();
let jugador2_e10 = prompt("Jugador 2: Escriba (PIEDRA, PAPEL o TIJERAS").toUpperCase();

if ((jugador1_e10 == "PIEDRA" && jugador2_e10 == "TIJERAS") ||
    (jugador1_e10 == "PAPEL" && jugador2_e10 == "PIEDRA") ||
    (jugador1_e10 == "TIJERAS" && jugador2_e10 == "PAPEL")) {
    console.log("¡Gana el jugador #1!");
} else if ((jugador2_e10 == "PIEDRA" && jugador1_e10 == "TIJERAS") ||
    (jugador2_e10 == "PAPEL" && jugador1_e10 == "PIEDRA") ||
    (jugador2_e10 == "TIJERAS" && jugador1_e10 == "PAPEL")) {
    console.log("¡Gana el jugador #2!");
} else if (jugador1_e10 == jugador2_e10) {
    console.log("¡Empate!");
} else {
    console.log("Alguno de los jugadores ha hecho trampa.");
}

alert("Ejercicio 11");

let color_e11 = prompt("Ingrese un color:").toLowerCase();

switch (color_e11) {
    case "blanco":
    case "negro":
        console.log("Falta de color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marron":
    case "marrón":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado");
        break;
}

alert("Ejercicio 12");

let num1_e12 = parseInt(prompt("Ingresa el primer numero"));
let num2_e12 = parseInt(prompt("Ingresa el segundo numero"));
let operacion_e12 = prompt("Escriba la operacion (Suma, Resta, Multiplicacion, Division):").toLowerCase();
let resultado_e12;

switch (operacion_e12) {
    case "suma":
        resultado_e12 = num1_e12 + num2_e12;
        console.log("El resultado de la suma es: " + resultado_e12);
        break;
    case "resta":
        resultado_e12 = num1_e12 - num2_e12;
        console.log("El resultado de la resta es: " + resultado_e12);
        break;
    case "multiplicacion":
        resultado_e12 = num1_e12 * num2_e12;
        console.log("El resultado de la multipliacion es: " + resultado_e12);
        break;
    case "division":
        if (num2_e12 == 0) {
            console.log("No se puede dividir por 0");
        } else {
            resultado_e12 = num1_e12 / num2_e12;
            console.log("El resultado de la division es: " + resultado_e12);
        }
        break;
    default:
        console.log("Operacion no valida, debes escribir (Suma, Resta, Multiplicacion, Division)");
        break;
}

alert("Ejercicio 13");

let nombre_e13 = prompt("Ingrese sus nombres:");
let apellido_e13 = prompt("Ingrese sus apellidos:");
let id_e13 = prompt("Ingresa el numero de tu cedula");
let nac_e13 = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA)")
let munNac_e13 = prompt("Ingrese su municipio de nacimiento");
let depNac_e13 = prompt("Ingresa el departamento de nacimiento");
let est_e13 = prompt("Ingresa tu estura en centimetros");
let sangre_e13 = prompt("Ingresa tu tipo de sangre ");
let genero_e13 = prompt("Ingresa tu genero");
let fechaExp_e13 = prompt("Ingresa la fecha de expedicion (DD/MM/AAAA)");
let lugarExp_e13 = prompt("Ingresa el lugar de expedicion del documento");

respuesta_e13 = confirm(`Los datos ingresados son: \n
        Nombre: ${nombre_e13}\n
        Apellido: ${apellido_e13}\n
        Numero de Cedula: ${id_e13}\n
        Fecha de Nacimiento: ${nac_e13}\n
        Municipio de Nacimiento: ${munNac_e13}\n
        Departamento de Nacimiento: ${depNac_e13}\n
        Estatura: ${est_e13}\n
        Tipo de Sangre: ${sangre_e13}\n
        Genero: ${genero_e13}\n
        Fecha de Expedicion: ${fechaExp_e13}\n
        Lugar de Expedicion: ${lugarExp_e13}`);

if (respuesta_e13) {
    const dni = {
        numero: id_e13,
        nombre: nombre_e13,
        apellido: apellido_e13,
        fechaNacimiento: nac_e13,
        municipioNacimiento: munNac_e13,
        departamentoNacimiento: depNac_e13,
        estatura: est_e13,
        tipoSangre: sangre_e13,
        genero: genero_e13,
        fechaDeExpedicion: fechaExp_e13,
        lugarDeExpedicion: lugarExp_e13
    };
    console.log("Registro exitoso:");
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes");
}