/*
let letra = prompt('Digite M ou F');

letra = letra.toLowerCase().trim();

if(letra == 'M' || letra == 'm'){
    resposta = 'M - Masculino';
}else if(sexo == 'f'){
    resposta = 'F - Feminino';
}else {
    resposta = 'Sexo Invalido'
}
alert(resposta);
*/
let resposta = prompt('Digite M ou F');

resposta = resposta.toUpperCase().trim();

switch(resposta){
    case 'M' :
        alert('M - Masculino');
        break;
    case 'F' :
        alert('F - Feminino');
        break;
    default:
        alert('Sexo inválido');
}