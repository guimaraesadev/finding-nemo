var crushIndeciso 

function crushIndeciso() {
    crushIndeciso = prompt('1 Vou voltar; 2 Irei junto!');
    while (true) {
        if (crushIndeciso == 1 || crushIndeciso == 2) {
            break
        } else {
            alert("Escolha inválida, digite 1 ou 2");
            crushIndeciso = prompt('1 Vou voltar; 2 Irei junto!');
        }
    }
    if (crushIndeciso == 1) {
        location = ('./gameovercrush2.html')
    } else {
        location = ('../terceirostep/crush3.html')
    }
}