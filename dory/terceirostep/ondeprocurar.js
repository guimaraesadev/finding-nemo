var ondeProcurar

function ondeProcurar() {
    ondeProcurar = prompt('1 Vou esperar a galera; 2 Dessa vez quero ir sozinha!');
    while (true) {
        if (ondeProcurar == 1 || ondeProcurar == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            ondeProcurar = prompt('1 Vou esperar a galera; 2 Dessa vez quero ir sozinha!');
        }
    }
    if (ondeProcurar == 1) {
        location = ('./datedori.html')
    } else {
        location = ('./gameover_nemodori.html')
    }
}
