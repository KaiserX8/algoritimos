let populacaoA = 80000;
let populacaoB = 200000;

const taxaA = 3 / 100;
const taxaB = 1.5 / 100;

let qtdAnos = 0;

for (let i = 0; i < 100; i++){
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    if(populacaoA>=populacaoB) {
        qtdAnos = i;
        break;
    }
}
alert('População A: ' + populacaoA + '\n' + 'população B'
+ populacaoB + '\n' + 'Quantidade de Anos: ' + qtdAnos);