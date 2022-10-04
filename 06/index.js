//Exercício 06 - Definindo as posições
//Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, de acordo com suas alturas, para serem testados para posições específicas. Faça um programa que, dada a altura de um determinado candidato, diga para qual posição ele deverá fazer o teste.

const alturaEmCm = 185;

if (alturaEmCm < 180) {
    console.log(`REPROVADO`)
} else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log(`LÍBERO`)
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log(`PONTEIRO`)
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log(`OPOSTO`)
} else if (alturaEmCm > 205) {
    console.log(`CENTRAL`)
} 