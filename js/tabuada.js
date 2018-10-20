function mostrarTabuada() {
    // perguntar o numero para o usuario 
    // converter o numero
    var n = parseInt(prompt('Digite um numero'));
    if (n === undefined) {
        throw new Error('calcularArea precisa receber dois números');
    }
    if (isNaN(n)) {
        alert('ERROR:Digite novamente,apenas números!!!');
        throw new Error('Apenas numeros')
        // alert('Digite Novamente');
    }


    //criar uma variavel que servira de indice
    var i = 1;
    var mensagem = '';
    //enquanto indice <= 100 concatena na variavel mensagem
    while (i <= 10) {
        mensagem += n + ' x ' + i + ' = ' + (n * i) + '<br>';
        i++;


    }
    // mostrar  mensagem no output
    output.innerHTML = (mensagem);
}
limparTabuada()

function limparTabuada() {
    var mensagem = 'Clique no Botão Criar tabuada';
    output.innerHTML = mensagem;
}


