'use strict';
// var X let

// var tem o escopo mais abrangente
// let tem o escopo reduzido

withVar();
withLet();

function withVar() {
  for (var i = 0; i < 20; i++) {
    console.log('var ' + i);
  }
  i = 20;
  console.log('var ' + i);
}

function withLet() {
  for (let a = 0; a < 20; a++) {
    console.log('let ' + a);
  }
  /*a = 20;
  console.log('let ' + i);*/
}

// const - não podemos reatribuir valores

// const c = 10;
// c = 20;

// Mas podemos usar uma constante com array ou objeto, desse forma ele permite
// adicionar valores a msm.

const d = [];
console.log(d);

d.push(1);
console.log(d);

// funcoes com arrow function

// Função convencional
function sum(a, b) {
  return a + b;
}

// Função anomina

const sum2 = function (a, b) {
  return a + b;
};

// Arrow Function normal
const sum3 = (a, b) => {
  return a + b;
};

// Arrow Function reduzida

const sum4 = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sum2(1, 2));
console.log(sum3(1, 2));
console.log(sum4(1, 2));

// template literal's

const name = 'Adriano';
const surname = 'Ament';

// concatenação normal
const text1 = 'Meu nome é: ' + name + ' ' + surname;

// concatenação com template literal's
const text2 = `Meu nome é: ${name} ${surname}`;
console.log(text1);
console.log(text2);

// Funcao com parametro e valor padrao

// Sem valor padrão
const sum5 = (a, b) => a + b;
console.log(sum5(5));

// com valor padrão
// os valores padroes so devem ser colocados no primeiro quando todos os
// recebem valores padroes, caso contrario não funciona.
const sum6 = (a, b = 10) => a + b;
console.log(sum6(5));
