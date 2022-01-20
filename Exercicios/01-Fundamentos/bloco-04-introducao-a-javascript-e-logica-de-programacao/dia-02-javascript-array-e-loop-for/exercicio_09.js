let numbers = [];

for (let index = 0; index < 25; index += 1) {
  numbers.push(index + 1);
}

for (let metadeNumber of numbers) {
  console.log(metadeNumber / 2);
}
