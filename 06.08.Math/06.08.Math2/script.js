/*
2.Crie um script onde o usuario digite 3 numeros , esse numeros elevados a 2 , 3 e 4 , mostre o resultado de cada um deles e a soma das potencias dos 3
 */

var num1 = prompt('Digite o 1° número que deseja calcular, ex: 1');
var num2 = prompt('Digite o 2° número que deseja calcular, ex: 2');
var num3 = prompt('Digite o 3° número que deseja calcular, ex: 3');

var elevado2 = 2;
var elevado3 = 3;
var elevado4 = 4;

document.write(
  num1 +
    ' elevado a ' +
    elevado2 +
    ' é: ' +
    Math.pow(num1, elevado2) +
    ' </br> ' +
    num1 +
    ' elevado a ' +
    elevado3 +
    ' é: ' +
    Math.pow(num1, elevado3) +
    ' </br> ' +
    num1 +
    ' elevado a ' +
    elevado4 +
    ' é: ' +
    Math.pow(num1, elevado4) +
    ' </br> ' +
    ' Soma das potencias é: ' +
    (Math.pow(num1, elevado2) +
      Math.pow(num1, elevado3) +
      Math.pow(num1, elevado4)) +
    ' </br> '
);

document.write(
  num2 +
    ' elevado a ' +
    elevado2 +
    ' é: ' +
    Math.pow(num2, elevado2) +
    ' </br> ' +
    num2 +
    ' elevado a ' +
    elevado3 +
    ' é: ' +
    Math.pow(num2, elevado3) +
    ' </br> ' +
    num2 +
    ' elevado a ' +
    elevado4 +
    ' é: ' +
    Math.pow(num2, elevado4) +
    ' </br> ' +
    ' Soma das potencias é: ' +
    (Math.pow(num2, elevado2) +
      Math.pow(num2, elevado3) +
      Math.pow(num2, elevado4)) +
    ' </br> '
);

document.write(
  num3 +
    ' elevado a ' +
    elevado2 +
    ' é: ' +
    Math.pow(num3, elevado2) +
    ' </br> ' +
    num3 +
    ' elevado a ' +
    elevado3 +
    ' é: ' +
    Math.pow(num3, elevado3) +
    ' </br> ' +
    num3 +
    ' elevado a ' +
    elevado4 +
    ' é: ' +
    Math.pow(num3, elevado4) +
    ' </br> ' +
    ' Soma das potencias é: ' +
    (Math.pow(num3, elevado2) +
      Math.pow(num3, elevado3) +
      Math.pow(num3, elevado4)) +
    ' </br> '
);
