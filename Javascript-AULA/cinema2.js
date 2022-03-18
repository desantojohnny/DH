const catalago = [
    {
      codigo: 1,
      titulo: 'Interstellar',
      duracao: 280,
      atores: ['Matthew McConaughey', 'Anne Hathaway'],
      anoDeLancamento: 2014,
      emCartaz: false,
    },
    {
      codigo: 2,
      titulo: 'O Rei Leão',
      duracao: 109,
      atores: ['Matthew Broderick', 'Ernie Sabella'],
      anoDeLancamento: 1994,
      emCartaz: false,
    },
  ];
  
  const novoFilme = {
    codigo: 3,
    titulo: 'Homem-Aranha: Sem Volta para Casa',
    duracao: 150,
    atores: ['Tom Holland', 'Zendaya', ' Benedict Cumberbatch'],
    lancamento: 2021,
    emCartaz: true,
  };
  
  function adicionaFilme(filme) {
    catalago.push(filme)
  }
  
  adicionaFilme(novoFilme)
  
  // console.log(catalago)
  
  function procuraFilmePeloCodigo(id) {
    return catalago.find((filme) => filme.codigo === id);
  }
  
  // console.log(procuraFilmePeloCodigo(3))
  
  //Desafio reescreva essa função utilizando a função anterior.
  function modificaStatusEmCartaz(id) {
    const auxiliar = catalago.find((filme) => filme.codigo === id);
    auxiliar.emCartaz = !auxiliar.emCartaz
  }
  
  modificaStatusEmCartaz(1)
  
  console.log(catalago)

//daqui para baixo código Johnny
  function listarFilmesEmCartaz (){ 
    for(let i=0; i<=3; i++){
        let resultado = emCartaz ==false? "O filme está disponível" : "O Filme saiu de cartaz";
    }
}
listarFilmesEmCartaz()
console.log(listarFilmesEmCartaz())

