// Exercício 4: Criar e manipular uma lista de pessoas
const listaPessoas = [
  { nome: "Carlos Souza", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Beatriz Costa", idade: 35, cidade: "Belo Horizonte" },
  { nome: "Daniel Martins", idade: 28, cidade: "São Paulo" }
]

function mostrarListaPessoas(pessoas) {
  console.log("--- Lista de Pessoas ---")
  for (const p of pessoas) {
    console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Cidade: ${p.cidade}`)
  }
  console.log("------------------------")
}

listaPessoas.push({ nome: "Fernanda Lima", idade: 31, cidade: "Rio de Janeiro" })

mostrarListaPessoas(listaPessoas)

function filtrarPorCidade(pessoas, cidade) {
  const resultado = []
  for (const p of pessoas) {
    if (p.cidade === cidade) {
      resultado.push(p)
    }
  }
  return resultado
}

const pessoasDoRio = filtrarPorCidade(listaPessoas, "Rio de Janeiro")
console.log("Pessoas que moram no Rio de Janeiro:")
console.log(pessoasDoRio)