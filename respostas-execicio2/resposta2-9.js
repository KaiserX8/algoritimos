let valorA =parseFloat(prompt('informe o número 1'));
let valorB =parseFloat(prompt('informe o número 2'));
let valorC =parseFloat(prompt('informe o número 3'));

let auxiliar = 0;

if (valorA > valorB) {
    auxiliar = valorA;
    valorA = valorB;
    valorB = auxiliar;
}

if(valorB > valorC) {
    auxiliar - valorB;
    valorB = valorC;
    valorC = auxiliar;
}

alert(valorA + '<' + valorB + '<' + valorC);