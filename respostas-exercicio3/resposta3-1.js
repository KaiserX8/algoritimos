for (let i = 0; i < 100; i++) {
        nota = parseFloat(prompt('Digite sua nota'));
        if(nota >= 0 && nota <= 10) {
            break;
        }

    }
alert('Nota digitada: ' + nota);