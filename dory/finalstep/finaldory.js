var doriFinal

function doriFinal() {
    doriFinal = prompt('1 Podemos ir pro outra rota! ; 2 Quero enfrentar as águas vivas');
    while (true) {
        if (doriFinal == 1 || doriFinal == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            doriFinal = prompt('1 Podemos ir pro outra rota! ; 2 Quero enfrentar as águas vivas');
        }
    }
    if (doriFinal == 1) {
        location = ('./gameover1.html')
    } else {
        location = ('./doryfamily.html')
    }
}