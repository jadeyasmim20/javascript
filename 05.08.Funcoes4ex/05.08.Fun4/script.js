//4 - Crie uma função que receba dois números e informe qual o maior entre eles.

var num1 = prompt('Digite o 1° número:');
var num2 = prompt('Digite o 2° número:');
function maior(num1, num2) {
  if (num1 > num2) {
    document.write('O 1° número é maior ' + num1);
  } else if (num2 > num1) {
    document.write('O 2° número é maior ' + num2);
  }
}
maior(num1, num2);
