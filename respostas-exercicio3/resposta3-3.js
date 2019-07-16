let nome = '';
for (let i=0; i < 100; i++) {
    nome =prompt('Digite o seu nome').trim();
    let tamanhoNome=nome.lemgth
    if(nome.lemgth>3){
        break;
    }else{
        alert('Nome Inválido!!!');
    }
}
    alert('nome: ' + nome);
let idade = 0;
for (let i = 0;i < 100; i++){
    idade = prompt('Digite a sua idade').trim();
    idade = parseInt(idade);
    if (idade >= 0 && idade <=150){
        break;
    }else{
            alert('Idade inválida!!!');
        }
    }
alert('Idade ' + idade);

let salario = 0;
for (let i = 0; i < 100; i++){
    salario =prompt('Informe o seu salario mensal').trim();
    salario = parseInt(salario)
    if(salario <= 0 && salario > 0){
        break;
    }else{
        alert('Salario Inválido');
    }
}
alert('Salário Mensal ' + salario)
    

let sexo = '';
for (let i = 0; i < 3; i++)
    sexo = prompt('Informe o seu sexo').trim();
    sexo = parseInt(sexo)
    if (sexo) {}


    let status ='';
    status=prompt('Informe o seu Estado Civil').trim();
    if (status) {}


