/*
*Aritméticos
* + adição / concatenação (- / *)
* ** potenciação
* % resto da divisão
*/
/* Precedencia dos operadores
()
**
* / %
+ -
incremento = ++
decermento = --
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

let contador = 1;
contador++; // 2 operador de incremento
contador++; // 3
contador++; // 4
contador++; //5
console.log(contador); 

const passo = 2;
let contador1 = 0;

contador1 = contador1 + passo;
console.log(contador1); // 2
contador1 = contador1 + passo;
console.log(contador1); // 2
contador1 = contador1 + passo;
console.log(contador1); // 2

contador1 += passo; // contador = contador + passo
console.log(contador1);

const num1 = 10;
const num2 = parseInt('5'); // parseInt converte string para numero inteiro
const num2 = parseFloat('5.5'); // parseFloat converte string para numero decimal
console.log(num1 + num2);