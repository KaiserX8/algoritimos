let valor1 = prompt('Informe a nota 1');
let valor2 = prompt('Informe a nota 2');
let valor3 = prompt('Informe a nota 3');
let valor4 = prompt('Informe a nota 4');

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
valor3 = parseFloat(valor3);
valor4 = parseFloat(valor4);

let media = (valor1 + valor2 + valor3 + valor4) / 4;

alert('A média das notas é ' + media);