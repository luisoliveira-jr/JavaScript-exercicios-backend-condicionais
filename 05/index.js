//Exercício 05 - Peneira de Vôlei
//Numa “peneira” (processo seletivo para novos jogadores) de vôlei, em alguns clubes, o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. Faça um programa que, dada a altura de um determinado candidato, diga se ele está aprovado ou reprovado nessa primeira fase do processo.

const alturaEmCm = 185;

if (alturaEmCm >= 180) {
    console.log(`Candidato APROVADO`)
} else {
    console.log(`Candidato REPROVADO - Não atingiu a altura mínima.`)
} 