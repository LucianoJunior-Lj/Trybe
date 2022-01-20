let numero1 = 8;
let numero2 = 22;
let numero3 = 38;

function isImpar(numero1, numero2, numero3){
  if(numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0){
    return true;
  }
  else{
    return false;
  }
}

console.log('Pelo menos um dos numeros é ímpar: ' + isImpar(numero1, numero2, numero3));