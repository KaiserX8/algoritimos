
let n1 = prompt('digite a 1º nota')

let n2 = prompt('digite a 2º nota')

let n3 = prompt('digite a 3º nota')

let n4 = prompt('digite a 4º nota')

n1 = parseFloat(n1);

n2 = parseFloat(n2);

n3 = parseFloat(n3);

n4 = parseFloat(n4);

let media = (n1 + n2 + n3 + n4) / 4;

alert(' 1º nota - ' + n1 + '\n' + ' 2º nota - ' + n2 + '\n' + ' 3º nota - ' + n3 + '\n' + ' 4º nota - ' + n4 + '\n' + ' A média das notas é ' + media);
/*
let notas = [5, 10, 15, 5];
let soma = 0;
let quantidade = notas.length;

for (let i = 0; i < quantidade; i++)  {
    soma += notas[i];
}

let media = soma / quantidade;
alert('Notas: ' + notas.join(' - ') + '\n' + 'Média: ' + media.toFixed(2));
*/