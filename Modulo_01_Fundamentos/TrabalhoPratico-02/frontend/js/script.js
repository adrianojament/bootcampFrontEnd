const EnvironmentVariables = {
  data: [],
  languages: [],
  conditions: [
    {
      name: 'idAnd',
      description: 'E',
      valueDefault: true,
    },
    {
      name: 'idOR',
      description: 'OU',
      valueDefault: false,
    },
  ],
};

let optionsLanguages = null;
let idContainerloading = null;
let idMessageData = null;
let idLoading = null;
let idData = null;
let iptNome = null;

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
  iptNome = document.querySelector('#iptNome');
};

const fetchData = async () => {
  idContainerloading.hidden = false;
  let isError = false;
  try {
    const source = await fetch(URL_GET_DATA_DEVS);
    EnvironmentVariables.data = await source.json();
  } catch (error) {
    isError = true;
  }

  setTimeout(() => {
    setInformation(isError);
  }, 1500);
};

const setInformation = (isError) => {
  idLoading.hidden = true;
  optionsLanguages.innerHTML = '';
  idMessageData.hidden = !isError;

  idMessageData.textContent = idMessageData.hidden
    ? ''
    : 'Ocorreu um erro tente mais tarde';
  iptNome.disabled = isError;

  mountInformationsLanguages(isError);
  mountInformationsConditions(isError);
};

const mountInformationsLanguages = (isError) => {
  if (isError) {
    return;
  }

  distinctOnlyLanguages();
};

const distinctOnlyLanguages = () => {
  const { data } = EnvironmentVariables;

  data.forEach((dev) => {
    const { programmingLanguages } = dev;
    programmingLanguages.forEach(({ id, language }) => {
      const index = EnvironmentVariables.languages.findIndex(
        (lg) => lg.id === id
      );
      if (index === -1) {
        EnvironmentVariables.languages = [
          ...EnvironmentVariables.languages,
          { id, language },
        ];
      }
    });
  });

  console.log(EnvironmentVariables.languages);
};

const mountInformationsConditions = (isError) => {
  if (isError) {
    return;
  }
  let divConditions = '<div class="options-conditional">';
  const { conditions } = EnvironmentVariables;

  conditions.forEach(({ name, valueDefault, description }) => {
    const radio = `<p class="option-conditional">
    <label>
      <input id=${name} class="with-gap" name="rdConditional" type="radio" ${
      valueDefault ? 'checked' : ''
    } />
      <span>${description}</span>
      </label>
    </p>`;
    divConditions += radio;
  });

  divConditions += '</div>';
  optionsLanguages.innerHTML = divConditions;
};
