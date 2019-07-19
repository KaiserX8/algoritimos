function calcular() {
    let numero1 =  document.getElementById('valor1').Value;
    numero1 = validaCampo(numero1, mensagem1, 'Campo 1 deve ser número');
    
    let numero2 =  document.getElementById('valor2').Value;
    numero2 = validaCampo(numero2, mensagem2, 'Campo 2 só numero');

    let resutado = numero1 + numero2;

    document.getElementById('resultado').value = resutado;
}

function ehNumero(numero) {
    return !isNaN(numero);
}

function validaCampo(valor, id, mensagem) {
    document.getElementById(id).innerHTML='';
    if(ehNumero(valor)) {
        valor = parseInt(valor);
        return valor;
    }else{
    document.getElementById(id).style.color='red';
    document.getElementById(id).innerHTML = mensagem;
    }
    return 0;
}