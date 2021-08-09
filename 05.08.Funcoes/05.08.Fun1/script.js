//1.Crie uma função que exibe a palavra (ímpar/par) de acordo com o numero digitado pelo usuário.
var digitado = prompt('Digite um número');

function imparPar(numero) {
  if (numero % 2 == 0) document.write('é par!');
  else document.write('é impar!');
}
imparPar(digitado);
