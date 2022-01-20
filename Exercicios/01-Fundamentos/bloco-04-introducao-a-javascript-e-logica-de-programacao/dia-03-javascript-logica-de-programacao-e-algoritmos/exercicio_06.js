let valor = 4;
let contador = 0;

for (let index = 1; index <= valor; index += 1) {
  if (valor % index === 0) {
    contador += 1;
  }
  
}
if (contador === 2) {
  console.log('Numero %d é primo', valor);
}
else{
  console.log('Numero %d não é primo', valor)
}