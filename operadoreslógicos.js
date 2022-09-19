/**
 * Operadores lógicos
 */

//E  && - todas condições serem verdadeiras, para passar precso ter uma média de 7,0 e 80% de frequencia

//tabela verdade - mostra a lógica dos operadores lógicos
//v-- verdadeiro
//f-- false
/** 
 * VV - V
 * FV - F
 * VF- F
 * FF- f
*/
//ex email e senha na página de login, as duas devem ser verdadeiras

//média precisa ser maior ou igual 7 e ter no mínimo 80% presença
const media= (3.5 + 6 + 10) / 3
const preseca= 0.7

console.log(media >= 7 && presenca >= 0.8)// se a primeira condição for false ele nem testará a aoutra


/**const media= (7 + 10 + 10) / 3
const preseca= 0.7

console.log(media >= 7 && presenca >= 0.8) ainda daá false pa a media é menor**/

//Operador OU || - nem todas as condições precisam ser verdaddeiras
 /**
  * tabela verdade
  * V V = V
  * V F = V
  * F V = V
  * F F = F
  */

 console.log(4 > 7 || 3 < 2)// false
 console.log(5 > 3.5 || 7 > 8)// a primeira é true, então nem vai para a segunda, pois precisa de 1 só true

 //para entrar na vaga tem que ser SP ou Mg 
 const estado= 'CE'
 console.log( estado == 'SP' || estado == 'MG')// false

 /**
  * Operador de negação !
  */

/**
 * Tabela Verdade
 * Not V = F
 * Not F = V
 * reverte o número booleano
 * ex: se a pessoa não estiver logada, não acessa meu site
 */
const resultado = 5 < 3 //false

console.log(!resultado)//reverte o valor se torna verdadeiro
console.log(!false)//sai verdadeiro

//site para testar se a pessoa está logada ou não

const logado = false

if (!logado) {
    console.log('Você não está logado, saia daqui!')
}







