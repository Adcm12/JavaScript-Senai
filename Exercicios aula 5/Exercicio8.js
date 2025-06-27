// Exercício 4: Adicionar e verificar uma propriedade 'avaliacao'
const livro = {
  titulo: "A Revolução dos Bichos",
  autor: "George Orwell",
  anoPublicacao: 1945,
  genero: "Sátira",
  avaliacao: null
}

if (livro.avaliacao === null) {
  livro.avaliacao = "Excelente"
} else {
  console.log("O livro já possui uma avaliação.")
}
console.log(livro)