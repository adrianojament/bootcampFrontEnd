const resposta = 55;

// comando while
var numeroAtual = 1;
var somatorioValores = 0;

while (numeroAtual <= 10) {
  somatorioValores += numeroAtual;
  numeroAtual++;
}

console.log(
  'While: ' +
    resposta +
    ' eh igual ' +
    somatorioValores +
    ' = ' +
    (resposta === somatorioValores ? 'Igual' : 'Diferente')
);

// comando do... while
numeroAtual = 1;
somatorioValores = 0;

do {
  somatorioValores += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);

console.log(
  'Do...While: ' +
    resposta +
    ' eh igual ' +
    somatorioValores +
    ' = ' +
    (resposta === somatorioValores ? 'Igual' : 'Diferente')
);

// comando for
numeroAtual = 1;
somatorioValores = 0;

for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorioValores += numeroAtual;
}

console.log(
  'for: ' +
    resposta +
    ' eh igual ' +
    somatorioValores +
    ' = ' +
    (resposta === somatorioValores ? 'Igual' : 'Diferente')
);
