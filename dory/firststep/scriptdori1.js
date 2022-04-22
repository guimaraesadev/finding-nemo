var doriProcurar

function doriProcurar() {
    doriProcurar = prompt('1 Quero procurar agora; 2 Vou esperar um pouco aqui! Quem sabe? ');
    while (true) {
        if (doriProcurar == 1 || doriProcurar == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            doriProcurar = prompt('1 Quero procurar agora; 2 Vou esperar um pouco aqui! Quem sabe?!');
        }
    }
    if (doriProcurar == 1) {
        location = ('../secondstep/sorte.html')
    } else {
        location = ('./gameoverdori.html')
    }
}

