let produtoA = parseFloat(prompt('Informe o preço do produto A'));
let menor = produtoA;
let recomendacao = 'produto A';

let produtoB = parseFloat(prompt('Informe o preço do produto B'));
if (produtoB < menor){
    menor = produtoB;
    recomendacao = 'produto B';
}

let produtoC = parseFloat(prompt('Informe o preço do produto C'));
if (produtoC < menor){
    menor = produtoC;
    recomendacao = 'produto C';
}

alert('Melhor preço: ' + menor
+ '\nProduto Recomendado: ' + recomendacao);