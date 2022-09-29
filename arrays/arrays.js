/** */
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
//let arr = [10, 15, 9.8, 'eu sou um txt pelo array', 'olá mundo' , true, false]
//console.log(arr)
/*posições de um array
A primeira posição é a zero e cada posição é representada por um número e os espaços não contam, 7 posições mas 8 valores
*/
//para mostrar apenas um
//console.log( arr[6])
//sempre que digitar um valor que não existe, devolve undefined
//para mudar o valor
////arr[6] = 'outro texto'
//console.log(arr[6])
//arr[8] = 'Agora a posição está dentro do array'
//console.log(arr[8])

/**------------------------------------------------------------ */

const lista = ['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fábio', 'Lárissa']
console.log(lista)
lista.push('Roberta')//add um valor final no array
console.log(lista)
lista.unshift('Gustavo')//add um valor no inicio do array
console.log(lista)
lista.pop()//remove o últimop valor do array
console.log(lista)
lista.shift()//remove o primeiro valor de um array
console.log(lista)
('Júlio')//retorna outra lista
console.log(lista.concat('Júlio'))//retorna outra lista a partir da principal, com o novo valor no final da lista//cria novo array add o valor passado como parâmetro no final
console.log(lista.join('-->'))//pega os valores e gera uma string: João--> Maria--> une os valores com algo no meio