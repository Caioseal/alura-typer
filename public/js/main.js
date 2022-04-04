let tempoInicial = $('#tempo-digitacao').text()
let campo = $('.campo-digitacao')

$(function(){
    atualizarTamanhoFrase()
    inicializarContadores()
    inicializarCronometro()
    inicializaMarcadores()
    $('#botao-reiniciar').click(reiniciarJogo)
})

function atualizarTamanhoFrase() {
    let frase = $(".frase").text()
    let numeroPalavras = frase.split(" ").length
    $("#tamanho-frase").text(numeroPalavras)
}

function inicializarContadores() { 
    campo.on("input", function() {
        let conteudo = campo.val()
        let quantidadePalavras = conteudo.split(/\S+/).length - 1
        $('#contador-palavras').text(quantidadePalavras)
        $('#contador-caracteres').text(conteudo.length)
    })
}

function inicializarCronometro() {
    let tempoRestante = $('#tempo-digitacao').text()
    campo.one("focus", function() {
        let cronometroID = setInterval(function() {
            tempoRestante--
            $('#tempo-digitacao').text(tempoRestante)
            if (tempoRestante < 1) {
                clearInterval(cronometroID)
                finalizarJogo()
            }
        }, 1000)
    })
}

function finalizarJogo() {
    campo.attr("disabled", true)
    campo.toggleClass("campo-desativado")
    inserirPlacar()
}

function inicializaMarcadores() {
    var frase = $('.frase').text()
    campo.on("input", function() {
        var digitado = campo.val()
        var comparavel = frase.substr(0, digitado.length)

        if (digitado == comparavel) {
            campo.addClass("borda-verde")
            campo.removeClass("borda-vermelha")
        } else {
            campo.addClass("borda-vermelha")
            campo.removeClass("borda-verde")
        }
    })
}

function reiniciarJogo() {
    campo.attr("disabled", false)
    campo.val("")
    $('#contador-palavras').text("0")
    $('#contador-caracteres').text("0")
    $('#tempo-digitacao').text(tempoInicial)

    inicializarCronometro()
    campo.toggleClass("campo-desativado")
    campo.removeClass("borda-vermelha")
    campo.removeClass('borda-verde')
}
