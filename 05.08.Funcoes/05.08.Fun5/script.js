//5 - Crie uma função que verifica se o numero é primo, se for primo, retorna o numero elevado ao cubo, senão, exibe na tela não é primo. Obs.: o valore retornado deve ser exibido fora da função;

primo: num %i == 0 
ao cubo: 11*11*11
*/
var num = prompt('Digite um número:');

function ehPrimo(num) {
  for (i = 2; i < num; i++)
    if (num % i == 0) {
      return 'Não é primo';
    }

  return Math.pow(num, 3);
}
document.write(ehPrimo(num));
