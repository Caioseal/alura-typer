function inserirPlacar() {
    let corpoTabela = $('.placar').find("tbody")
    let usuario = "Caio"
    let numeroPalavras = $('#contador-palavras').text()

    let linha = novaLinha(usuario, numeroPalavras)
    linha.find('.botao-remover').click(removerLinha)

    corpoTabela.prepend(linha)
}

function novaLinha(usuario, palavras) {
    let linha = $("<tr>")
    let colunaUsuario = $('<td>').text(usuario)
    let colunaPalavras = $('<td>').text(palavras)
    let colunaRemover = $('<td>');
    
    let link = $('<a>').addClass('botao-remover').attr('href', '#')
    let icone = $('<i>').addClass('material-icons').addClass("small").text('delete')

    link.append(icone)
    colunaRemover.append(link)
    linha.append(colunaUsuario, colunaPalavras, colunaRemover)

    return linha
}

function removerLinha() {
    event.preventDefault()
    $(this).parent().parent().remove()
}