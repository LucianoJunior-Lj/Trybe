let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somatoria = 0;
let mediaAritmetica = 0;

for (const number of numbers) {
  somatoria += number;
}

mediaAritmetica = somatoria / numbers.length;

console.log('A média aritmética do array: ' + mediaAritmetica);
