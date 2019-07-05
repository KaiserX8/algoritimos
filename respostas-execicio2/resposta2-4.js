let letra = prompt('Digite a letra');

letra = letra.toLowerCase().trim();

let rseposta = 'A letra é uma CONSOANTE';

if (letra == 'a' ||
    letra == 'e' ||
    letra == 'i' ||
    letra == 'o' ||
    letra == 'u') {
        Resposta = 'A letra é uma VOGAL';
    }

alert(resposta);
/*
letra = parseFloat(letra);
if (isNaN(letra)!='a','e','i','o','u') {
alert('consoante');}else(isNaN(letra)=='a','e','i','o','u')
alert('vogal')*/