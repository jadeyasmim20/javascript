// 3 Escrever um algoritmo que leia 10 números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve informar ao usuário quando o numero lido um número negativo.

var recebe_25 = 0;
var recebe_50 = 0;
var recebe_75 = 0;
var recebe_100 = 0;
var negativo = 0;

for (i = 1; i <= 10; i++) {
  var numero = parseInt(prompt('Digite um número inteiro: '));

  if (numero >= 0 && numero <= 25) {
    recebe_25++;
  }
  if (numero >= 26 && numero <= 50) {
    recebe_50++;
  }
  if (numero >= 51 && numero <= 75) {
    recebe_75++;
  }
  if (numero >= 76 && numero <= 100) {
    recebe_100++;
  }
  if (numero < 0) {
    negativo++;
    alert('Você digitou um número negativo!');
  }
}
document.write('Número lido entre 0 e 25: ', recebe_25, '</br>');
document.write('Número lido entre 26 e 50: ', recebe_50, '</br>');
document.write('Número lido entre 51 e 75: ', recebe_75, '</br>');
document.write('Número lido entre 76 e 100: ', recebe_100, '</br>');
