// var title = document.querySelector('h1');
// title.textContent = 'Jose Ament';

// var city = document.querySelector('#city');
// city.textContent = 'São Paulo';

var personalDataArray = Array.from(document.querySelectorAll('.personal-data'));
for (var index = 0; index < personalDataArray.length; index++) {
  var currentElement = personalDataArray[index];
  console.log(currentElement);
  currentElement.classList.add('emphasis');
}
