var decidirDorinha

function decidirDorinha() {
    decidirDorinha = prompt('1 Vou esperar a galera; 2 Dessa vez quero ir sozinha!');
    while (true) {
        if (decidirDorinha == 1 || decidirDorinha == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            decidirDorinha = prompt('1 Vou esperar a galera; 2 Dessa vez quero ir sozinha!');
        }
    }
    if (decidirDorinha == 1) {
        location = ('./datedori.html')
    } else {
        location = ('./gameover_nemodori.html')
    }
}

