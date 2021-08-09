//6 - Escreva um algoritmo que peça para o usuário digitar um valor e imprima a sequência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

var valor = 0;
var resultado;

valor = parseInt(prompt('Insira o valor a ser considerado na multiplicação'));

resultado = valor;
document.write(valor, `!=${valor} X `);

for (i = 1; i < valor; i++) {
  resultado *= valor - i;
  if (i != valor - 1) {
    document.write(valor - i, ' X ');
  } else {
    document.write(valor - i, ' = ');
  }
}
document.write(resultado);
