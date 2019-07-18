let letra = prompt('Digite uma letra do alfabeto');
let consoantes = []
let x = 0;

for (let i = 0; i< texto.length; i++) {
    let codigoAsk = texto[i]
                    .toLowerCase()
                    .charCodeAt(0);
    if(codigoAsk >= 97 && codigoAsk <= 122){
        switch(codigoAsk){
            case 97: //a
            case 101: //e
            case 105: //i
            case 111: //o
            case 117://u
            alert('É uma VOGAL');
            break;
        default:
            consoantes[x] = texto[i];
            x++;
        }
    }
}
   alert('É uma CONSOANTE')