'use strict'

function gerarTabuada() {

    const numero = Number(document.getElementById('numero').value)
    const tabela = document.querySelector('tbody')

    // limpar linhas antigas
    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild)
    }

    // gerar tabuada
    for (let i = 1; i <= 10; i++) {

        const linha = document.createElement('tr')

        const colunaExpressao = document.createElement('td')
        const colunaResultado = document.createElement('td')

        colunaExpressao.textContent = `${numero} x ${i}`
        colunaResultado.textContent = numero * i

        linha.appendChild(colunaExpressao)
        linha.appendChild(colunaResultado)

        tabela.appendChild(linha)
    }
}