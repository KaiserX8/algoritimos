let numero1 = prompt('Informe o primeiro número')
let numero2 = prompt('Informe o segundo número')

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

let maior = 0;
if(numero1> numero2) {
    maior = numero1
} else {
    maior = numero2;
}
/*
let numero1 = prompt('Informe o primeiro número');
numero1 = parseInt(numero1);

let maior = numero1;

let numero2 = prompt('Informe o segundo número');
numero2 = parseInt(numero2);

if(numero2 > maior) {
    maior = numero2
}
*/
alert('O miaor número é ' + maior)