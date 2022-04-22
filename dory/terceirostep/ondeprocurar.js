var ondeProcurar

function ondeProcurar() {
    ondeProcurar = prompt('1 Pensar em novas rotas; 2 Continuar a procura!');
    while (true) {
        if (ondeProcurar == 1 || ondeProcurar == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            ondeProcurar = prompt('1 Pensar em novas rotas; 2 Continuar a procura!');
        }
    }
    if (ondeProcurar == 1) {
        location = ('./doriresiliente.html')
    } else {
        location = ('./gameoverdesistir.html')
    }
}
