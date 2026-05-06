let umaString = 'Um texto';
let umaString = 'Um \"texto\"';
let umaString = 'Um \\ texto';
console.log(umaString);
console.log(umaString.charAt(6)); // exibe o caractere na posição 6
console.log(umaString.concat(' em', 'um', 'lindo dia.')); // concatena a string com outras strings
console.log(umaString + ' em um lindo dia.'); // concatena a string com outras strings
console.log(`${umaString} em um lindo dia.`); // concatena a string com outras strings
console.log(umaString.indexOf('texto')); // exibe a posição da palavra 'texto' na string
console.log(umaString.lastIndexOf('o')); // exibe a posição da última ocorrência da palavra 'texto' na string
console.log(umaString.replace('Um', 'Outro')); // substitui a primeira ocorrência da palavra 'Um' por 'Outro' na string
console.log(umaString.length); // exibe o comprimento da string

