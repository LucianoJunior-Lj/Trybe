const reset = document.querySelectorAll('button')[1];

const translateInputs = {
  'full-name': 'Nome',
  email: 'Email',
  cpf: 'CPF',
  address: 'Endereço',
  city: 'Cidade',
  state: 'Estado',
  'type-house': 'Tipo de moradia',
  resume: 'Resumo do currículo',
  role: 'Cargo',
  'role-description': 'Descrição do cargo',
  'start-date': 'Data inicial',
}

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

function makeCheckText({ value, maxLength }) {
  if (value.length === 0 || value.length > maxLength) {
    return false;
  }
  return true
}

function makeCheckRadio() {
  if (document.querySelector('input[name=type-house]:checked')) {
    return true;
  }
  return false;
}

function makeCheckSelected(input) {
  console.log(input.options[input.selectedIndex].value);
  if (input.options[input.selectedIndex].value === '') {
    alert(`Nenhum estado selecionado`);
    return false;
  }
  return true;
}

function makeChecks(input) {
  let check = true;
  if (input.type === 'text') {
    check = makeCheckText(input);
  }
  if (input.type === 'radio') {
    check = makeCheckRadio();
  }
  if (!check) {
    alert(`${translateInputs[input.name]} é inválido`);
    return false;
  }
  return true;
}

function getInputs(event) {
  event.preventDefault();
  const selected = makeCheckSelected(document.getElementById('state'));
  const inputs = Array.from(document.querySelectorAll('input'));
  if(inputs.every(makeChecks) && selected) {
    alert('Formulário enviado');
    reset.click();
  }
}

window.onload = function () {
  createStateOptions();
  document.querySelector('button').addEventListener('click', getInputs);
  reset.addEventListener('click', (e) => e.target.click());
}

