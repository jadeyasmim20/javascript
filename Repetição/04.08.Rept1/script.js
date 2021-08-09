//1 - Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar :
//a. A menor altura do grupo;
//b. A maior altura do grupo;

var menor,
  maior = 0;

for (i = 1; i <= 15; i++) {
  altura = prompt('Digite a altura do individuo: ' + i); // contador, condição,
  if (i == 1) menor = altura; //
  if (altura < menor) menor = altura; //comparando se altura digitada é menor do que a variavel.
  if (altura > maior) maior = altura; //comparando se altura digitada é maior do que a variavel.
}
document.write('maior ', maior, 'menor ', menor);
