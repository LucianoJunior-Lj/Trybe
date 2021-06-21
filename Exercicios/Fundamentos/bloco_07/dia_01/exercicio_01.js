const factorial = number => (number === 1) ? number : number * factorial(number - 1);

console.log(factorial(4));