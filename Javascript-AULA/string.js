let frase = ' eu sou programador js';
console.log(frase.length); //conta a quantidade de caracteres dentro da string
console.log(frase.indexOf('ro')); //serve para saber se a palavra existe dentro do que estamos buscando, semre que retornar uma número >= 0 singifica que a palavra existe dentro do bloco de código.
console.log(frase.indexOf('php')); // ele irá retornar -1 porque não existe a plavra que estamos procurando dentro da string
console.log(frase.slice(4, 11)); // ele retira os caracteres que estamos solicitnado, mas ele não muda a string, apenas retira os caracteres que estamos solicitando. devemos indicar a posição inicial e final da busca.
//---------------------
console.log(frase);
console.log(frase.trim())//elimina os espaços no início e no fim da frase
console.log(frase.split())// assim ele vai pegar toda a frase e colcoar dentro de um array
console.log(frase.split(''))//agora ele vai dividir todos os caracteres dentro de um array, porque passamos um parametro'[vazio/tudo]'
console.log(frase.split(' '))// colocando um espaço como parametro ele vai dividr a string em array após os espaços
console.log(frase.split('o'))//[ele é o divisor]nesse caso a cada início de letra O ele vai criar um novo parametro dentro do array
//console.log(frase.replace("js", "php"))//ele não gera uma nova frase, ele apenas modifica conforme o pedido
let fraseAntiga = frase.replace(" ", "3")//nesse caso ele só modificou o primeiro espaço que encontrou dentro da string
console.log(fraseAntiga)// ele sempre faz isso só para a primeira ocorrência
//console.log(frase.replace(" ", "3"))
