start();

function start() {
  console.log('09');
  console.log('carregada');
  var nameInput = document.querySelector('#idName');
  nameInput.addEventListener('keyup', countName);
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  var count = event.target.value.trim().length;
  var span = document.querySelector('#namelength');
  span.textContent = 'Contador de caracteres: ' + count;
}

function preventSubmit(event) {
  event.preventDefault();
}
