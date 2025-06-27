//  a) e b) Leer un archivo JSON y convertirlo a un objeto JavaScript
const dadosAnimais = require('./Exercicio4.json')

console.log('--- Iniciando Manipulação de JSON ---')
console.log('\nContenido del archivo animales.json (leído con require):\n', dadosAnimais)

// c) Agregar un nuevo animal al objeto
const novoAnimal = {
  "id": 4,
  "nome": "Pinguim",
  "tipo": "Ave",
  "habitat": "Antártida"
}

dadosAnimais.animais.push(novoAnimal)
console.log('\n--- Animal Adicionado ---')
console.log('Objeto após adicionar Pinguim:\n', dadosAnimais)

// d) Modificar el habitat de un animal
const idAnimalParaModificar = 1
const animalParaModificar = dadosAnimais.animais.find(animal => animal.id === idAnimalParaModificar)

if (animalParaModificar) {
  animalParaModificar.habitat = "Selva"
  console.log(`\n--- Habitat Modificado (Leão para ${animalParaModificar.habitat}) ---`)
  console.log('Objeto após modificar Leão:\n', dadosAnimais)
}

// e) Remover un animal
const idAnimalParaRemover = 2
const indiceAnimalParaRemover = dadosAnimais.animais.findIndex(animal => animal.id === idAnimalParaRemover)
if (indiceAnimalParaRemover !== -1) {
  const animalRemovido = dadosAnimais.animais.splice(indiceAnimalParaRemover, 1)
  console.log(`\n--- Animal Removido (${animalRemovido[0].nome}) ---`)
  console.log('Objeto após remover Águia:\n', dadosAnimais)
}

// f) Convertir el objeto modificado a string JSON
const jsonModificado = JSON.stringify(dadosAnimais, null, 2)
console.log('\n--- Objeto Modificado convertido de volta para string JSON ---\n', jsonModificado)

// g) Imprimir el objeto JavaScript final
console.log('\n--- Objeto JavaScript FINAL RESULTANTE das operações ---')
console.log(dadosAnimais)
