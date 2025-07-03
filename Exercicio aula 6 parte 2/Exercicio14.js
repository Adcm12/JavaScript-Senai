/* Configuração de Aplicação via JSON: Um arquivo config.json é usado para definir as
configurações de um sistema. Crie uma string JSON que represente uma configuração com
nomeDoApp, versao, e uma lista de modulosAtivos (ex: ['dashboard', 'relatorios', 'usuarios']).
Escreva um script que parseie essa string e verifique se o módulo 'relatorios' está na lista de
módulos ativos.
*/
const configJson = '{"nomeDoApp": "MeuSistema", "versao": "1.2.0", "modulosAtivos": ["dashboard", "relatorios", "usuarios"]}'

const configObjeto = JSON.parse(configJson)
const temModuloRelatorios = configObjeto.modulosAtivos.includes('relatorios')

console.log('O módulo "relatorios" está ativo?', temModuloRelatorios)