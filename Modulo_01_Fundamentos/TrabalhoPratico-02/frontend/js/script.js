const EnvironmentVariables = {
  findValue: '',
  searchLanguages: '',
  data: [],
  dataFilter: [],
  languages: [],
  conditions: [
    {
      name: 'idAnd',
      description: 'E',
      checked: false,
    },
    {
      name: 'idOR',
      description: 'OU',
      checked: true,
    },
  ],
};

let optionsLanguages = null;
let optionsConditions = null;
let idContainerloading = null;
let idMessageData = null;
let idLoading = null;
let idData = null;
let iptNome = null;
let idTotal = null;
let idListItems = null;

const URL_GET_DATA_DEVS = 'http://localhost:3001/devs';

window.addEventListener('load', () => {
  setEnvironmentVariables();
  fetchData();
});

const setEnvironmentVariables = () => {
  idContainerloading = document.querySelector('#idContainerloading');
  idMessageData = document.querySelector('#idMessageData');
  idLoading = document.querySelector('#idLoading');
  idData = document.querySelector('#idData');
  optionsLanguages = document.querySelector('#optionsLanguages');
  optionsConditions = document.querySelector('#optionsConditions');

  iptNome = document.querySelector('#iptNome');
  iptNome.addEventListener('input', handleInputChange);

  idTotal = document.querySelector('#idTotal');
  idListItems = document.querySelector('#idListItems');
};

const handleInputChange = (event) => {
  EnvironmentVariables.findValue = event.target.value;

  filterData();
};

const fetchData = async () => {
  idContainerloading.hidden = false;
  let isError = false;
  try {
    const source = await fetch(URL_GET_DATA_DEVS);
    let newData = await source.json();

    newData = newData.map(({ name, picture, programmingLanguages }) => {
      return {
        name,
        nameWithOutAccents: removeAccents(name),
        picture,
        programmingLanguages,
      };
    });

    EnvironmentVariables.data = newData;
  } catch (error) {
    isError = true;
  }

  setTimeout(() => {
    setInformation(isError);
    filterData();
  }, 1500);
};

const setInformation = (isError) => {
  optionsLanguages.innerHTML = '';
  optionsConditions.innerHTML = '';
  idListItems.innerHTML = '';

  idMessageData.hidden = !isError;
  idMessageData.textContent = idMessageData.hidden
    ? ''
    : 'Ocorreu um erro tente mais tarde';
  iptNome.disabled = isError;

  mountInformationsLanguages(isError);
  mountInformationsConditions(isError);
  mountDataDevelopers(isError);

  idLoading.hidden = true;
  idData.hidden = false;
};

const mountDataDevelopers = (isError) => {
  if (isError) {
    return;
  }

  const { dataFilter } = EnvironmentVariables;
  idTotal.textContent = dataFilter.length;
  let divDevelopers = '';
  dataFilter.forEach(({ name, picture, programmingLanguages }) => {
    divDevelopers += `
      <div class='col s12 m6 l4'>
        <div class="dev-card">
	        <img class="picture" src="${picture}" alt="${name}">  
	        <div class="data">
            <span>
              ${name}
            </span>
            <div class="imagens">`;
    let pictures = '';
    programmingLanguages.forEach(({ id, language }) => {
      pictures += `<img class="imagem-language" src="./imgs/${id}.png" alt="${language}">  `;
    });
    divDevelopers +=
      pictures +
      `</div>            
	        </div>          
        </div>  
      </div>`;
  });
  idListItems.innerHTML = divDevelopers;
};

const mountInformationsLanguages = (isError) => {
  if (isError) {
    return;
  }

  distinctOnlyLanguages();
  mountLanguages();
};

const mountLanguages = () => {
  let { languages } = EnvironmentVariables;
  let divLanguages = `<div class="options-items">`;

  languages.forEach(({ id, language, checked }) => {
    let divLanguage = `<p class="option-language">
    <label>
      <input id="${id}" type="checkbox" ${checked ? 'checked' : ''} />
      <span>${language}</span>
    </label>
    <p>`;
    divLanguages += divLanguage;
  });
  divLanguages += `</div>`;

  optionsLanguages.innerHTML = divLanguages;
  languages.forEach(({ id }) => {
    let language = document.querySelector(`#${id}`);
    if (typeof language !== 'undefined') {
      language.addEventListener('input', handleCheckBoxClick);
    }
  });
};

const distinctOnlyLanguages = () => {
  let { data, languages } = EnvironmentVariables;
  let searchLanguages = [];

  data.forEach((dev) => {
    const { programmingLanguages } = dev;
    programmingLanguages.forEach(({ id, language }) => {
      const index = languages.findIndex((lg) => lg.id === id);
      if (index === -1) {
        languages = [...languages, { id, language, checked: true }];
        searchLanguages = [...searchLanguages, language];
      }
    });
  });

  EnvironmentVariables.languages = languages;
  EnvironmentVariables.searchLanguages = searchLanguages.sort().join('|');
};

const mountInformationsConditions = (isError) => {
  if (isError) {
    return;
  }
  let divConditions = '<div class="options-conditional">';
  const { conditions } = EnvironmentVariables;

  conditions.forEach(({ name, checked, description }) => {
    const radio = `<p class="option-conditional">
    <label>
      <input id=${name} class="with-gap" name="rdConditional" type="radio" ${
      checked ? 'checked' : ''
    } />
      <span>${description}</span>      
      </label>
    </p>`;
    divConditions += radio;
  });

  divConditions += '</div>';
  optionsConditions.innerHTML = divConditions;

  conditions.forEach(({ name }) => {
    let condition = document.querySelector(`#${name}`);
    if (typeof condition !== 'undefined') {
      condition.addEventListener('input', handleRadioAndOr);
    }
  });
};

const handleRadioAndOr = (event) => {
  const { conditions } = EnvironmentVariables;
  const { id, checked } = event.target;

  conditions.forEach((condition) => {
    condition.checked = condition.name === id && checked;
  });

  filterData();
};

const filterData = () => {
  let { data, findValue, languages, conditions } = EnvironmentVariables;
  const { checked: checkedOr } = conditions[1];

  const languagesFilter = filterLanguagesChecked(languages);

  const dataFilter = filterLanguagesData(data, languagesFilter, checkedOr);

  filterValueData(dataFilter, findValue);

  mountDataDevelopers(false);
};

const handleCheckBoxClick = (event) => {
  const { languages } = EnvironmentVariables;
  const { id, checked } = event.target;

  const language = languages.find((option) => option.id === id);
  language.checked = checked;

  filterData();
};

const filterValueData = (dataFilter, findValue) => {
  EnvironmentVariables.dataFilter = dataFilter.filter(
    ({ nameWithOutAccents }) => {
      return nameWithOutAccents.includes(findValue.toLowerCase());
    }
  );
};

const filterLanguagesData = (data, languagesFilter, checkedOr) => {
  return data.filter(({ programmingLanguages }) => {
    let contains = 0;

    programmingLanguages.forEach(({ language }) => {
      if (languagesFilter.findIndex((find) => find === language) !== -1) {
        contains++;
      }
    });
    return checkedOr
      ? contains > 0
      : contains === programmingLanguages.length &&
          languagesFilter.length === programmingLanguages.length;
  });
};

const filterLanguagesChecked = (languages) => {
  return languages
    .filter(({ checked }) => checked)
    .map(({ id }) => id)
    .sort();
};

const removeAccents = (name) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};
