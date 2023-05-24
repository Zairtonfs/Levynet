const cepInput = document.getElementById('cep');
const addressFields = document.getElementById('address-fields');

cepInput.addEventListener('input', () => {
  const cepValue = cepInput.value.trim();
  const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
  if (cepPattern.test(cepValue)) {
    addressFields.style.display = 'block';
  } else {
    addressFields.style.display = 'none';
  }
});

const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const cep = cepInput.value.trim();
  const estado = document.getElementById('estado').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const pontoReferencia = document.getElementById('ponto-referencia').value.trim();
  const nomeCompleto = document.getElementById('nome-completo').value.trim();
  const numeroCelular = document.getElementById('numero-celular').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const plano = document.querySelector('input[name="plano"]:checked').value.trim();

  console.log({
    cep,
    estado,
    cidade,
    bairro,
    rua,
    numero,
    complemento,
    pontoReferencia,
    nomeCompleto,
    numeroCelular,
    email,
    senha,
    plano
  });
});