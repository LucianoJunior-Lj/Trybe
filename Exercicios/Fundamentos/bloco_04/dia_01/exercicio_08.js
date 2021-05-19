let numero1 = 9;
let numero2 = 21;
let numero3 = 37;

function isPar(numero1, numero2, numero3){
  if(numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}

console.log('Pelo menos um dos numeros é par: ' + isPar(numero1, numero2, numero3));