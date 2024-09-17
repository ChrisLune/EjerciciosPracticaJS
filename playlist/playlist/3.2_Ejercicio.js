function stringNumbers(number) {
    const digits = number.toString().split(''); // Convertimos el número a string y luego a un array de dígitos
    const result = digits.join('-'); // Unimos los dígitos con un guion
    console.log(result); // Mostramos el resultado
}

// Ejemplo de uso
const input = 10;
stringNumbers(input); // '1-0'
const secondInput = 1;
stringNumbers(secondInput); // '1'
const thirdInput = 11234;
stringNumbers(thirdInput); // '1-1-2-3-4'