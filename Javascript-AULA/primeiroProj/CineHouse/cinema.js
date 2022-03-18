//const http = require('http');
//const port = 3000;
//const servidor = http.createServer(function (request, response)) {
//    response.end(console.log(catalogo))
//}
//servidor.listen(port)

const catalogo = [
    {
    codigo: 33,
    titulo: 'campinas',
    duracao: 180,
    atores: ['João', 'Marcos', 'Pedro'], 
    anoDeLancamento: 2019, 
    emCartaz: false,
},
{
    codigo: 32,
    titulo: 'Limeira',
    duracao: 190,
    atores: ['Margarida','Luiza','Marta'], 
    anoDeLancamento: 2018, 
    emCartaz: true,
}
]
//module.exports=catalogo

//function adicionarFilme() 
//{ catalogo.push("TestedeArrays") 
//console.log(catalogo) 
//} 
//adicionarFilme()

//function buscarFilme() {
//    catalogo.indexOf ("São Paulo")
    //console.log(buscarFilme)
//}
//buscarFilme()

//function alterarStatus() {
//    catalogo.includes(35)
//}
//alterarStatus()

//console.log(catalogo)

//const cinema = {
//    nome: "CineHouse"
//}
//module.exports = cinema;

function listarFilmesEmCartaz (){ 
    for(let i=0; i==catalogo; i++){
        let resultado = catalogo ==true? "O filme está disponível" : "O Filme saiu de cartaz";
    }
}
listarFilmesEmCartaz()
console.log(listarFilmesEmCartaz())
//aqui devemos criar um loopfor e fazer ele percorrer a lista de filmes=catalogo
//devemos retorno o filme disponível ou true
// a parametro que ele deve receber é o id do filme, devemos alterar o status se true ser'false vc.
// criarmos tudo em if ternário

