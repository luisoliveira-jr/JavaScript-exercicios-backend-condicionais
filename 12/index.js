//Exercício 12 - Dia da Semana
//a) Sabendo que a semana possui 7 dias, sendo 1 para segunda e 7 para domingo, faça um programa que verifica o número armazenado em uma variável e imprima o dia (por extenso) da semana correspondente.

/* const diaDaSemana = 0;

if (diaDaSemana == 1) {
    console.log(`Segunda-feira`)
} else if (diaDaSemana == 2) {
    console.log(`Terça-feira`)
} else if (diaDaSemana == 3) {
    console.log(`Quarta-feira`)
} else if (diaDaSemana == 4) {
    console.log(`Quinta-feira`)
} else if (diaDaSemana == 5) {
    console.log(`Sexta-feira`)
} else if (diaDaSemana == 6) {
    console.log(`Sábado`)
} else if (diaDaSemana == 7) {
    console.log(`Domingo`)
}
 */
//b) Crie uma verificação padrão para caso o número informado não esteja no intervalo de 1 a 7.

const diaDaSemana = 10;

if (diaDaSemana == 1) {
    console.log(`Segunda-feira`)
} else if (diaDaSemana == 2) {
    console.log(`Terça-feira`)
} else if (diaDaSemana == 3) {
    console.log(`Quarta-feira`)
} else if (diaDaSemana == 4) {
    console.log(`Quinta-feira`)
} else if (diaDaSemana == 5) {
    console.log(`Sexta-feira`)
} else if (diaDaSemana == 6) {
    console.log(`Sábado`)
} else if (diaDaSemana == 7) {
    console.log(`Domingo`)
} else if (diaDaSemana != 1 || diaDaSemana != 2 || diaDaSemana != 3 || diaDaSemana != 4 || diaDaSemana != 5 || diaDaSemana != 6 || diaDaSemana != 7) {
    console.log(`O dia da semana informado não é válido.`)
}