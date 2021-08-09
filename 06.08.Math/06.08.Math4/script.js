/*
4.Crie um script onde o usuario digite um numero e esse mesmo seja subtraido de um numero randomico(0 - 1000) e 
//mostre na tela o resultado absoluto do mesma bem como 
//o numero escolhido pelo usuario e 
//o numero randomico
*/

var num1 = prompt('Digite o número');
var randomico = Math.round(Math.random() * 1000);

document.write(
  'Número digitado: ' + num1,
  ' </br> ',
  ' Número randomico: ' + randomico,
  ' </br> ',
  'Resultado absoluto: ' + Math.abs(num1 - randomico)
);
