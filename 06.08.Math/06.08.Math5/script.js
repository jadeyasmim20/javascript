/*
5. Crie um script onde o usuario digite o angulo que ele quer calcular , mostre na tela o angulo escolhido e seu seno , cosseno e tangente
*/

var angulo = prompt('Digite o angulo que você quer calcular.');

document.write('Angulo escolhido ' + angulo, '</br>');
document.write('O seno de: ' + angulo, ' é ', Math.sin(angulo), '</br>');
document.write('O cosseno de: ' + angulo, ' é ', Math.cos(angulo), '</br>');
document.write('A tangente de: ' + angulo, ' é ', Math.tan(angulo));
