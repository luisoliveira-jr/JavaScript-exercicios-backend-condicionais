//Exercício 11 - Valor da parcela do Sucesso Compartilhado
//a) Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima uma mensagem bonita na tela, com o valor em reais.

/* //renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let valorDaParcela = (rendaMensalEmCentavos * 0.18) / 100;

if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 180000000) {
    console.log(`O valor da parcela é R$ ${valorDaParcela},00`)
} else if (mesesDecorridos > 60 || totalJaPagoPeloAluno >= 180000000) {
    console.log(`o aluno não deve pagar mais nada, pois já quitou a dívida.`)
} */

//b) Altere o seu programa anterior para que, quando o valor da parcela a ser pago for 0, a mensagem explique porque o aluno não precisa pagar nada naquele mês.

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let valorDaParcela = (rendaMensalEmCentavos * 0.18) / 100;

if (rendaMensalEmCentavos < 200000) {
    console.log(`O valor da parcela desse mês é R$ 0,00. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
} else if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 180000000) {
    console.log(`O valor da parcela é R$ ${valorDaParcela},00.`)
} else if (mesesDecorridos > 60 || totalJaPagoPeloAluno >= 180000000) {
    console.log(`o aluno não deve pagar mais nada, pois já quitou a dívida.`)
}