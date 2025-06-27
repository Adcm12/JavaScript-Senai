// Exercício 3: Criação de objeto pessoa e função para mostrar informação

const pessoa = {
  nome: "Ana Silva",
  idade: 30,
  solteiro: true,
  hobbies: ["Leitura", "Caminhada", "Cinema"]
}

function mostrarInfoPessoa(objPessoa) {
  console.log("Nome:", objPessoa.nome, `(tipo: ${typeof objPessoa.nome})`)
  console.log("Idade:", objPessoa.idade, `(tipo: ${typeof objPessoa.idade})`)
  console.log("Solteiro:", objPessoa.solteiro, `(tipo: ${typeof objPessoa.solteiro})`)
  console.log("Hobbies:", objPessoa.hobbies.join(", "), `(tipo: ${typeof objPessoa.hobbies})`)
}

mostrarInfoPessoa(pessoa)

// Exercício 4: Adicionar a propriedade de endereço e atualizar a função

pessoa.endereco = {
  rua: "Rua das Flores",
  cidade: "São Paulo",
  estado: "SP"
}

function mostrarInfoPessoaAtualizada(objPessoa) {
  console.log("Nome:", objPessoa.nome)
  console.log("Idade:", objPessoa.idade)
  console.log("Solteiro:", objPessoa.solteiro)
  console.log("Hobbies:", objPessoa.hobbies.join(", "))
  console.log("Endereço:")
  console.log("  Rua:", objPessoa.endereco.rua)
  console.log("  Cidade:", objPessoa.endereco.cidade)
  console.log("  Estado:", objPessoa.endereco.estado)
}

mostrarInfoPessoaAtualizada(pessoa)