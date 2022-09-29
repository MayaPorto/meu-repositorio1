/**
 * Estruturas de repetição while - enquanto
 */

 let precoProduto = parseFloat(prompt('Qual o preço do produto?'))//recebendo preço produto, transformando o valor para decimal

 while (isNaN(precoProduto) == true || precoProduto<= 0) {
    alert(' O preço digitado é inválido, por favor informe o preço apenas com numeros, sem caracteres especiais')
    precoProduto = parseFloat(prompt(' Qual o preço do produto?'))
 }


 const mensagem = `
 Informe o método de pagamento:
 Digite 1 para pagamento em dinheiro
 Digite 2 para pagamento em cheque
 Digite 3 para pagamento em cartão
 `
 let metodoDePagamento = parseInt(prompt(mensagem))

 while (metodoDePagamento < 1 || metodoDePagamento > 3){
    alert('Metodo de pagamento inválido. Selecione de novo')
    metodoDePagamento = parseInt(prompt(mensagem))
 }
 
 console.log(precoProduto)
 console.log(metodoDePagamento)

 //Estruturas de condição
/**
 * Se o valor da constante metododepagamento for 1 ou 2, significa que a pessoa possuirá um desconto de 10% do produto. Vai comparar o tipo não valor
 */
if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9
    alert(`O preco final do pagamento é ${precoFinal.toFixed(2)} reais`)
    } else if (metodoDePagamento == 3) {
    /**
     * 1 parcela  = 15% de desconto
     * 2 parcelas = preco do produto
     * 3 ou mais = acréscimo de 10% do produto
     */
        const parcelas = parseInt(prompt('Informe a quantidade de parcelas'))   
        if (parcelas == 1) {
            const precoFinal = precoProduto * 0.85
            alert('Metodo de pagamento selecionado: cartão de crédito')
        } else if (parcelas == 2) {
            alert(`O preço final do pagamento é ${precoProduto} reais`)
        } else {
            const precoFinal = precoProduto * 1.10
            alert(`O preço final do pagamento é ${precoProduto} reais`)
    
        }// como essa é a última opção não é preciso if (parcelas >= 3)
    
    }
    
    /**if (metodoDePagamento == 3) {
        alert('Metodo de pagamento selecionado: cartão de crédito')
    }*/
    