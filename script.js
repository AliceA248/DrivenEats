let pratoEscolhido, prato, bebida,sobremesa, total = 0 ;

function escolherPrato(botao) {
    const botaoSelecionado = document.querySelector(".pratos .selecionado");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionado")
            ;
    }
    botao.classList.add("selecionado");
    console.log(botao)
    pratoEscolhido = botao.querySelector(".valor-pago")
    if (pratoEscolhido !== null) {
        pratoEscolhido = pratoEscolhido.innerHTML;
        total += pratoEscolhido;
    }
    console.log(total)

    fecharPedido();
}

let bebidaEscolhida;

function escolherBebida(botao2) {
    const botaoSelecionado2 = document.querySelector(".bebidas .selecionado");
    if (botaoSelecionado2 !== null) {
        botaoSelecionado2.classList.remove("selecionado");
        total += bebidaEscolhida;
    }
    botao2.classList.add("selecionado");
    console.log(botao2)
    bebidaEscolhida = botao2.querySelector(".valor-pago")
    if (bebidaEscolhida !== null) {
        bebidaEscolhida = bebidaEscolhida.innerHTML;
        total += bebidaEscolhida;
    }
    console.log(total)

    fecharPedido();
}

let sobremesaEscolhido;

function escolherSobremesa(botao3) {
    const botaoSelecionado3 = document.querySelector(".sobremesa .selecionado");
    if (botaoSelecionado3 !== null) {
        botaoSelecionado3.classList.remove("selecionado");
        total += sobremesaEscolhido;
    }
    botao3.classList.add("selecionado");
    sobremesaEscolhido = botao3.querySelector(".valor-pago")
    console.log(sobremesaEscolhido)
    sobremesaEscolhido = botao3.innerHTML;
    sobremesaEscolhido = botao3.querySelector(".valor-pago")
    if (sobremesaEscolhido !== null) {
        sobremesaEscolhido = sobremesaEscolhido.innerHTML;
        total += sobremesaEscolhido;
    }
    console.log(total)



    fecharPedido();
}

function fecharPedido() {
    if (
        pratoEscolhido !== undefined &&
        bebidaEscolhida !== undefined &&
        sobremesaEscolhido !== undefined
        
    ) {
        const botaoFechar = document.querySelector(".botao");
        botaoFechar.classList.add("escondido");
        botaoFechar.innerHTML = "Fechar Pedido";

    }
}
