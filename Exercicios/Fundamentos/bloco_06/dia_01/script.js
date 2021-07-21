const reset = document.querySelectorAll('button')[1];

const curriculum = {
  Nome: '', 
  Email: '',
  CPF: '',
  Endereço: '',
  Cidade: '',
  Estado: '',
  'Tipo de moradia': '',
  'Resumo do currículo': '',
  Cargo: '',
  'Descrição do cargo': '',
  'Data inicial': '',
};

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

function makeCheckText({ value, maxLength, name }) {
  if (value.length === 0 || value.length > maxLength) {
    return false;
  }
  curriculum[translateInputs[name]] = value;
  return true
}

function makeCheckRadio() {
  const checked = document.querySelector('input[name=type-house]:checked');
  if (checked) {
    curriculum[translateInputs[checked.name]] = checked.value === 'house' ? 'Casa' : 'Apartamento';
    return true;
  }
  return false;
}

function makeCheckSelected(input) {
  const selectedValue = input.options[input.selectedIndex].value;
  if (selectedValue === '') {
    alert(`Nenhum estado selecionado`);
    return false;
  }
  curriculum[translateInputs[input.name]] = selectedValue;
  return true;
}

function mekeCheckResume({ value, name, maxLength }) {
  if (value.length === 0 || value.length > maxLength) {
    alert('Resumo do currículo inválido');
    return false;
  }
  curriculum[translateInputs[name]] = value;
  return true;
}

function checkTheDate(date) {
  if (!date.match(/^\d\d\/\d\d\/\d\d\d\d$/)) {
    alert('Formato de data errada. Formato correto: dd/mm/aaaa');
    return false;
  }
  const [day, month, year] = date.split('/');
  if (day < 1 || day > 31) {
    alert('Dia inválido.');
    return false;
  }
  if (month < 1 || month > 12) {
    alert('Mês inválido.');
    return false;
  }
  if (year < 0) {
    alert('Ano inválido.');
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
  if (input.name === 'start-date') {
    check = checkTheDate(input.value);
  }
  if (!check) {
    alert(`${translateInputs[input.name]} é inválido`);
    return false;
  } 
  return true;
}

function displayCurriculum([key, value]) {
  const information = document.createElement('p');
  information.innerHTML = `${key}: ${value}`;
  document.querySelector('.curriculum').appendChild(information);
}

function getInputs(event) {
  event.preventDefault();
  const selected = makeCheckSelected(document.getElementById('state'));
  const resume = mekeCheckResume(document.getElementById('resume'))
  const inputs = Array.from(document.querySelectorAll('input'));
  if(inputs.every(makeChecks) && selected && resume) {
    alert('Formulário enviado');
    Object.entries(curriculum).forEach(displayCurriculum);
  }
}

window.onload = function () {
  createStateOptions();
  console.log(document.querySelector('.curriculum'));
  document.querySelector('button').addEventListener('click', getInputs);
  reset.addEventListener('click', (e) => document.querySelector('.curriculum').innerHTML = '');
}
