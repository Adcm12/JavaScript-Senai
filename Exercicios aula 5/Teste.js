let estudante = {
    nome: "Adrian",
    cpf: "123.456.789-00",   
}

estudante.telefone = "1234567890";

const professor = estudante
professor.nome = "Adrian Silva";
console.log(estudante.nome); 
console.log(professor.nome);
console.log(estudante.telefone);

const estudante2 = require('./estudante.json')
console.log(estudante2)
console.log(typeof estudante2)