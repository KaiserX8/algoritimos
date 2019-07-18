let numeros = [1,2,3,4,5,6,7,8,9,10];
// let vetorInverso = numeros.reverse();
let vetorInverso = [];
let contador = 0;

for (let i = numeros.length-1; i>= 0; i--){
    vetorInverso[contador]=numeros[i];
    contador++;
}
alert(vetorInverso);