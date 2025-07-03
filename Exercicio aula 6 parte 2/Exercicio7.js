/*7. Filtro de Clientes Especiais: Em um sistema de CRM, é preciso identificar clientes que fizeram
compras acima de um determinado valor e em um período específico. Crie uma função
(identificarClientesEspeciais) que receba um array de objetos compras (clienteId, valor, data).
A função deve retornar um novo array com os clienteId (sem duplicatas) de clientes que fizeram
compras acima de R$500. Combine .filter() e .map() para extrair e listar os IDs.
*/
const compras = [
  { clienteId: 1, valor: 600, data: '2024-03-15' },
  { clienteId: 2, valor: 300, data: '2024-03-16' },
  { clienteId: 1, valor: 800, data: '2024-03-18' },
  { clienteId: 3, valor: 550, data: '2024-03-20' },
  { clienteId: 2, valor: 450, data: '2024-03-22' }
]

const identificarClientesEspeciais = (compras) => {
  const clientesComComprasAltas = compras.filter(compra => compra.valor > 500)
  const idsClientes = clientesComComprasAltas.map(compra => compra.clienteId)
  return [...new Set(idsClientes)]
}

console.log('IDs de Clientes Especiais:', identificarClientesEspeciais(compras))