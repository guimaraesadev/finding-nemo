var crushDecide

function crushDecide() {
    crushDecide = prompt('1 Vou querer ir; 2 Prefiro ficar com meu bando');
    while (true) {
        if (crushDecide == 1 || crushDecide == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            crushDecide = prompt('1 Vou querer ir; 2 Prefiro ficar com meu bando');
        }
    }
    if (crushDecide == 1) {
        location =('../secondstep/crush2.html')
    } else {
        location = ('./gameovercrush1.html')
    }
}