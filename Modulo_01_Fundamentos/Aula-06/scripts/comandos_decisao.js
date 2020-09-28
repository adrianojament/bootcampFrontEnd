// Testar IF/ELSe

var a = 5;
var b = 4;

if (a > b) {
  console.log(a + ' maior ' + b);
} else if (a < b) {
  console.log(a + ' menor ' + b);
} else {
  console.log(a + ' igual ' + b);
}

// Testar switch
var dia = 5;
var r = '';
switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda-Feira';
    break;
  case 3:
    r = 'Terça-Feira';
    break;
  case 4:
    r = 'Quarta-Feira';
    break;
  case 5:
    r = 'Quinta-Feira';
    break;
  case 6:
    r = 'Sexta-Feira';
    break;
  case 7:
    r = 'Sabado';
    break;
  default:
    r = 'Dia invalido';
    break;
}
console.log(r);

// Operador ternario
a = 8;
b = 7;
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);
