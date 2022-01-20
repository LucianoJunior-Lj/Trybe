let peca = 'Bispo';
let pecaLowCase = peca.toLowerCase();

function movimentoDaPeca(peca){
  switch(peca){
    case 'rei':
      return '1 casa para qualquer lado';
    case 'dama':
      return 'Diagonal, para frente e para trás, direita e esquerda';
    case 'torre':
      return 'Para frente e para trás, para a direita e para a esquerda';
    case 'bispo':
      return 'Diagonal';
    case 'cavalo':
      return 'Em L';
    case 'peao':
      return 'Uma casa para frente';
    default:
      return 'É uma peça inválida';
  }
}

console.log(peca + ' ' + movimentoDaPeca(pecaLowCase));