/* 5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as
seguintes propriedades:
    id (number): identificador da pessoa.
    nome (string): nome da pessoa.
    idade (number): idade da pessoa
Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função
para fazer uma cópia do objeto pessoaOriginal.
Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma
propriedade.
Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações
feitas no objeto modificado não afetaram o objeto original. */

const pessoaOriginal = {
    id: 1,
    nome: "Adrian",
    idade: 21
    };

function copiaObjeto(objeto) {
    return { ...objeto };
}
const pessoaCopia = copiaObjeto(pessoaOriginal);
pessoaCopia.idade = 22; 

console.log("Objeto Original:", pessoaOriginal);
console.log("Objeto Copiado e Modificado:", pessoaCopia);
