//Exercício 16 - Rematrícula Escolar
//Faça um programa que verifique se o aluno é maior de idade e realize a rematrícula, caso não seja, só será possível acompanhado de um responsável.

//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (idadeDoAluno >= 18) {
    console.log(`Rematrícula realizada com sucesso!`)
} else if (possuiResponsavel == true) {
    console.log(`Rematrícula realizada com sucesso!`)
}
else {
    console.log(`Não é possível fazer a rematrícula`)
}