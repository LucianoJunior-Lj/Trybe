let valor = -7.99;

function positivoNegativo(valor){
  if(valor > 0){
    return 'positive';
  }
  else if(valor < 0){
    return 'negative';
  }
  else{
    return 'zero';
  }
}

console.log('O numero %d é: %s', valor, positivoNegativo(valor));