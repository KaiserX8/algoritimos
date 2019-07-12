let numero1 = parseFloat (prompt('Informe o número 1'))
let maior = numero1;
let menor = numero1;

let numero2 = parseFloat (prompt('Informe o número 2'))
if (numero2 > maior){
    maior = numero2;
}else{
    menor = numero2;
}
let numero3 = parseFloat (prompt('Informe o número 3'))
if (numero3 > maior){
    maior = numero3;
}else if (numero3 < menor) {
    menor = numero3;
}

alert('Maior: ' + maior + '\nMenor ' + menor);