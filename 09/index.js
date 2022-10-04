//Exercício 09 - Transformar nota em conceito
//Num colégio está sendo feita uma migração de notas (que variam de 0 a 10) para conceitos (que variam de A até E).

const nota = 8.5;

if (nota >= 9 && nota <= 10) {
    console.log(`A`)
} else if (nota >= 8 && nota <= 8.9) {
    console.log(`B`)
} else if (nota >= 6 && nota <= 7.9) {
    console.log(`C`)
} else if (nota >= 4 && nota <= 5.9) {
    console.log(`D`)
} else if (nota < 4) {
    console.log(`E`)
}