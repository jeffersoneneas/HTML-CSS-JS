
function escrevaMeuNome(nome) {
    return 'Meu nome é: ' + nome; 
}

function verificaIdade(idade){
    if(idade > 17){
        console.log(escrevaMeuNome('Jefferson') + ' sou maior de idade');
    }else {
        console.log(escrevaMeuNome('Jeffersom') + 'sou menor de idade');
    }
}

verificaIdade(19);