/* Validador de Força de Senha: Para o módulo de segurança de um novo aplicativo, crie uma
função (validarSenha) que recebe uma string (senha). A função deve retornar true apenas se a
senha tiver no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número. */

function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

    return regex.test(senha)
}

const senha1 = "SenhaForte123"
const senha2 = "senhaFraca"

console.log(`A senha "${senha1}" é válida? ${validarSenha(senha1)}`)
console.log(`A senha "${senha2}" é válida? ${validarSenha(senha2)}`)