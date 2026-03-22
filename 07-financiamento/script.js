'use strict'
// conectar botão ao clique
const botao = document.getElementById("btnCalcular");
botao.addEventListener("click", simularFinanciamento);


function simularFinanciamento() {

    //  pegar valores dos inputs (mesmos ids do HTML)
    const valor = Number(document.getElementById("valor").value);
    const taxa = Number(document.getElementById("taxa").value) / 100;
    const parcelas = Number(document.getElementById("parcelas").value);
    

    const tbody = document.getElementById("corpoTabela");


    //  limpar tabela 
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


    //  saldo inicial
    let saldoDevedor = valor;


    // loop das parcelas
    for (let mes = 1; mes <= parcelas; mes++) {

        // juros do mês
        const jurosMes = saldoDevedor * taxa;
        const parcela = saldoDevedor / parcelas

        // total pago no mês
        const totalMes = parcela + jurosMes;

        // atualizar saldo
        saldoDevedor = saldoDevedor + jurosMes - parcela;


        //  criar linha
        const tr = document.createElement("tr");

        tr.appendChild(criarCelula(mes));
        tr.appendChild(criarCelulaMoeda(jurosMes, "col-juros"));
        tr.appendChild(criarCelulaMoeda(parcela));
        tr.appendChild(criarCelulaMoeda(totalMes, "col-total"));
        tr.appendChild(criarCelulaMoeda(saldoDevedor, "col-saldo"));

        // adicionar linha
        tbody.appendChild(tr);
    }
}


// função para criar célula simples
function criarCelula(texto) {
    const td = document.createElement("td");
    td.textContent = texto;
    return td;
}


// função para valores em dinheiro
function criarCelulaMoeda(valor, classe = "") {

    const td = document.createElement("td");

    if (classe !== "") {
        td.classList.add(classe);
    }

    td.textContent = "R$ " + valor.toFixed(2);

    return td;
}