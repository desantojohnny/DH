let frutas = ["Morango", "Laranja", "Uva"]
let frutasDois = ["Melancia", "Abacati", "Carambola"]

let listaCompleta = [...frutas,...frutasDois]
console.log(listaCompleta)

let carros = {
    marca: "VW",
    ano: "2014",
}

let carrosTwo = {
    tipo: 'Chevrolet',
    year: 2010,
    ...carros
}

let proprietario = {
    proprie: 'Bruna',
    ...carrosTwo
}

console.log(proprietario);

function letras (...valor){
    console.log(valor)
}
letras(10, 20, 30, 40 , 50, 60, 70 )

let notas = [9.3, 8.5, 3.2, 7, 5, 10];
Math.min(...notas);
console.log(notas)