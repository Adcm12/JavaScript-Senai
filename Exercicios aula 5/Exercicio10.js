// Exercício 10: Excluir uma propriedade
const livro = {
  titulo: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  anoPublicacao: 1967,
  genero: "Realismo Mágico",
  avaliacao: "Obra-prima"
}
delete livro.avaliacao
console.log("Livro com a propriedade 'avaliacao' removida:")
console.log(livro)