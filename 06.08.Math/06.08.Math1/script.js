/*1. Utilizando as funções matematicas crie um script que o usuario digite dois numeros e mostre na tela os numeros escolhidos e raiz quadrada dos mesmos (arredondada)
 */

var num1 = prompt('Digite o número que deseja calcular, ex: 9.30'); //3
var num2 = prompt('Digite outro número que deseja calcular, ex: 15.75'); //4

document.write(
  'Números escolhidos arredondados:',
  Math.round(num1),
  ' ',
  Math.round(num2),
  '</br>'
);

function matematica(num1, num2) {
  var resultado = (num1, num2);
  resultado = Math.sqrt(num1, num2);
  return resultado;
}
document.write(
  'raiz quadrada do primeiro n° =',
  matematica(Math.round(num1)),
  '</br>'
);

document.write(
  'raiz quadrada do segundo n° =',
  matematica(Math.round(num2)),
  '</br>'
);
