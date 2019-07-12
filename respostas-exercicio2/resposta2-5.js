/*
let nota = prompt('Informe sua media');

        nota = parseFloat(nota);
        if (nota == 10) {
        alert('Aprovado com Distinção');
        } else if (nota>=7){
            alert('Aprovado');
        } else if(nota < 7){
            alert('Reprovado');
        }*/
let nota1 = parseFloat(prompt('Digite a nota 1'));
let nota2 = parseFloat(prompt('Digite a nota 2'));

let media = (nota1 + nota2) / 2;

let resposta = 'reprovado';
/*
if (isNaN(media) || media < 0 || media > 10) {
    resposta = 'Entrada inválida!';
}*/
if(media == 10){
    resposta = 'Aprovado com Distinção';
} else if (media >= 7) {
    resposta = 'Aprovado';
}
alert(resposta);