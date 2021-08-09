//2 - Crie uma função que receba 2 numero e retorne a multiplicação deles. Com o valor de retorno, divida por 2 e exiba na tela.

var num1 = prompt('Digite o 1° número:');
var num2 = prompt('Digite o 2° número:');

function multi(num1, num2) {
  return num1 * num2;
}
var result = multi(num1, num2);
var result2 = result / 2;

document.write(result, '</br>', result2);
