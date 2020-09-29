// Parei aki Aula 17.3 - Exercício guiado

/*
 * State of application
 */

const API_COUNTRIES = 'https://restcountries.eu/rest/v2/all';
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  setVariablesofApplication();
  fetchCountries();
});

const fetchCountries = async () => {
  try {
    const res = await fetch(API_COUNTRIES);
    const json = await res.json();

    allCountries = json.map(
      ({ numericCode: id, translations, population, flag }) => {
        return {
          id,
          name: translations.br,
          population,
          formatedPopulation: formatNumber(population),
          flag,
        };
      }
    );

    sortCountries(allCountries);
    render();
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const sortCountries = (listCountries) => {
  listCountries.sort((a, b) => a.name.localeCompare(b.name));
};

const render = () => {
  renderCountriesList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
};

const renderCountriesList = () => {
  renderData(allCountries, tabCountries, { colorBackGround: '', caption: '+' });
};

const renderData = (listCountries, divData, configButton) => {
  let countriesHTML = '<div>';
  let { colorBackGround, caption } = configButton;

  listCountries.forEach(({ name, flag, id, formatedPopulation }) => {
    const countryHTML = `
      <div class="country"> 
         <div>
         <a id="${id}" class="waves-effect waves-light btn ${colorBackGround}">${caption}</a>
         </div>
         <div>
         <img src="${flag}" alt="${name}">
         </div>
         <div>
         <ul>
          <li>${name}</li>
          <li>${formatedPopulation}</li>
         </ul>
         </div>
      </div>
    `;
    countriesHTML += countryHTML;
  });
  countriesHTML += '</div>';

  divData.innerHTML = countriesHTML;
};
const renderFavorites = () => {
  renderData(favoriteCountries, tabFavorites, {
    colorBackGround: 'red darken-4',
    caption: '-',
  });
};

const renderSummary = () => {
  SummaryData(allCountries, countCountries, totalPopulationList);
  SummaryData(favoriteCountries, countFavorites, totalPopulationFavorites);
};

const SummaryData = (listCountries, divCount, divTotal) => {
  divCount.textContent = formatNumber(listCountries.length);
  let totalPopulation = listCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  divTotal.textContent = formatNumber(totalPopulation);
};

const handleCountryButtons = () => {
  InsertActionsAllButtons(tabCountries, addToFavorites);
  InsertActionsAllButtons(tabFavorites, removeFromFavorites);
};

const InsertActionsAllButtons = (div, nameFunction) => {
  let buttons = Array.from(div.querySelectorAll('.btn'));
  buttons.forEach((button) => {
    button.addEventListener('click', () => nameFunction(button.id));
  });
};

const addToFavorites = (id) => {
  const countryToAdd = allCountries.find((country) => country.id === id);
  favoriteCountries = [...favoriteCountries, countryToAdd];
  sortCountries(favoriteCountries);
  allCountries = allCountries.filter((country) => country.id !== id);
  render();
};

const removeFromFavorites = (id) => {
  const countryToAdd = favoriteCountries.find((country) => country.id === id);
  allCountries = [...allCountries, countryToAdd];
  sortCountries(allCountries);
  favoriteCountries = favoriteCountries.filter((country) => country.id !== id);
  render();
};

const setVariablesofApplication = () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');

  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  totalPopulationList = document.querySelector('#totalPopulationList');
  totalPopulationFavorites = document.querySelector(
    '#totalPopulationFavorites'
  );

  numberFormat = Intl.NumberFormat('pt-BR');
};

const formatNumber = (number) => {
  return numberFormat.format(number);
};
