// Parei aki Aula 17.3 - Exercício guiado

/*
 * State of application
 */

const API_COUNTRIES = 'https://restcountries.eu/rest/v2/all';
let tabCountries = null;
let tabFavorites = null;

let allCountries = null;
let favoriteCountries = null;

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
          flag,
        };
      }
    );

    render();
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

const render = () => {
  renderCountriesList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
};

const renderCountriesList = () => {
  let countriesHTML = '<div>';

  allCountries.forEach(({ name, flag, id, population }) => {
    const countryHTML = `
      <div class='country> 
         <div>
         </div>
         <div>
         </div>
         <div>
         </div>
      </div>
    `;
  });
};
const renderFavorites = () => {};
const renderSummary = () => {};
const handleCountryButtons = () => {};

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
