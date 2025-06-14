const numeros = [10, 2.5, 36, 12, 5.5];
const alunos = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
const cadastro = [numeros, alunos];

function exibir_nome(nome) {

    if(cadastro[1].includes(nome)) {
        console.log(`O nome ${nome} está cadastrado.`);

        const indice = cadastro[1].indexOf(nome);
        const media = cadastro[0][indice];
        console.log(`A média do aluno ${nome} é: ${media}.`);


    } else {
            console.log(`O nome ${nome} não está cadastrado.`);
        }
    }

exibir_nome('Ana');
exibir_nome('Carlos');
