//Exercício 15 - Nome para exibição
//Uma pessoa pode ter nome, sobrenome e/ou apelido. Escreva um código que imprima no console apenas o apelido (se o apelido estiver preenchido), ou primeiro nome + sobrenome (se o sobrenome estiver preenchido), ou apenas o primeiro nome (que no nosso programa é obrigatório e deverá sempre estar preenchido).

const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (!primeiroNome) {
    console.log(`Por favor preencher o primeiro nome.`)
} else if (primeiroNome && sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`)
} else if (primeiroNome && !sobrenome && apelido) {
    console.log(`${apelido}`)
} else {
    console.log(`${primeiroNome}`)
}