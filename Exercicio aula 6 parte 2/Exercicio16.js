/* Sistema de Blog: Crie um array de objetos posts, onde cada post tem id, titulo, autor, e
comentarios (um array de strings). Escreva uma função que encontre um post por id e adicione
um novo comentário ao seu array de comentarios.
*/
const posts = [
  { id: 1, titulo: 'Primeiros passos com Node.js', autor: 'Adrian', comentarios: ['Ótimo post!'] },
  { id: 2, titulo: 'JavaScript Moderno', autor: 'David', comentarios: [] }
]

const adicionarComentario = (idPost, novoComentario) => {
  const postAlvo = posts.find(p => p.id === idPost)
  if (postAlvo) {
    postAlvo.comentarios.push(novoComentario)
  }
}

adicionarComentario(2, 'Muito útil, obrigado!')
adicionarComentario(1, 'Gostei muito.')
console.log('Posts atualizados:', posts)
