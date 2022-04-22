var barcoCrush

function barcoCrush() {
    barcoCrush = prompt('1 Vou junto! Sou pura coragem; 2 Prefiro apenas observar');
    while (true) {
        if (barcoCrush == 1 || barcoCrush == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            barcoCrush = prompt('1 Vou junto! Sou pura coragem; 2 Prefiro apenas observar');
        }
    }
    if (barcoCrush == 1) {
        location = ('./gameover.html')
    } else {
        location = ('./winner.html')
    }
}