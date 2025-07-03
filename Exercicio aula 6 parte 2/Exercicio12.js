/* Exportação de Dados para API: Crie uma função (exportarDadosParaJSON) que receba um
array de objetos (como a lista de tarefas do exercício 4) e o converta para uma string JSON
formatada (com indentação). Isso simula a preparação de dados para serem enviados em uma
requisição HTTP POST.
*/

const tarefas = [
    { id: 1, descricao: 'Estudar JavaScript', concluida: true },
    { id: 2, descricao: 'Fazer compras', concluida: false },
    { id: 3, descricao: 'Ler um livro', concluida: false }
]

const exportarDadosParaJSON = (dados) => {
  return JSON.stringify(dados, null, 2)
}

console.log('Dados em JSON formatado:', exportarDadosParaJSON(tarefas))

