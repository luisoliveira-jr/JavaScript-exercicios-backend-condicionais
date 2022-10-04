//Exercício 13 - Compra com Desconto
// Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado. O valor final do produto após o desconto pode ser encontrado com a fórmula: valorFinal = valorDoProduto - (valorDoProduto * desconto)

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

//Valor final (com desconto) em R$
let valorFinal

if (tipoDePagamento == "dinheiro" || tipoDePagamento == "debito") {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.1)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal}`)
} else if (tipoDePagamento == "credito") {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal}`)
} else if (tipoDePagamento == "cheque") {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal}`)
} 