alert("Ejercicio 1");

let num = parseInt(prompt("Ingrese un numero:"));

console.log("Tabla de multiplicar del " + num);
for (let i = 1; i <= 10; i++) {
    console.log(num + "x" + i + "=" + (num * i));
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

    if (intento_ej3 < numSec_ej3){
        alert("El numero a adivinar es mayor");
    } else if(intento_ej3 > numSec_ej3){
        alert("El numero a adivinar es menor");
    } else {
        alert("Felicidades, adivinaste en: "+acumIntentos_ej3+" intentos");
    }
}
