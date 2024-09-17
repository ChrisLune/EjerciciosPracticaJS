function wordBackwards(cadena) {
    return `${cadena.length} ${cadena.split('').reverse().join('')}`;
}

// Ejemplos de uso
const input1 = 'string';
console.log(wordBackwards(input1)); // '6 gnirts'
const input2 = 'variable';
console.log(wordBackwards(input2)); // '8 elbairav'
const input3 = 'pointer';
console.log(wordBackwards(input3)); // '7 retniop'
const input4 = 'KeepCooding';
console.log(wordBackwards(input4)); // '11 gnidooCpeeK'

