let n = 7;

let asteriscos = '*';
let espacos;
let espacoEntreAsteriscos;
let contador = 0;

for (let index = Math.trunc(n / 2); index >= 0; index -= 1) {
  espacos = ' '.repeat(index);
  if (index === 0) {
    asteriscos = '*'.repeat(n);
    console.log(asteriscos);
  }
  else if (contador == 0) {
    console.log(espacos + '*');
    contador += 1;
  }
  else{
    espacoEntreAsteriscos = ' '.repeat(contador)
    console.log(espacos + '*' + espacoEntreAsteriscos + '*');
    contador += 2;
  }

}
