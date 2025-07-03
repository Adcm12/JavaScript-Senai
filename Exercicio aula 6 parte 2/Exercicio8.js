/*Perfil de Usuário: Crie um objeto perfilUsuario que contenha dados como nome, email e um
objeto aninhado configuracoes com as propriedades tema: 'escuro' e notificacoes: true. Crie
uma função (alternarTema) que receba o objeto perfilUsuario e alterne o valor da propriedade
tema entre 'claro' e 'escuro'.
*/
const perfilUsuario = {
  nome: 'Carlos Silva',
  email: 'carlos.silva@example.com',
  configuracoes: {
    tema: 'oscuro',
    notificacoes: true
  }
}

const alternarTema = (usuario) => {
  usuario.configuracoes.tema = usuario.configuracoes.tema === 'oscuro' ? 'claro' : 'oscuro'
}

console.log('Tema antes:', perfilUsuario.configuracoes.tema)
alternarTema(perfilUsuario)
console.log('Tema depois:', perfilUsuario.configuracoes.tema)

export default perfilUsuario