let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let globalInputName = null;
let isEditing = false;
let globalCurrentIndex = null;

window.addEventListener('load', () => {
  preventFormSubmit();
  globalInputName = document.querySelector('#inputName');
  render();
});

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function handleTyping(event) {
    var hasText = !!event.target.value && event.target.value.trim() !== '';

    if (event.key !== 'Enter') {
      return;
    }

    if (!hasText) {
      clearInput();
      return;
    }

    if (!isEditing) {
      insertName(event.target.value);
    } else {
      updateName(event.target.value);
    }
    isEditing = false;
    render();
  }

  function updateName(newName) {
    globalNames[globalCurrentIndex] = newName;
  }

  function insertName(newName) {
    globalNames = [...globalNames, newName];
  }

  globalInputName.focus();
  globalInputName.addEventListener('keyup', handleTyping);
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames = globalNames.filter((_, i) => i !== index);
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.classList.add('clickable');
    button.textContent = 'X';

    button.addEventListener('click', deleteName);
    return button;
  }

  function createSpanContent(name, index) {
    function editItem() {
      globalInputName.value = name;
      globalInputName.focus();
      isEditing = true;
      globalCurrentIndex = index;
    }

    activateInput();
    var span = document.createElement('span');
    span.textContent = name;
    span.classList.add('clickable');
    span.addEventListener('click', editItem);
    return span;
  }

  var divNames = document.querySelector('#names');
  var ul = document.createElement('ul');
  for (var index = 0; index < globalNames.length; index++) {
    var currentName = globalNames[index];

    var button = createDeleteButton(index);
    var span = createSpanContent(currentName, index);

    var li = document.createElement('li');
    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }

  divNames.innerHTML = '';
  divNames.appendChild(ul);
  clearInput();
}

const clearInput = () => {
  globalInputName.value = '';
  globalInputName.focus();
};
