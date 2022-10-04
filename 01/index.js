//Exercício 01 - Pedra, papel ou tesoura
//Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogada vencedora, ou “empate”, em caso de empate.

const jogada1 = "pedra"
const jogada2 = "papel"

//seu código aqui

if (jogada1 == "papel" && jogada2 == "pedra") {
    console.log(jogada1)
} else if (jogada1 == "pedra" && jogada2 == "papel") {
    console.log(jogada2)
} else if (jogada1 == "pedra" && jogada2 == "tesoura") {
    console.log(jogada1)
} else if (jogada1 == "tesoura" && jogada2 == "pedra") {
    console.log(jogada2)
} else if (jogada1 == "tesoura" && jogada2 == "papel") {
    console.log(jogada1)
} else if (jogada1 == "papel" && jogada2 == "tesoura") {
    console.log(jogada2)
} else if (jogada1 == "papel" && jogada2 == "papel" || jogada1 == "pedra" && jogada2 == "pedra" || jogada1 == "tesoura" && jogada2 == "tesoura") {
    console.log("Empate")
}