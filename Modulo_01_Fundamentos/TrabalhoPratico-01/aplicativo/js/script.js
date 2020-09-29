var globalNumeroA = null;
var globalNumeroB = null;
var globalCalculos = null;
var FormatacaoValor = new Intl.NumberFormat('pt-br');

var camposCalculos = [
  {
    id: 1,
    descricao: 'Soma (a + b)',
    funcao: function somar(a, b) {
      return FormatarValor(a + b);
    },
    tipo: 'a_b',
  },
  {
    id: 2,
    descricao: 'Subtração 1 (a - b)',
    funcao: function subtrair(a, b) {
      return calcularSubtracao(a, b);
    },
    tipo: 'a_b',
  },
  {
    id: 3,
    descricao: 'Subtração 2 (b - a)',
    funcao: function subtrair(a, b) {
      return calcularSubtracao(a, b);
    },
    tipo: 'b_a',
  },
  {
    id: 4,
    descricao: 'Multiplicacao (a x b)',
    funcao: function multiplicar(a, b) {
      return a * b;
    },
    tipo: 'a_b',
  },
  {
    id: 5,
    descricao: 'Divisão 1 (a / b)',
    funcao: function dividir(a, b) {
      return calcularDivisao(a, b);
    },
    tipo: 'a_b',
  },
  {
    id: 6,
    descricao: 'Divisão 2 (b / a)',
    funcao: function dividir(a, b) {
      return calcularDivisao(a, b);
    },
    tipo: 'b_a',
  },
  {
    id: 7,
    descricao: 'Quadrado de a(a²)',
    funcao: function calcular(a) {
      return calcularQuadrado(a);
    },
    tipo: 'a',
  },
  {
    id: 8,
    descricao: 'Quadrado de b(b²)',
    funcao: function calcular(a) {
      return calcularQuadrado(a);
    },
    tipo: 'b',
  },
  {
    id: 9,
    descricao: 'Divisores inteiros de a',
    funcao: function calcular(a) {
      return calcularDivisores(a);
    },
    tipo: 'a',
  },
  {
    id: 10,
    descricao: 'Divisores inteiros de b',
    funcao: function calcular(a) {
      return calcularDivisores(a);
    },
    tipo: 'b',
  },
  {
    id: 11,
    descricao: 'Fatorial de a (a!)',
    funcao: function calcular(a) {
      return calcularFatorial(a);
    },
    tipo: 'a',
  },
  {
    id: 12,
    descricao: 'Fatorial de b (b!)',
    funcao: function calcular(a) {
      return calcularFatorial(a);
    },
    tipo: 'b',
  },
];

start();

function start() {
  globalCalculos = document.querySelector('#calculos');
  globalNumeroA = document.querySelector('#iptNumeroA');
  globalNumeroB = document.querySelector('#iptNumeroB');
  globalNumeroA.value = '10';
  globalNumeroB.value = '20';

  globalNumeroA.addEventListener('change', handleCampoA);
  globalNumeroB.addEventListener('change', handleCampoB);

  CarregarCalculos();
}

function handleCampoA(evento) {
  CarregarCalculos();
}

function handleCampoB(evento) {
  CarregarCalculos();
}

function CarregarCalculos() {
  function criarDivMaterialize() {
    var div = document.createElement('div');
    div.classList.add('input-field', 'col', 's12', 'm6', 'l4');

    return div;
  }

  function criarInputMaterialize(id, value) {
    var input = document.createElement('input');
    input.readOnly = true;
    input.type = 'text';
    input.id = id;
    input.value = value;

    return input;
  }

  function criarLabelMaterialize(id, description) {
    var label = document.createElement('label');
    label.for = id;
    label.textContent = description;
    label.classList.add('active');

    return label;
  }

  var divTodosCalculos = document.createElement('div');
  divTodosCalculos.classList.add('row');

  for (let index = 0; index < camposCalculos.length; index++) {
    var calculo = camposCalculos[index];

    var valor01 = parseInt(globalNumeroA.value);
    var valor02 = parseInt(globalNumeroB.value);
    var resultado = chamarFuncao(
      calculo.funcao,
      calculo.tipo,
      valor01,
      valor02
    );

    var divCalculo = criarDivMaterialize();
    var inputCalculo = criarInputMaterialize(calculo.id, resultado);
    var labelCalculo = criarLabelMaterialize(calculo.id, calculo.descricao);

    divCalculo.appendChild(inputCalculo);
    divCalculo.appendChild(labelCalculo);
    divTodosCalculos.appendChild(divCalculo);
  }

  globalCalculos.innerHTML = '';
  globalCalculos.appendChild(divTodosCalculos);
}

function chamarFuncao(funcao, tipo, valorA, valorB) {
  var valor = '';
  switch (tipo) {
    case 'a':
      valor = funcao(valorA);
      break;
    case 'b':
      valor = funcao(valorB);
      break;
    case 'a_b':
      valor = funcao(valorA, valorB);
      break;
    case 'b_a':
      valor = funcao(valorB, valorA);
      break;
    default:
      valor = 'Não localizado';
      break;
  }
  return valor;
}

function calcularQuadrado(valor) {
  return FormatarValor(valor * valor);
}

function calcularDivisores(valor) {
  var divisores = [];
  var result = valor;
  var divisor = 2;
  while (result > 1) {
    if (result % divisor == 0) {
      result = result / divisor;
      divisores.push(divisor);
    } else {
      divisor++;
    }
  }
  valor = divisores.join(', ') + ' (' + divisores.length + ')';
  return valor;
}

function calcularFatorial(valor) {
  if (valor > 21) {
    return 'Número muito grande';
  }
  if (valor === 0) {
    return 1;
  }
  return valor * calcularFatorial(valor - 1);
}

function calcularSubtracao(valorA, valorB) {
  return FormatarValor(valorA - valorB);
}

function calcularDivisao(numero, divisor) {
  if (divisor === 0) {
    return 'Não é possivel dividir por 0';
  }
  return FormatarValorDecimal(numero / divisor);
}

function FormatarValor(numeros) {
  return FormatacaoValor.format(numeros);
}

function FormatarValorDecimal(numeros) {
  return FormatacaoValor.format(numeros.toFixed(2));
}
