alert('Código Funcionando!')// mostra mensagem para usuário
const nomeUsuario = prompt('Olá, usuário, qual é seu nome?')//tbm tem a função de mostrar para o usuário, mas como não está armazenando é preciso criar uma variável, por isso coloca o const. Ela mostra uma msg ao usuário e recebe um valor

//alert('Olá,' + nomeUsuario)//concatenar juntar o alert + o que o dado do usuário em const

let num= Number (prompt('Olá,' + nomeUsuario + ' digite algum número, por favor :) ')) // como ela vai receber resposta pracisa ser vatiável. Tudo que escrever no prompt vai ser txt, se quero que ele receba numero cria o number
//console.log(typeof num)//typeof-tipo de valor que a var armazena


//const sucessor = num +1
//const abtecessor = num + 1

//alert('O sucessor de ' + num + ' é ' + sucessor )
//alert(' O antecessor de ' + num + ' é '+ antecessor)

//Operadores de incremento
const sucessor = num ++ //ao invés de ser +1
console.log(num++)//operador de pós incremento, vai aparecer o ultimo número,  add +1 aparecerá 5
console.log(num)// nada muda, aparecerá 6
console.log(++num)//pré-incrementovai pegar o valor e acrescentar mais um, aparecerá 7

//Operadores de decremento
//console.log(num -1)//pode ser assim
console.log(num--)//vai usar o valor antigo, só depois diminui o valor 7 pré-decremento
console.log(num)
console.log(--num)