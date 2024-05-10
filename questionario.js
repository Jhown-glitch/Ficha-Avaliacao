var respostas = {};

function validarAvaliacao () {
    var dataAvaliacaoInput = document.getElementById('dataAvaliacao');
    var dataAvaliacao = new Date(dataAvaliacaoInput.value);
    var hoje = new Date();

    //Configura as datas para remover a hora e evitar inconsistências de fuso horário
    //dataAvaliacao.setHours(0, 0, 0, 0);
    //hoje.setHours(0, 0, 0, 0);

    if (dataAvaliacao > hoje) {
        alert("A data da avaliação deve ser igual ou anterio à data de hoje!");
        return;
    }

    //Se a data for válida, avance
    guardarResposta('dataAvaliacao');
    mostrarProxima('perguntaNome');
}

function validarDataNascimento() {
    var dataNascimentoInput = document.getElementById('dataNascimento');
    var dataNascimento = new Date(dataNascimentoInput.value);
    var hoje = new Date();
    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
    var mesAtual = hoje .getMonth();
    var mesNascimento = dataNascimento.getMonth();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (idade < 16 || idade > 120) {
        alert("Por favor, insira uma data de nascimento válida, você não pode ser menor de 16 e nem maior de 120!")
        return;
    }

    //Se a idade estiver dentro do intervalo, seguir para a próxima pergunta
    guardarResposta('dataNascimento');
}

function guardarRespostaNome () {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    respostas['nomeCompleto'] = nomeCompleto;
    mostrarProxima('perguntaNascimento');
}

function guardarResposta (idResposta) {
    var resposta = document.getElementById(idResposta).value;
    respostas[idResposta] = resposta;
    var proximaPergunta = 'pergunta' + (parseInt(idResposta.replace('resposta', '')) +1);
    mostrarProxima(proximaPergunta);
}

function mostrarProxima (id) {
    document.getElementById(id).style.display='block';
    console.log('funcionou')
};