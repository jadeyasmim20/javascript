/*Recrie as funções agora com controle de erros.
1.Crie uma função que recebe 2 parâmetros(numéricos) e retorna a divisão deles. Controle : o usurario não pode digitar letras, não pode acontecer Divisão por 0, sempre dividir o maior numero pelo menor numero e mostrar o numero arredondado
*/

var num1 = prompt('Digite 1° número ex: 10');
var num2 = prompt('Digite 2° número ex: 5');

function retornaDivisao(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    //se não for número, vou dar alerta
    alert('Campo invalido, digite um número!');
  } else {
    // se for n° vai cair no else
    if (num1 == 0 || num2 == 0) {
      // se 1 ou 2 igual a zero está errado!
      alert('Campo invalido, digite diferente de zero!');
    }
    if (num2 > num1) {
      // se 2 n° for maior que o 1°n dividir
      // let no lugar do var poís ele ta dentro em um bloco
      return num2 / num1;
      // não usar parenteses
    } else if (num1 > num2) {
      return num1 / num2;
    }
  }
}
retornaDivisao(num1, num2);
document.write('Número arredondado: ' + Math.round(retornaDivisao(num1, num2)));

/*
var num1 = prompt('Digite um número');
var num2 = prompt('Digite outro número');
var resultado = 0;

function dividir(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    // se nao eh número
    alert('Informação errada, digite apenas números!');
  } else {
    //numero
    if (num1 == 0 || num2 == 0) {
      // divisao por zero
    } else {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      if (num1 > num2) {
        resultado = num1 / num2;
        resultado = Math.round(resultado);
        alert('resultado esperado 1: ' + resultado);
      } else {
        resultado = num2 / num1;
        resultado = Math.round(resultado);
        alert('resultado esperado 2: ' + resultado);
      }
    }
  }
}
dividir(num1, num2);
*/
