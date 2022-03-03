let pessoa ={
    nome: 'Johnny',
    idade: 33, 
    altura: 1.70,
    cabelo: 'preto'
}
//string
 let json = JSON.stringify(pessoa);
 console.log(json)
//-------------------------------
 //objeto, array novamrnte
let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo)

//let listaDeCompra = ['Pão', 'Ovo', 'Queijo', 'Carne']
//let converter = JSON.stringify(listaDeCompra)
//console.log(listaDeCompra)