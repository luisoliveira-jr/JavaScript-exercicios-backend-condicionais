//Exercício 04 - Dominó
//Modifique o código anterior para que, quando a pedra for uma bucha, digamos qual o “nome” da bucha. Para quem não constuma jogar dominó, segue um glossário:

const ladoA = 3;
const ladoB = 3;

if (ladoA == ladoB && ladoA == 0) {
    console.log(`Bucha de branco`)
} else if (ladoA == ladoB && ladoA == 1) {
    console.log(`Bucha de ás`)
} else if (ladoA == ladoB && ladoA == 2) {
    console.log(`Bucha de duque`)
} else if (ladoA == ladoB && ladoA == 3) {
    console.log(`Bucha de terno`)
} else if (ladoA == ladoB && ladoA == 4) {
    console.log(`Bucha de quadra`)
} else if (ladoA == ladoB && ladoA == 5) {
    console.log(`Bucha de quina`)
} else if (ladoA == ladoB && ladoA == 6) {
    console.log(`Bucha de sena`)
} else {
    console.log(`Insira um parâmetro correto`)
}