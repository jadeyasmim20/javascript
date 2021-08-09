//COMANDO IF: Script mostrando na tela se um número é positivo, negativo ou nulo (zero);

var numero = 0;

numero = prompt('Digite seu número');
console.log(numero);

if (numero > 0) {
  document.write('Seu número é positivo.'); // exemplo 1
}
if (numero < 0) {
  document.write('Seu número é negativo.'); // exemplo -1
}
if (numero == 0) {
  document.write('Seu número é nulo.'); // exemplo 0
}
