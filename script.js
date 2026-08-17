//Pega as informações da nova transação
const inputValor = document.querySelector('#amount')
const inputData = document.querySelector('#date')
const inputDescricao = document.querySelector('#description')
const inputTipo = document.querySelector('#type')
const btnAdicionar = document.querySelector('.btn-add')

const transacoes = JSON.parse(localStorage.getItem('transacoes')) || []


btnAdicionar.addEventListener('click', adicionarTransacao)

 function adicionarTransacao(event) {
    event.preventDefault()
    let valor = Number(inputValor.value)
    let data = new Date(inputData.value).toLocaleDateString('pt-br')
  
    let descricao = inputDescricao.value
    let tipo = inputTipo.value
    const transacao = {
        valor: valor,
        data: data,
        descricao: descricao,
        tipo: tipo
    }

    transacoes.push(transacao)

    localStorage.setItem('transacoes', JSON.stringify(transacoes))
    mostraHistorico()
}

const tabelaDados = document.getElementById('transaction-list')

mostraHistorico()

function mostraHistorico() {
    tabelaDados.innerHTML = ''
    transacoes.forEach((dado, indice) => {
        
        //Cria a estrutura HTML para os dados da tabela
        const linhaTabela = document.createElement('tr')
        const colunaData = document.createElement('td')
        const colunaDescricao = document.createElement('td')
        const colunaTipo = document.createElement('td')
        const colunaValor = document.createElement('td')

        tabelaDados.append(linhaTabela)
        linhaTabela.append(colunaData)
        linhaTabela.append(colunaDescricao)
        linhaTabela.append(colunaTipo)
        linhaTabela.append(colunaValor)

        colunaData.innerHTML = dado.data
        colunaDescricao.innerHTML = dado.descricao
        colunaTipo.innerHTML = dado.tipo
        colunaValor.innerHTML = dado.valor
    });
}
