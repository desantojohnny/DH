let meuPais = { //quando colocamos a chave falamos para o JS que esse é um objeto
    nome: 'Brasil',
    populacao: 123456789876,
    capital: 'Brasilia',
    dizerNacionalidade: function(){
        return 'Nasci no ' + this.nome //se eu usar o console.log vai dar um undefined porque o pais não retorna nada
    }
}
console.log(meuPais.capital) // para acessar o objeto literal citado dentro da variável, vamos usar o ponto e o nome do objeto
console.log(meuPais['nome'])//outra forma de acessar o objeto é usand os [] e indicando a posiça2o, caso saibamos a posição
console.log(meuPais.dizerNacionalidade());

let carro = {
    marca: 'Fiat',
    modelo: 'Gol',
}
//let carro = {
//    marca = 'VW',
//    modelo = 'Gol',
//} para não fazermos isso de cópiar, vamos criar uma função construtora que irá smepre iniciar o nome com a LETRA MAIÚSCULA

function Carros (valorMarca, valorModelo) { //função construtora
    this.marca = valorMarca; // aqui estamos pedindo para ele criar uma propriedade interna com o nome de MARCA e o valor de valorMarca
    this.modelo = valorModelo;
}
console.log(carro)
console.log(new Carros("Renault", "Clio"))