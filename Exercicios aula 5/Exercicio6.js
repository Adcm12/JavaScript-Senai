// Exercício 6: Criação de objetos de conta bancária e cliente
const contaBancaria = {
  titular: "David Marcano",
  saldo: 1000,
  depositar: function(valor) {
    this.saldo += valor
  },
  sacar: function(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para o saque.")
    } else {
      this.saldo -= valor
    }
  }
}

const cliente = {
  nome: "Adrian Castillo",
  conta: contaBancaria
}

function mostrarSaldo(objCliente) {
  console.log(`Cliente: ${objCliente.nome}`)
  console.log(`Saldo da conta: R$ ${objCliente.conta.saldo}`)
}

mostrarSaldo(cliente)
cliente.conta.depositar(500)
console.log("Saldo após depósito de 500:")
mostrarSaldo(cliente)
cliente.conta.sacar(200)
console.log("Saldo após saque de 200:")
mostrarSaldo(cliente)
cliente.conta.sacar(2000)
mostrarSaldo(cliente)