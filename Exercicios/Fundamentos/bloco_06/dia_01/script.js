function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (const state of stateOptions) {
    const options = document.createElement('option');
    options.innerHTML = state;
    options.value = state;
    states.appendChild(options);
  }
}

function (params) {
  
}

window.onload = function () {
  createStateOptions();
  // let a = document.querySelector('select');
  // let b = a.options[a.selectedIndex].text;
  // console.log(b);
  document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('teste');
    // let a = document.querySelector('select');
    // let b = a.options[a.selectedIndex].text;
    // console.log(b);
    // if (document.querySelector('#full-name').value) {
    //   console.log('entro')
    // }
    const a = document.querySelectorAll('input');
    for (const iterator of a) {
      // if (!iterator.value) {
      //   iterator.setCustomValidity("Nome está inválido!");;
      // }
      //console.log('entro');
      console.log(iterator.oninvalid  );
      iterator.oninvalid = function(e) {  
        console.log('entro');
        // remove mensagens de erro padrão
        e.target.setCustomValidity("");
        // faz a validação novamente
        if (!e.target.validity.valid) {
            // se estiver inválido, coloca a mensagem
            this.setCustomValidity("Nome está inválido!");
         }
     };
    }
    
  })  
}

