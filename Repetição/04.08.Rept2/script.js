//2 - Algoritmo onde o usuário determina quantidade de valores que será solicitado ao usuário. Calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos.

var media = 0;
var proximoValor = 0;
var valores = 0;
var positivos = 0;
var negativos = 0;

valores = parseInt(prompt('Insira a quantidade de valores'));

for (i = 1; i < valores + 1; i++) {
  proximoValor = prompt('Digite o proximo valor ' + i);
  media += parseFloat(proximoValor);
  if (proximoValor > 0) {
    positivos++;
  }
  if (proximoValor < 0) {
    negativos++;
  }
}
var total = positivos + negativos;
prompt(' A quantidade de valores positivos é: ', positivos);
prompt(' A quantidade de valores negativos é: ', negativos);
prompt(' A média dos seus valores é: ', media / total);
