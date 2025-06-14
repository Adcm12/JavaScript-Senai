/*Crie uma arrow fuction chamada calculaPotencia que receba dois parametros
base e expoente e retorne a potencia da base elevada ao expoente.*/

const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
}   
const base = 2;
const expoente = 3;
const resultado = calculaPotencia(base, expoente);
console.log(`A potência de ${base} elevado a ${expoente} é: ${resultado}`); // A potência de 2 elevado a 3 é: 8
