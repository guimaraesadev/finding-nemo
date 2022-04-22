var concentraFase

function concentraFasea() {
    concentraFase = prompt('1 Pedir ajuda; 2 Não pedir ajuda');
    while (true) {
        if (concentraFase == 1 || concentraFase == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            concentraFase = prompt('1 Pedir ajuda; 2 Não pedir ajuda');
        }
    }
    if (concentraFase == 1) {
        location = ('./datedori.html')
    } else {
        location = ('./gameover_nemodori.html')
    }
}