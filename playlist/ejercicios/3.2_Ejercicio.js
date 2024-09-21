function stringNumbers(number) {
    const digits = number.toString().split(''); 
    const result = digits.join('-'); 
    console.log(result);
}

// Ejemplo de uso
const input = 10;
stringNumbers(input); // '1-0'
const secondInput = 1;
stringNumbers(secondInput); // '1'
const thirdInput = 11234;
stringNumbers(thirdInput); // '1-1-2-3-4'