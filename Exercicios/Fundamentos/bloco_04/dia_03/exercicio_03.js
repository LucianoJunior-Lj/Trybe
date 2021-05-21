let n = 5;

let asteriscos;
let espacos;

for (let index = 1; index <= n; index += 1) {
  asteriscos = '*'.repeat(index);
  espacos = ' '.repeat(n - index);
  
  console.log(espacos + asteriscos);
  
}
