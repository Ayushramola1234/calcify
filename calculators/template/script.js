// Elements
const inputEl = document.getElementById('example-input');
const resultOutputEl = document.getElementById('result-output');

// Placeholder calculation
function calculateExample(value) {
  const number = Number(value);
  if (Number.isNaN(number)) return 'Enter a valid number.';
  return `Placeholder result: ${number * 2}`;
}

// Input listener
if (inputEl && resultOutputEl) {
  inputEl.addEventListener('input', (event) => {
    const result = calculateExample(event.target.value);
    resultOutputEl.textContent = result;
  });
}
