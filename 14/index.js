//Exercício 14 - Controle de Consumo de Água Ingerida
//  Faça um programa que verifica a quantidade de água ingerida e imprima a mensagem com o diagnóstico conforme na tabela acima.


//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida <= 1.5) {
    console.log(`Risco Alto - Você está ingerindo pouquíssima água, beba mais água!`)
} else if (quantidadeDeAguaIngerida > 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log(`Risco Moderado - Você está ingerindo pouca água, beba mais!`)
} else if (quantidadeDeAguaIngerida > 3) {
    console.log(`Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!`)
} 
