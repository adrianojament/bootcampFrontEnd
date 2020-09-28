let globalDivUser;

window.addEventListener('load', () => {
  globalDivUser = document.querySelector('#user');
  globalDivUser.textContent = 'Buscando dados...';
  doFetch();
  executeDivisonPromise(12, 5);
  executeDivisonPromiseAsyncAwait(12, 6);
  executeDivisonPromiseAsyncAwait(12, 0);
});

const showData = (data) => {
  const { login, name } = data;
  globalDivUser.textContent = `${login} - ${name}`;
};

const divisionPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Nao é possivel dividir por 0');
    }
    resolve(a / b);
  });
};

const executeDivisonPromise = (a, b) => {
  divisionPromise(a, b)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const executeDivisonPromiseAsyncAwait = async (a, b) => {
  let result;
  try {
    result = await divisionPromise(a, b);
  } catch (error) {
    result = error;
  }

  console.log(result);
};

const doFetch = async () => {
  let json = '';
  try {
    const res = await fetch('https://api.github.com/users/adrianojament');
    json = await res.json();
  } catch (error) {
    json = error;
  }

  showData(json);
};
