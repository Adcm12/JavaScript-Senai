// Exercício 2: Crie um objeto que represente um livro, contendo propriedades como título, autor, ano de publicação, gênero e idade de publicação (em anos).

const anoAtual = new Date().getFullYear()

const livro = {
    titulo: "Harry Potter e a Câmara Secreta",
    autor: "J.K. Rowling",
    anoPublicacao: 1998,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1998 
}

const mostrarDetalhes = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}\nIdade de Publicação: ${livro.idadePublicacao} anos`
console.log(mostrarDetalhes)

