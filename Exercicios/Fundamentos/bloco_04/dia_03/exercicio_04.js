let n = 5;

let asteriscos = '*';
let espacos;

for (let index = Math.ceil(n / 2); index > 0; index -= 1) {
  espacos = ' '.repeat(index);
  
  console.log(espacos + asteriscos);

  asteriscos += '**';
  
}