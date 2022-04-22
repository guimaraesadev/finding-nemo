var pedirAjuda

function pedirAjuda() {
    pedirAjuda = prompt('1 Pedir ajuda; 2 Não pedir ajuda');
    while (true) {
        if (pedirAjuda == 1 || pedirAjuda == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            pedirAjuda = prompt('1 Pedir ajuda; 2 Não pedir ajuda');
        }
    }
    if (pedirAjuda == 1) {
        location = ('./destinyajuda.html')
    } else {
        location = ('./gameoverdestiny.html')
    }
}