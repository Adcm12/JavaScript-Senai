/*Cópia Segura de Objetos: Escreva uma função (clonarPerfil) que receba o perfilUsuario do
exercício 8 e retorne uma cópia profunda (deep copy) do objeto. Pesquise como fazer isso em
JavaScript (dica: JSON.stringify e JSON.parse é uma forma simples) para garantir que o objeto
aninhado configuracoes também seja uma cópia.
*/

import perfilUsuario from './Exercicio8.js'

const clonarPerfil = (perfil) => {
  return JSON.parse(JSON.stringify(perfil))
}

const perfilCopiado = clonarPerfil(perfilUsuario)
perfilCopiado.configuracoes.tema = 'vermelho' // Alterando a cópia

console.log('Tema original:', perfilUsuario.configuracoes.tema)
console.log('Tema copiado:', perfilCopiado.configuracoes.tema)