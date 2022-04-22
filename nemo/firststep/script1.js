var escolhaUm

function escolhaUm() {
    escolhaUm = prompt('1 Se afastar e ir para o oceano; 2 Continuar com seu pai');
    while (true) {
        if (escolhaUm == 1 || escolhaUm == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            escolhaUm = prompt('1  Se afastar e ir para o oceano; 2 Continuar com seu pai');
        }
    }
    if (escolhaUm == 1) {
        location = ('./nemosozinho.html')
    } else {
        location = ('./gameover_nemo_1.html')
    }
}

