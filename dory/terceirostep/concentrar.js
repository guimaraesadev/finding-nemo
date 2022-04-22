var concentraFase 

function concentraFase() {
    concentraFase = prompt('1 Quero ir para a superficie; 2 Prefiro seguir para as profundezas');
    while (true) {
        if (concentraFase == 1 || concentraFase == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            concentraFase = prompt('1 Quero ir para a superficie; 2 Prefiro seguir para as profundezas');
        }
    }
    if (concentraFase == 1) {
        location = ('./superficie.html')
    } else {
        location = ('./profundezas.html')
    }
}