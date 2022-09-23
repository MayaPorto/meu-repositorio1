/**
 * É um tipo especial de estrutura que permite armazenar diversos valores em apenas um local, pode ter outros arreys dentro de outro.
 * Pode assumir strinh, boolean, inteiro, real...
 * Representa um objeto
 */
//colocar dentro dessa var um novo obj array
//let arr = new Array()//pode ser add valores depois
//letarr2 = new Array(5)//vai ter o valor inicial de 5 valores
//forma menor de escrever
//cada valor é separado por virgula e varios tipos de dados
let arr = [10, 15, 9.8, 'eu sou um txt pelo array', 'olá mundo' , true, false]
//console.log(arr)
/*posições de um array
A primeira posição é a zero e cada posição é representada por um número e os espaços não contam, 7 posições mas 8 valores
*/
//para mostrar apenas um
console.log( arr[6])
//sempre que digitar um valor que não existe, devolve undefined
//para mudar o valor
arr[6] = 'outro texto'
console.log(arr[6])
arr[8] = 'Agora a posição está dentro do array'
console.log(arr[8])