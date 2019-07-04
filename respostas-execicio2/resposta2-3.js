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