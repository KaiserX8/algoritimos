let nota = prompt('Informe sua media');

        nota = parseFloat(nota);
        if (nota == 10) {
        alert('Aprovado com Distinção');
        } else if (nota>=7){
            alert('Aprovado');
        } else if(nota < 7){
            alert('Reprovado');
        }