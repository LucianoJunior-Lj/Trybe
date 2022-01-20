let nota = 45;

function converteNota(nota){
  if(nota > 100 || nota < 0){
    return 'Nota Invalida';
  }
  else if(nota >= 90){
    return 'A';
  }
  else if(nota >= 80){
    return 'B';
  }
  else if(nota >= 70){
    return 'C'
  }
  else if(nota >= 60){
    return 'D'
  }
  else if(nota >= 50){
    return 'E'
  }
  else{
    return 'F'
  }
}

console.log('Conversão de %d é o conceito: %s', nota, converteNota(nota));