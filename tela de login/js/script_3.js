const inputFields = document.querySelectorAll('.input-field input');

inputFields.forEach((input) => {
  input.addEventListener('focus', () => {
    input.parentElement.querySelector('.animated-label').style.top = '0';
    input.parentElement.querySelector('.animated-label').style.fontSize = '12px';
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentElement.querySelector('.animated-label').style.top = '25px';
      input.parentElement.querySelector('.animated-label').style.fontSize = '16px';
    }
  });
});
