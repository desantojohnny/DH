//const moment = require('moment');

/*const somar = (num1, num2) => num1+num2;
const calculadora = (num1,num2,operacao) => operacao(num1,num2)

console.log(calculadora(10,20,somar))


const dobro = (num1) => (num1*2);
const triplo = (num2) => (num2*3);
const aplicarOne = (num1,operacao) => num1*2; 
const aplicarTwo = (num2,operacao) => num2*3; 
console.log(aplicarOne(2,dobro()))
console.log(aplicarOne(4,triplo()))

function nomeCompleto (nome, sobrenome){
    return nome + " " + sobrenome
}
function saudacao (nome, sobrenome, nomeCompleto){
    console.log ('Olá ' + nomeCompleto(nome, sobrenome));

}
saudacao('Johnny', ' Santo', nomeCompleto)
*/
let pessoa ={
    nome: 'Johnny',
    idade: 33
}
for (let dados in pessoa){
    console.log(pessoa[dados])
}

let time = ['Flamengo', 'Ponte preta', 'Guarani']
for (let dado of time){
    console.log(dado)
}
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for (let dados in bart){
    console.log(bart[dados])
}