/*Processamento de Log: Você recebeu um log de sistema como um array de strings, onde cada
string é um JSON: ['{"level": "info", "message": "Usuário logado"}', '{"level": "error",
"message": "Falha na conexão com o banco"}']. Crie uma função que parseie cada string JSON
e, usando .filter(), retorne apenas os logs que possuem o level "error".
*/

const logsJson = [
  '{"level": "info", "message": "Usuário logado"}',
  '{"level": "warning", "message": "Memória quase cheia"}',
  '{"level": "error", "message": "Falha na conexão com o banco"}'
]

const filtrarLogsDeErro = (logs) => {
  const objetosLog = logs.map(logString => JSON.parse(logString))
  return objetosLog.filter(log => log.level === 'error')
}

console.log('Logs de erro:', filtrarLogsDeErro(logsJson))