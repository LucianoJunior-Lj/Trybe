let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

//Exercicio 1
console.log('Bem-vinda, ' + info.personagem);
console.log('\n');

//Exercicio 2
info['recorrente'] = 'Sim';
console.log(info);
console.log('\n');

//Exercicio 3
for (let key in info) {
  console.log(key);
}
console.log('\n');

//Exercicio 4
for (let key in info) {
  console.log(info[key]);
}
console.log('\n');

//Exercicio 5
for (let key in info) {
  if (key == 'recorrente') {
    console.log('Ambos recorrentes');
  }
  else{
    console.log(info[key] + ' e ' + info2[key]);
  }
}
