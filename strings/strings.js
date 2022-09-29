//podemos declaras strings de várias formas. No JS Delimitação de string
//com "" e '' para quebra de linha usar \n
const aspasSimples= 'Olá, \nmundo'
console.log(aspasSimples)

//caractere de escapa

const aspasDuplas="Outra mensagem"
console.log(aspasDuplas)

const textoComCrase =`Olá eu sou JavaScript, eu sou melhor que phython`// permite quebra de linha

//Métodos(funções que executam uma tarefa pré-determinada) das string
const texto = ' O JavaScript foi criado alguns anos após o Python. No entanto, o JavaScript é bem mais bacana'

console.log(texto)
console.log(texto.toUpperCase())//deixa todo txt maiúsculo
console.log(texto.toLowerCase)
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens'))
console.log(texto[5], texto[17])
console.log(texto.substring[2,12])//corta a posição 2 e a 12 é uma a mais)
console.log(texto.replace('JavaScript', 'Rust'))
console.log(texto.replaceAll('JavaScript', 'Kotlin'))//case sensitive, escrever igual

const html = '<DOCTYPE html>\n<html></html>'

console.log(html.startsWith(' <DOCTYPE html>'))
console.log(html.startsWith(' batata '))
console.log(html.endsWith(' </body> '))

let senha = 'sonic'

console.log(senha.length )
console.log(senha.length >= 8)
