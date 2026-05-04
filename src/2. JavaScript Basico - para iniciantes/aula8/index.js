/*
helton heleno tem 34 anos, pesa 110 kg
tem 1.67 de altura e seu imc é de !!!!
Helton Heleno nasceu em 1991
*/
const nome = 'Helton';
const sobrenome = 'Heleno';
const idade = 34;
const peso = 110;
const altura = 1.67;

let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal  = peso / (altura * altura);
anoNascimento = 2026;
anoNascimento = anoNascimento - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);