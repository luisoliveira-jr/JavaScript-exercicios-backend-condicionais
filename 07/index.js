//Exercício 07 - Isenção de impostos
//Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda (IR). Faça um programa que determine se a pessoa deve pagar IR ou não.

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos   


if (aposentada == true || portadoraDeDoenca == true) {
    console.log(`ISENTA`)
} else if (totalDeRendimentos <= 2855970) {
    console.log(`VAZA LEAO! JA TA DIFICIL SEM VOCE`)
} else if (aposentada == false && portadoraDeDoenca == false && totalDeRendimentos > 2855970) {
    console.log(`PEGA LEAO`)
}