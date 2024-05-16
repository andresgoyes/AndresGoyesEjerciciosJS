let btnCalcImc = document.getElementById("calcularImc");
btnCalcImc.addEventListener("click", calcularIMC);

function calcularIMC() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let inputImc = document.getElementById("imc");    
    let resultado = peso / (Math.pow((altura/100),2));
    console.log(resultado);
    inputImc.value = resultado.toFixed(2);
}

let inputCop = document.getElementById("cop");
let inputUsd = document.getElementById("usd");
inputCop.addEventListener("input", converCop);
inputUsd.addEventListener("input", converUsd);

function converCop() {
    let resultado = inputCop.value / 3888;
    inputUsd.value = resultado.toFixed(2);
}
function converUsd() {
    let resultado = inputUsd.value * 3888;
    inputCop.value = resultado.toFixed(2);
}