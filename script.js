var escolhaPersonagens 

function escolhaPersonagens () {
    escolhaPersonagens = prompt('1 Nemo 2 Dory 3 Crush');
while (true) {
    if (escolhaPersonagens == 1 || escolhaPersonagens == 2 || escolhaPersonagens == 3) {
        break
    } else {
        alert("Opção inválida, digite uma entre 1 e 3!");
        escolhaPersonagens = prompt('1 Nemo 2 Dory 3 Crush');
    }
}
if (escolhaPersonagens == 1) {
    location = ('./nemo/firststep/marlin_e_nemo.html')
} else if (escolhaPersonagens == 2) {
    location = ('./princesa/primeira_etapa/escolha_princesa_um.html')
}
else {
    location = ('./luigi/primeira_etapa/escolha_luigi_um.html')
}
}   
