/*Crie uma funçao que receba uma string e verifique se ela e um palindromo,)
uma palavra  que e lida da mesma forma de tras para frente) utilizando o metodo string reverse()
retorne true se for palindromo  e false caso contrario*/

function verificarPalindromo(palavra) {
    // Remove espaços em branco e converte para minúsculas
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    
    // Inverte a string
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    
    // Verifica se a palavra original é igual à palavra invertida
    return palavraLimpa === palavraInvertida;
}
const palavra1 = "arara";
const palavra2 = "banana";  
const resultado1 = verificarPalindromo(palavra1);
const resultado2 = verificarPalindromo(palavra2);
console.log(`A palavra "${palavra1}" é um palíndromo? ${resultado1}`); // true
console.log(`A palavra "${palavra2}" é um palíndromo? ${resultado2}`); // false
