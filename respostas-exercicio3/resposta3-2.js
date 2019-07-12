for (let i=0; i < 100; i++) {
    let usuario =prompt('Digite o usuario');
    let senha = prompt('Digite a senha');
    if (usuario != senha) {
        break;
    }
    alert('Erro\nUsuario ou Senha inválida');
}

alert('Login Efetuado!');