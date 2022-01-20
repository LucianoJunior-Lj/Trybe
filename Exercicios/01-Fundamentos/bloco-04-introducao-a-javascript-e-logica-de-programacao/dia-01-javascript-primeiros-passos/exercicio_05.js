let anguloA = 45;
let anguloB = 45;
let anguloC = 90;

function isTriangulo(anguloA, anguloB, anguloC){
  if(anguloA < 0 || anguloB < 0 || anguloC < 0){
    return 'Ângulo invalido';
  }
  else if(anguloA + anguloB + anguloC === 180){
    return true;
  }
  else{
    return false;
  }
}

console.log(isTriangulo(anguloA, anguloB, anguloC));