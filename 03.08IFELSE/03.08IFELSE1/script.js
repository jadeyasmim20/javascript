//1. Script que le 4 números e mostrando-os em ordem crescente e depois em ordem decrescente.

var num1 = prompt('Digite o primeiro número');
var num2 = prompt('Digite o segundo número');
var num3 = prompt('Digite o terceiro número');
var num4 = prompt('Digite o quarto número');

if (num1 < num2 < num3 < num4) {
  document.write(' ordem crescente');
  document.write(num1, num2, num3, num4);
} else {
  document.write(' ordem decrescente');
  document.write(num1, num2, num3, num4);
}
