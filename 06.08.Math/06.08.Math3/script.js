/*
3.Crie um script onde o usuario digite 2 numeros e realize a divisão entre os dois sendo sempre dividido o maior pelo menor , apos exiba na tela os numeros escolhidos e o resultado da divisão arredondado para baixo(floor)
*/

var num1 = prompt(' Digite o 1° número que deseja calcular, ex: 55.66 ');
var num2 = prompt(' Digite o 2° número que deseja calcular, ex: 22.33 ');
var resultado = 0;

document.write(' Números escolhidos são: ' + num1 + ' e ' + num2 + ' </br> ');

function dividir(num1, num2) {
  if (num1 > num2) {
    resultado = num1 / num2;
    resultado = Math.floor(resultado);
    document.write(' Resultado da divisão 1: ' + resultado);
  }
  if (num2 > num1) {
    resultado = num2 / num1;
    resultado = Math.floor(resultado);
    document.write(' Resultado da divisão 2: ' + resultado);
  }
}
dividir(num1, num2);
