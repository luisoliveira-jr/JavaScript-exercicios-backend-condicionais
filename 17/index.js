//Exercício 17 - Extrato de Compra Online
//Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, faça um programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.

//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;

//Identificar o valor da parcela
let valorDaParcela = valorDoProduto / quantidadeDoParcelamento;

//Quantidade de parcelas restantes
let restaParcela = quantidadeDoParcelamento - (valorPago / valorDaParcela);

console.log(`Restam ${restaParcela} parcelas de R$${valorDaParcela}`)


