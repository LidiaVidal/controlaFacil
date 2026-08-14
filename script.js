//Pega as informações da nova transação
const inputValor = document.querySelector('#amount')
const inputData = document.querySelector('#date')
const inputDescricao = document.querySelector('#description')
const inputTipo = document.querySelector('#type')
const btnAdicionar = document.querySelector('.btn-add')

const transacoes = []

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
}

