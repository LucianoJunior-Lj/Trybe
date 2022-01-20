let valorDeCusto = 100;
let valorDeVenda = 150;

function calculaLucro(valorDeCusto, valorDeVenda) {
  if (valorDeCusto < 0 || valorDeVenda < 0) {
    console.log('Valores inválidos');
    return 0;    
  }

  let valorCustoTotal = valorDeCusto + (valorDeCusto * 0.2);
  let lucro = valorDeVenda - valorCustoTotal;
  return lucro;
}

console.log('O lucro foi de: %d', calculaLucro(valorDeCusto ,valorDeVenda));
