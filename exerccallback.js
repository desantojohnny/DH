/*function dobro (num1){
    return num1*2
}
function triplo (num2){
    return num2*3
}
function aplicar (x, operador){
    return num1*operador
    return num2*operador
}


function dobro(num1){
    return num1*2
}
function triplo(numb2){
    return numb2*3
}
dobro(2)
console.log(dobro)
triplo(3)
console.log(triplo)


function dobro (number){
    console.log(number)
}
dobro(2)


//Temos um array com numeros definidos e queremos filtrar aqueles que são maiores de 18.

//Seu trabalho será definir a variável maiores e armazenar nela os números que cumpram com essa condição, utilizando o método filter.

let numeros = [12,34,22,46,18,29,44,43,39]

let numerosMaiores = numeros.filter(function(valor){
    return valor < 18
})
console.log(numerosMaiores)


let listadobro = numeros.map(function (valor){
    return valor *2
   
});
console.log(listadobro)


let listaNumerosSomados = numeros.reduce(function(resultado, valor){
    return resultado + valor   
})
console.log(listaNumerosSomados)

numeros.forEach(function (valor) {
console.log("O valor é: "+valor);
})


let pessoas={
    nome: "Johnny",
    idade: 33,
    profissao: "Programador"
}

for (let prop in pessoas){
    console.log(pessoas[prop])
}

let time = ["Flamento", "Ponte Preta", "Guanari", "Inter"]
for (let valor of time){
    console.log(valor)
}

let dataAtual = new Date()

const data = new Date('1988-13-11')
console.log(data.getDay())
console.log(data.getFullYear())

//criando a minha propria data

//let minhaData = new Date ('1988-13-11')
//console.log(minhaData.getDay())
//console.log(minhaData.getFullYear())

let person ={
    newName:"Bruna",
    age: 30,
    professions:"Gerente",
    car:"Palio"
}
let {newName,age} = person;
console.log(newName)//deve chamar o objeto que você desestruturou

let listaCompras = ["Pão", "Queijo", "Leite", "Biscoito"]
let [item0, item1] = listaCompras
console.log(item1)

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let[posicao1,posicao2,posicao3,posicao4,posicao5] = destinosIncriveis;

console.log(posicao2);
//let[China] = destinosIncriveis
console.log(posicao4)
*/

