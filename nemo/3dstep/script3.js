var pedirAjuda

function pedirAjuda() {
    pedirAjuda = prompt('1 Pedir ajuda; 2 Preferimos ir sozinhos!');
    while (true) {
        if (pedirAjuda == 1 || pedirAjuda == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            escolhaUm = prompt('1 Pedir ajuda; 2 Preferimos ir sozinhos!');
        }
    }
    if (pedirAjuda == 1) {
        location = ('./datedori.html')
    } else {
        location = ('./gameoverdestiny.html')
    }
}