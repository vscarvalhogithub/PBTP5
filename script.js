const users = [
  {
    email: 'user@example.com',
    password: 'password',
  },
];

function loginUser(email, password) {
  return users.find((user) => user.email === email && user.password === password);
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = loginUser(email, password);

  if (user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    alert('Login bem-sucedido!');
  } else {
    alert('E-mail ou senha incorretos.');
  }
}

document.getElementById('login-form').addEventListener('submit', handleLogin);

function userIsAuthenticated() {
  return !!sessionStorage.getItem('user');
}

function isValidCPF(cpf) {
  // Implemente a validação do CPF aqui
}

function storeData(data) {
  const storedData = JSON.parse(localStorage.getItem('clients')) || [];
  storedData.push(data);
  localStorage.setItem('clients', JSON.stringify(storedData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!userIsAuthenticated()) {
    alert('Você precisa estar autenticado para realizar um cadastro.');
    return;
  }

  const cpf = document.getElementById('cpf').value;
  const phone = document.getElementById('phone').value;

  if (!isValidCPF(cpf)) {
    alert('CPF inválido.');
    return;
  }

  if (phone.length === 0) {
    alert('É necessário fornecer pelo menos um número de telefone.');
    return;
  }

  const clientData = { cpf, phone };
  storeData(clientData);

  alert('Cadastro realizado com sucesso!');
}

document.getElementById('registration-form').addEventListener('submit', handleSubmit);
