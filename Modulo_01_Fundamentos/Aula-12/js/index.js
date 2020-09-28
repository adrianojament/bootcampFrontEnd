window.addEventListener('load', () => {
  console.log(doSpread()); // Espalha
  console.log(doRest()); // Agrupa
  console.log(doDestructuring());
});

const doSpread = () => {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );

  const marriedWoman = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedMen, ...marriedWoman];

  return marriedPeople;
};

const doRest = () => {
  return infiniteSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
};

const infiniteSum = (...numbers) => {
  console.log(numbers);
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total;
};

const doDestructuring = () => {
  const first = people.results[0];

  // Repetitivo
  const semUsername = first.login.username;
  const semPassword = first.login.password;

  // Destruturing
  const { username, password } = first.location;
  return `Sem Destructuring ${semUsername}-${semPassword} - Com Destructuring ${username}-${password} `;
};
