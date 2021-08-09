// 2 script que realiza o IMC:
//algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordocom a tabela.
//IMC em adultos Condição
//Abaixo de 18,5 Abaixo do peso             ok
//Entre 18,5 e 25 Peso normal
//Acima de  25 e 30 Acima do peso         &&  ==
//Acima de 30 obeso                       ok

var peso = parseInt(prompt(' Digite o seu peso'));
var altura = parseFloat(prompt(' Digite a sua altura'));
imc = peso / (altura * altura);

if (imc < 18.5) {
  document.write(' Abaixo do peso ');
} else if (imc >= 18.5 && imc < 25) {
  document.write(' Peso normal ');
} else if (imc >= 25 && imc < 30) {
  document.write(' Acima do peso ');
} else if (imc > 30) {
  document.write(' Obeso ');
}
