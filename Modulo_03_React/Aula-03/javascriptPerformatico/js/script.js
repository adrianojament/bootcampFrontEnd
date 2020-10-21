const clickArray = [];

window.addEventListener('load', () => {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
});

const handleButtonClick = () => {
  const date = getNewTimestamp();
  clickArray.push(date);
  render(date);
};

const render = (date) => {
  const ul = document.querySelector('#data');
  const li = document.createElement('li');
  li.textContent = date;
  ul.appendChild(li);
};
