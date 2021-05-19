let numero1 = 5;
let numero2 = 92;
let numero3 = 20

function retornaMaiorNumero(numero1, numero2, numero3){
  if(numero1 > numero2 && numero1 > numero3){
    return numero1;
  }
  else if(numero2 > numero1 && numero2 > numero3){
    return numero2;
  }
  else{
    return numero3;
  }
}

console.log('O maior numero entre os 3 é: ' + retornaMaiorNumero(numero1, numero2, numero3));
