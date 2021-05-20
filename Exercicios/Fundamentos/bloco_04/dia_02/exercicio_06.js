let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somatoriaDeImpar = 0;

for (const number of numbers) {
  if (number % 2 != 0) {
    somatoriaDeImpar += 1;
  }
}

if (somatoriaDeImpar == 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log('Quantidade de valores ímpares do array: ' + somatoriaDeImpar);
}
