/* Gestão de Tarefas (Kanban): Você tem um array de objetos representando tarefas em um
quadro Kanban, cada uma com id, titulo, responsavel e status ('A Fazer', 'Em Andamento',
'Concluído'). Crie uma função (filtrarTarefasPorStatus) que receba a lista de tarefas e um status,
e retorne um novo array contendo apenas as tarefas com aquele status. Utilize .filter() e usa um for para listar. */

function filtrarTarefasPorStatus(tarefas, status) {
    return tarefas.filter(tarefa => tarefa.status === status)
}

const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", responsavel: "Alice", status: "A Fazer" },
    { id: 2, titulo: "Revisar código", responsavel: "Bob", status: "Em Andamento" },
    { id: 3, titulo: "Implementar testes", responsavel: "Charlie", status: "Concluído" },
    { id: 4, titulo: "Documentar API", responsavel: "Alice", status: "A Fazer" }
]
const statusFiltro = "A Fazer"

const tarefasFiltradas = filtrarTarefasPorStatus(tarefas, statusFiltro)
console.log(`Tarefas com status "${statusFiltro}":`)

tarefasFiltradas.forEach(tarefa => {
    console.log(`ID: ${tarefa.id}, Título: ${tarefa.titulo}, Responsável: ${tarefa.responsavel}`)
})


