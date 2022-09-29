/**
 * Operadores de Comparação
 */
//verdadeiro(true) ou falso(false)

//igualdade - se são iguais
const msg ='Eu sou uma mensagem'// esse igual como atribuição 
const msg2 = 'Eu sou outra mensagem'

console.log(msg == msg2) //igual como comparação. Sairá false


const num = 5
const num2 = 5

console.log(num == num2) // true

let a = 78
let b = '78'

console.log(a == b)// ele testa o conteúdo da variável, não seu tipo, sendo assim, será true. Isso no JS

// identicos
console.log(a === b) // agora será false, uma é number outra é string - false

let c = 5//Number
c = 'Olá mundo' // será sunstituído por string

//diferença !=

console.log(msg != msg2)//true

console.log(a != b)//false. testa o conteúdo, não o tipo

console.log(a !== b)//true. testa o tipo da variável e o conteúdo

//< ou > <= ou>=

a = 56
b = 30
let v = 500
let d = 500

console.log(a > b)
// true
console.log(c >= d)//true
console.log(3 , 7,5) //true
console.log(7.5 < 7.5)//false

//Resultados booleanos