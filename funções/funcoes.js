/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */
/**
 * Parâmetros
 * São valores que passamos para as funções, para que elas utilizem dentro delas 
 * f(x) = ax + b
 * document.write(mensagen)
 */

 function cumprimentar(mensagen, repetir){
    for (let i = 1; i <= repetir; i++){
        alert(mensagen)
    }
    
}


 function maiorValor(a, b){
    if (a > b) {
        return a
    }else {
        return b
    }
 }
 console.log(maiorValor(5, 10))

 const n1 = parseInt(prompt('Informe o primeiro número'))//7
 const n2= parseInt(prompt('Informe o segundo número'))//3
 alert(`O maior número entre esses é ${maiorValor(n1, n2)}`)

/*cumprimentar('Olá mundo!', 3)
cumprimentar('Eu gosto muito do javascript!')
cumprimentar('Javascript sova o C#!')*/


