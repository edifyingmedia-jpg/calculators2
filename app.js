document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.calc-btn');
  let currentInput = '';

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.getAttribute('data-value');

      if (value === '=') {
        try {
          currentInput = eval(currentInput);
        } catch (e) {
          currentInput = 'Error';
        }
      } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'sqrt') {
        currentInput = Math[value](parseFloat(currentInput)).toString();
      } else {
        currentInput += value;
      }

      display.value = currentInput;
    });
  });
});