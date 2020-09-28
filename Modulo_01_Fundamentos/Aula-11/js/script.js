window.addEventListener('load', () => {
  console.log(doMap());
  console.log(doFilter());
  console.log(doForEach());
  console.log(doReduce());
  console.log(doFind());
  console.log(doSome());
  console.log(doEvery());
  console.log(doSort());
});

function doMap() {
  return people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
}

function doFilter() {
  return people.results.filter((person) => person.dob.age > 50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.name.nameSize = `${person.name.title} ${person.name.first} ${person.name.last}`.length;
  });

  return mappedPeople;
}

function doReduce() {
  return people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
}

function doFind() {
  return people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
}

function doSome() {
  return people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
}

function doEvery() {
  return people.results.every((person) => {
    return person.nat === 'BR';
  });
}

function doSort() {
  const datapeple = doMap()
    .map((person) => {
      return { name: person.name.first };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
      // return b.name.length - a.name.length; // Desc
      // return a.name.length - b.name.length // Asc;
    });

  return datapeple;
}
