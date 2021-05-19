let numero1 = 10;
let numero2 = 7;

function retornaMaiorNumero(numero1, numero2){
  if(numero1 > numero2){
    return numero1;
  }
  else if(numero2 > numero1){
    return numero2;
  }
  else{
    return 'iguais';
  }
}

console.log(retornaMaiorNumero(numero1, numero2));
