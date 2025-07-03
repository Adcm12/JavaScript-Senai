/* Sistema de Folha de Pagamento: Você precisa desenvolver uma função para o sistema de RH.
Esta função (calcularSalarioLiquido) deve receber um objeto funcionario com as propriedades
salarioBruto, horasExtras e valorHoraExtra. Calcule o salário bruto total (salário + horas extras)
e, em seguida, aplique um desconto fixo de 10% de INSS para retornar o salário líquido. */

function calcularSalarioLiquido(funcionario) {
    
    const salarioBrutoTotal = funcionario.salarioBruto + (funcionario.horasExtras * funcionario.valorHoraExtra)
    
    
    const descontoINSS = salarioBrutoTotal * 0.10
    
    
    const salarioLiquido = salarioBrutoTotal - descontoINSS
    
    return salarioLiquido
}


const funcionario = {
    salarioBruto: 3000,
    horasExtras: 10,
    valorHoraExtra: 50
}

const salarioLiquido = calcularSalarioLiquido(funcionario)
console.log(`O salário líquido do funcionário é: R$ ${salarioLiquido.toFixed(2)}`)
