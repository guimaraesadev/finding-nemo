var locaNemo

function locaNemo() {
    locaNemo = prompt('1 Ir para o SUL; 2 Ir para o NORTE!');
    while (true) {
        if (locaNemo == 1 || locaNemo == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            locaNemo = prompt('1 Ir para o SUL; 2 Ir para o NORTE!');
        }
    }
    if (locaNemo == 1) {
        location = ('../finalstep/finalnorte.html')
    } else {
        location = ('../finalstep/finalsul.html')
    }
}


//NORTE = PERDEU
//SUL = VENCEU