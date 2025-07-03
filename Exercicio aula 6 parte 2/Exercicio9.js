/* Carrinho de Compras: Simule um carrinho de compras usando um objeto. Crie um objeto
carrinho com uma propriedade itens (um array de objetos, cada um com idProduto, nome e
quantidade) e um método adicionarItem(item). Este método deve verificar se um item com o
mesmo idProduto já existe; se sim, apenas incrementa a quantidade, se não, adiciona o novo
item ao array itens.
*/
const carrinho = {
  itens: [],
  adicionarItem(item) {
    const itemExistente = this.itens.find(i => i.idProduto === item.idProduto)
    if (itemExistente) {
      itemExistente.quantidade += item.quantidade
    } else {
      this.itens.push(item)
    }
  }
}

carrinho.adicionarItem({ idProduto: 1, nome: 'Placa de Vídeo', quantidade: 1 })
carrinho.adicionarItem({ idProduto: 2, nome: 'SSD 1TB', quantidade: 1 })
carrinho.adicionarItem({ idProduto: 1, nome: 'Placa de Vídeo', quantidade: 1 })
carrinho.adicionarItem({ idProduto: 3, nome: 'Fonte 600W', quantidade: 2 })
carrinho.adicionarItem({ idProduto: 2, nome: 'SSD 1TB', quantidade: 2 })

console.log('Carrinho de compras:', carrinho.itens)
