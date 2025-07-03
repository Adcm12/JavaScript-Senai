/*Consumo de API (Simulação): Você recebeu uma string em formato JSON de uma API externa
que representa os dados de um usuário: '{"id": 101, "nome": "Ana Clara", "dados_pessoais":
{"idade": 28, "profissao": "Engenheira de Software"}}'. Crie uma função (importarUsuario) que
receba esta string, a converta para um objeto JavaScript e imprima no console a profissão do
usuário.
*/
const jsonUsuario = '{"id": 101, "nome": "Ana Clara", "dados_pessoais": {"idade": 28, "profissao": "Engenheira de Software"}}'

const importarUsuario = (jsonString) => {
  const usuario = JSON.parse(jsonString)
  console.log('Profissão do usuário:', usuario.dados_pessoais.profissao)
}

importarUsuario(jsonUsuario)

