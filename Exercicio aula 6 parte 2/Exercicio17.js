/*Biblioteca de Mídia: Desenvolva um pequeno sistema para gerenciar uma biblioteca. Crie um
objeto biblioteca onde as chaves são os nomes dos autores e os valores são arrays de objetos,
cada objeto representando um livro (titulo, anoPublicacao). Adicione uma função que permita
buscar todos os livros de um determinado autor. Utilize a notação de colchetes para acessar os
dados do autor dinamicamente.
*/
const biblioteca = {
  'J.K. Rowling': [
    { titulo: 'Harry Potter e a Pedra Filosofal', anoPublicacao: 1997 }
  ],
  'George Orwell': [
    { titulo: '1984', anoPublicacao: 1949 },
    { titulo: 'A Revolução dos Bichos', anoPublicacao: 1945 }
  ]
}

const buscarLivrosPorAutor = (autor) => {
  return biblioteca[autor] || 'Autor não encontrado'
}

console.log('Livros de George Orwell:', buscarLivrosPorAutor('George Orwell'))
console.log('Livros de J.R.R. Tolkien:', buscarLivrosPorAutor('J.R.R. Tolkien'))
