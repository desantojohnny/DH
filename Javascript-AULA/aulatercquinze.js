let numeros = [11, 11, 15, 12, 2, 99, 23]

const verificaSeEPar = (numeros) => numeros % 2 === 0;
const resultados = numeros.filter(verificaSeEPar)

console.log(resultados)
console.log(numeros)

let calculo = [2, 4, 6, 8, -5]
const verificaNegativo = calculo.map((calculo) =>
    calculo > 0 ? calculo * -1 : calculo)
console.log(verificaNegativo)
console.log(calculo)