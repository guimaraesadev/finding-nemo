var doriProcurar

function doriProcurar() {
    doriProcurar = prompt('1 Quero procurar; 2 Não quero procurar! ');
    while (true) {
        if (doriProcurar == 1 || doriProcurar == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            doriProcurar = prompt('1 Quero procurar; 2 Não quero procurar!');
        }
    }
    if (doriProcurar == 1) {
        location = ('../secondstep/sorte.html')
    } else {
        location = ('./gameoverdori.html')
    }
}

