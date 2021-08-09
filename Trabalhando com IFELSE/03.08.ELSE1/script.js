//4 Script com dois números: mostrando o maior deles, ou se eles são iguais.
// posso declara variavel como "let" tambem na duvida coloca numero igual a zero;

var numemro1 = 0;
var numero2 = 0;

numero1 = parseInt(prompt('Digite o primeiro  valor: '));
numero2 = parseInt(prompt('Digite o segundo valor: '));

if (numero1 > numero2) document.write(numero1, ' é o maior.');
else if (numero1 == numero2) document.write(numero2, ' Os valores são iguais.');
if (numero1 < numero2) document.write(numero2, ' é o maior');
