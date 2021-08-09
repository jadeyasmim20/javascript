
//1 - Crie uma função que verifica se o numero digitado pelo usuário é múltiplo de 5;

var digitado = parseInt(prompt('Digite um número:'));
function mult(numero) {
  if (numero % 5 == 0) document.write('é multiplo!');
  else document.write('não é multiplo!');
}
mult(digitado);

