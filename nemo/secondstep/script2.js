var procurarDori

function procurarDori() {
    procurarDori = prompt('1 Quero procurar Dori; 2 Consigo ir sozinho!');
    while (true) {
        if (procurarDori == 1 || procurarDori == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            procurarDori = prompt('Quero procurar Dori; 2 Consigo ir sozinho!');
        }
    }
    if (procurarDori == 1) {
        location = ('./datedori.html')
    } else {
        location = ('./gameover_nemodori.html')
    }
}
