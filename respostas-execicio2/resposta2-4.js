let letra = prompt('Digite uma letra do alfabeto');

let codigoAsk = letra.toLowerCase().trim().charCodeAt(0);

if(codigoAsk >= 97 && codigoAsk <= 122){
    switch(codigoAsk){
        case 97: case 101: case 105: case 111: case 117:
        alert('É uma VOGAL');
        break;
    default:
        alert('É uma CONSOANTE');
    }
}else{
    alert('Não é uma letra do alfabeto');
}

/*letra = letra.toLowerCase().trim();

let resposta = 'A letra é uma CONSOANTE';

if (letra == 'a' ||
    letra == 'e' ||
    letra == 'i' ||
    letra == 'o' ||
    letra == 'u') {
        Resposta = 'A letra é uma VOGAL';
    }

alert(resposta);
*/
/*
letra = parseFloat(letra);
if (isNaN(letra)!='a','e','i','o','u') {
alert('consoante');}else(isNaN(letra)=='a','e','i','o','u')
alert('vogal')
*/
/*
let letra = prompt('Digite uma letra do alfabeto');

letra = letra.toLowerCase().trim();

switch(!isNaN(letra) || letra) {
    case true:
        alert('não pertence ao alfabeto');
        break;
    case 'a': case 'e': case 'i': case 'o': case 'u': 
        alert('essa letra é uma VOGAL');
        break;
    defauld:
        alert('Essa letra é CONSOANTE');*/