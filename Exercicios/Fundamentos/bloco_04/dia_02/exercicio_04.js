let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somatoria = 0;
let mediaAritmetica = 0;

for (const number of numbers) {
  somatoria += number;
}

mediaAritmetica = somatoria / numbers.length;

if (mediaAritmetica > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('Valor menor ou igual a 20');
}
