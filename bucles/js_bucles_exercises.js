alert("Ejercicio 1");

let num_ej1 = parseInt(prompt("Ingrese un numero:"));

console.log("Tabla de multiplicar del " + num_ej1);
for (let i = 1; i <= 10; i++) {
    console.log(num_ej1 + "x" + i + "=" + (num_ej1 * i));
}

alert("Ejercicio 2");

let acumulador = 0;
let num_ej2 = parseInt(prompt("Ingrese un numero para ir acumulando, escriba 0 para terminar:"));
while (num_ej2 !== 0) {
    acumulador += num_ej2;
    num_ej2 = parseInt(prompt("Ingrese otro numero para ir acumulando, escriba 0 para terminar:"));
}
console.log("La suma de los numeros ingresados es: " + acumulador);

alert("Ejercicio 3");

let numSec_ej3 = 44;
let acumIntentos_ej3 = 0;
let intento_ej3;

alert("¡¡¡Vamos a jugar!!!");

while (intento_ej3 !== numSec_ej3) {

    intento_ej3 = parseInt(prompt('Ingresa un numero entre 1 y 100: '));
    acumIntentos_ej3++;

    if (intento_ej3 < numSec_ej3) {
        alert("El numero a adivinar es mayor");
    } else if (intento_ej3 > numSec_ej3) {
        alert("El numero a adivinar es menor");
    } else {
        alert("Felicidades, adivinaste en: " + acumIntentos_ej3 + " intentos");
    }
}

alert("Ejercicio 4");

let num_ej4 = parseInt(prompt("Ingrese un numero determinar si es primo:"));
let div_ej4 = 1;
let cont_ej4 = 0;
while (div_ej4 <= num_ej4) {
    if (num_ej4 % div_ej4 == 0) {
        cont_ej4++;
    }
    div_ej4++;
}

if (cont_ej4 == 2) {
    alert("El numero " + num_ej4 + " es primo:");
} else {
    alert("El numero " + num_ej4 + " no es primo:");
}

alert("Ejercicio 5");

let num_ej5 = parseInt(prompt("Por favor, ingresa un numero: "));
let div_ej5 = "Divisores de " + num_ej5 + ": ";

for (let i = 1; i <= num_ej5; i++) {
    if (num_ej5 % i == 0) {
        div_ej5 += i + " ";
    }

} alert(div_ej5);

alert("Ejercicio 6");

let array_ej6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array_ej6.length; i++) {
    console.log("Elemento en la posición " + i + ": " + array_ej6[i]);
}

alert("Ejercicio 7");

let array_ej7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array_ej7.length; i++) {
    console.log("Elemento en la posición " + i + ": " + array_ej7[i] * 2);
}

alert("Ejercicio 8");

let familia_ej8 = [
    { nombre: "Andres", edad: 38, relacion: "padre", hobby: "trabajar" },
    { nombre: "Carolina", edad: 27, relacion: "madre", hobby: "cocinar" },
    { nombre: "Samuel", edad: 17, relacion: "hijo mayor", hobby: "tocar guitarra" },
    { nombre: "Santiago", edad: 5, relacion: "hijo menor", hobby: "jugar" },
    { nombre: "Hector", edad: 28, relacion: "abuela", hobby: "estudiar" }
];

for (let i = 0; i < familia_ej8.length; i++) {
    console.log(`Hola, soy ${familia_ej8[i].nombre}, tengo ${familia_ej8[i].edad} años, soy ${familia_ej8[i].relacion} y me gusta ${familia_ej8[i].hobby}`);
}

alert("Ejercicio 9");

let array_ej9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array_ej9.length; i++) {
    if (array_ej9[i] % 2 !== 0) {
        console.log(array_ej9[i]);
    }
}

alert("Ejercicio 10");

let acuPar = 0;
let acuImpar = 0;

let num_ej10 = parseInt(prompt("Por favor, ingresa un numero: "));

while (num_ej10 !== 0) {

    if (num_ej10 % 2 == 0) {
        acuPar += num_ej10;
    } else {
        acuImpar += num_ej10;
    }
    num_ej10 = parseInt(prompt("Ingrese otro numero para ir sumando, escriba 0 para terminar:"));
}

console.log(`La suma de los numeros pares es: ${acuPar}`);
console.log(`La suma de los numeros impares es: ${acuImpar}`);

alert("Ejercicio 11");

let num_ej11 = [5, 12, 6, 3, 8, 15, 2, 7, 9, 100, 200];

let max_ej11 = num_ej11[0];

for (let i = 1; i < num_ej11.length; i++) {
    if (num_ej11[i] > max_ej11) {
        max_ej11 = num_ej11[i];
    }
}

console.log("El numero mas grande es:", max_ej11);

alert("Ejercicio 12");

let num_ej12 = [0, 5, 12, 6, 3, 8, 15, 2, 7, 9, 100, 200, -1];

let min_ej12 = num_ej12[0];

for (let i = 1; i < num_ej12.length; i++) {
    if (num_ej12[i] < min_ej12) {
        min_ej12 = num_ej12[i];
    }
}

console.log("El numero mas chico es: ", min_ej12);

alert("Ejercicio 13");

let jugador1_ej13 = prompt("Ingresa el nombre del jugador 1:");
let jugador2_ej13 = prompt("Ingresa el nombre del jugador 2:");
let ganador_ej13 = false;

while (!ganador_ej13) {
    let selJugador1_ej13 = prompt(jugador1_ej13 + ", elige: piedra, papel o tijeras");
    let selJugador2_ej13 = prompt(jugador2_ej13 + ", elige: piedra, papel o tijeras");

    if (selJugador1_ej13 == selJugador2_ej13) {
        alert("Empate, ambos eligieron " + selJugador1_ej13 + ". ¡Vamos de nuevo!");
    } else {

        if ((selJugador1_ej13 == "piedra" && selJugador2_ej13 == "tijeras") ||
            (selJugador1_ej13 == "papel" && selJugador2_ej13 == "piedra") ||
            (selJugador1_ej13 == "tijeras" && selJugador2_ej13 == "papel")) {
            alert("¡" + jugador1_ej13 + " gana!");
        } else
            if ((selJugador2_ej13 == "piedra" && selJugador1_ej13 == "tijeras") ||
                (selJugador2_ej13 == "papel" && selJugador1_ej13 == "piedra") ||
                (selJugador2_ej13 == "tijeras" && selJugador1_ej13 == "papel")) {
                alert("¡" + jugador2_ej13 + " gana!");
            } else {
                alert("¡Juego finalizado, deben elegir una opcion valida!");
            }
        ganador_ej13 = true;
    }
}

alert("Ejercicio 14");

for (let i = 1; i <= 5; i++) {
    let fila_ej14 = '';

    for (let j = 1; j <= i; j++) {
        fila_ej14 += '*';
    }

    console.log(fila_ej14);
}

alert("Ejercicio 15");

for (let i = 5; i >= 1; i--) {
    let fila_ej15 = '';

    for (let j = 1; j <= i; j++) {
        fila_ej15 += '*';
    }

    console.log(fila_ej15);
}

alert("Ejercicio 16");

let arr_ej16 = [15, 31, 9, 11, 28, 52, 17, 4, 68, 70];

for (let i = 0; i < arr_ej16.length - 1; i++) {
    for (let j = 0; j < arr_ej16.length - 1 - i; j++) {
        if (arr_ej16[j] > arr_ej16[j + 1]) {
            let temp_ej16 = arr_ej16[j];
            arr_ej16[j] = arr_ej16[j + 1];
            arr_ej16[j + 1] = temp_ej16;
        }
    }
}

console.log("Array ordenado:", arr_ej16);