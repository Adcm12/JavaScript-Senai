/* Placar de Jogo: Crie uma função que gerencia o placar de um jogo. Ela deve receber um array
de objetos jogadores (nome, pontos). A função deve usar .map() para retornar um novo array
de objetos, adicionando uma propriedade classificacao a cada jogador com base em sua
pontuação (ex: 'Ouro' para >100 pontos, 'Prata' para >50, 'Bronze' para o resto).
*/
const jogadores = [
  { nome: 'Ana', pontos: 120 },
  { nome: 'Bruno', pontos: 75 },
  { nome: 'Carla', pontos: 40 }
]

const classificarJogadores = (jogadores) => {
  return jogadores.map(jogador => {
    let classificacao
    if (jogador.pontos > 100) {
      classificacao = 'Ouro'
    } else if (jogador.pontos > 50) {
      classificacao = 'Prata'
    } else {
      classificacao = 'Bronze'
    }
    return { ...jogador, classificacao }
  })
}

console.log('Placar classificado:', classificarJogadores(jogadores))