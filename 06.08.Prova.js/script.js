/*01.Informe qual código para realizar o que se pede nos itens abaixo: a. Multiplique 10 com 5 e exiba o resultado; 
b. Divida 10 com 2 e exiba o resultado; 
c. Exiba o restante quando for dividido 18 por 9; 
d. Use o operador de atribuição correto que resultará em x ser 15; 
x = 10, y = 5; 
e. Use o operador de atribuição correto que resultará em x ser 50; x = 10, y = 5; 
*/

/*
//a resposta:
var num1 = 10;
var num2 = 5;
result = 0;
result = num1 * num2;
document.write(result);
*/

/* 
//b resposta
var num1 = 10;
var num2 = 2;
result = 0;
result = num1 / num2;
document.write(result);
*/

/*
// c resposta:
var num1 = 18;
var num2 = 9;
result = 0;
result = num1 % num2;
document.write(result);
*/

/*
//d resposta
var x = 10;
var y = 5;
x += y;
document.write(x);
x ser 50; x = 10, y = 5;
*/

/*
//e resposta
var x = 10;
var y = 5;
x *= y;
document.write(x);
*/

/*
02.Considerando a, b, c e d como variáveis com valores iniciais iguais a 5, 7, 3 e 9,  respectivamente, assinale a opção correta. 
a. O resultado da expressão (a != 3 || b < 10 || c == 5) é falso. 
b. O resultado da expressão (d > 8 && c == 3 || a >= 10) é verdadeiro. c. O resultado da expressão (d == 12 && a != 10) é falso. 
d. O resultado da expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é  falso. 
e. O resultado da expressão (a == 3 || b > 10 || d == 8 ) é verdadeiro. 
*/
/*
//Resposta correta:
b. O resultado da expressão (d > 8 && c == 3 || a >= 10) é verdadeiro.
*/

/*
03. Escreva um script usando as 03 estruturas de repetição estudadas  (while, do...while, for), para escrever na tela de 0 a 1000. 
*/

/*
count = 0;
while (count <= 1000) {
  document.write(count, ' ');
  count++;
}
*/

/*
count = 0;
do {
  document.write(count, ' ');
  count++;
} while (count <= 1000);
*/

/*
count = 0;
while (count <= 1000) {
  document.write(count, ' ');
  count++;
}
*/

/*
04. Escreva a estrutura de condição para fazer as seguintes verificações: 
a. Numero impar ou par; 
b. Numero é múltiplo de 3; 
c. Numero é primo; 
d. Numero1 é maior que numero2; 
*/

/*
//a resposta
var digitado = prompt('Digite um número');
function imparPar(numero) {
  if (numero % 2 == 0) document.write('é par!');
  else document.write('é impar!');
}
imparPar(digitado);
*/

/*
//b resposta
var digitado = parseInt(prompt('Digite um número:'));
function mult(numero) {
  if (numero % 3 == 0) document.write('é multiplo!');
  else document.write('não é multiplo!');
}
mult(digitado);
*/

/*
// c primo

qtdiv = 0;

num = 7;
for(let i = 1; i <=  num; i++){
  if(num % i == 0)
  qtdiv++;
}
if (atdiv == 2)
  alert ('é primo');
*/

/*
//d resposta
var num1, num2;

num1 = parseInt(prompt('Digite o primeiro valor: '));
num2 = parseInt(prompt('Digite o segundo valor: '));
function maior(numero) {
  if (num1 > num2) document.write(num1, ' é maior que numero 2!');
  else document.write(num2, ' é maior!');
}
maior(num1, num2);
*/

/*
05. Faça um script que pede dois inteiros e armazene eles em duas  variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o  antes e o depois em uma janela de alert ou document. 
*/
/*
var variavel1 = prompt('variavel 1');
var variavel2 = prompt('variavel 2');

function tratarVariavel(variavel1, variavel2) {
  var troca1 = variavel2;
  var troca2 = variavel1;
  document.write(
    ' Valor 1: Original -> ',
    variavel1,
    '</br>',
    'Valor 2: Original -> ',
    variavel2,
    '</br>',
    ' Valor 1: Trocado -> ',
    troca1,
    '</br>',
    'Valor 2: Trocado -> ',
    troca2,
  );
}

tratarVariavel(variavel1, variavel2);
*/

/*
//06. Execute a função chamada myFunction.

function myFunction () { 
  alert ("Olá, mundo!"); 
 }
 myFunction()
 */

/*
 //07. Crie uma função que retorno a multiplicação de um numero por 2 e com o resultado, eleve ao quadrado. 

 var parametro = prompt(' Digite o número que deseja calcular ');
function multiplicar(parametro) {
  var resultado = parametro * 2;
  resultado = Math.pow(parametro, 2);
  return resultado;
}
alert(multiplicar(parametro));
*/

/*
08. Utilizando as funções math faça o que se pede: 
a. Use o método matemático correto para criar um número aleatório. 
b. Use o método matemático correto para retornar o maior número de 10 e  20. 
c. Use o método matemático correto para arredondar um número para o  inteiro mais próximo. 
d. Use o método matemático correto para obter a raiz quadrada de 9. 
*/
/*
// a resposta:

function aleatorio() {
  return Math.random();
}
document.write(aleatorio());
*/

/*
// b resposta:

var param1 = 10;
var param2 = 20;

if (param1 < param2) {
  alert(' O valor: ' + param2 + ' é maior que: ' + param1);
}
*/

/*
// c resposta:
var numeroA = 20.49;

alert(Math.round(numeroA));
*/

/*
//d resposta:
alert(' Raíz quadrada de 9 = ' + Math.sqrt(9));
*/

/*

//09. Crie um script para alertar "Hello World" se x for maior que y, caso  contrário, alertar "Goodbye". 

var x = prompt(' Informe o valor de X ');
var y = prompt(' Informe o valor de Y ');

if (x > y) {
  alert('Hello World');
} else {
  alert('Goodbye');
}
*/
/*
//10. Usando switch case, faça um script que alertará "Olá" se a fruta for  "banana" e "Bem-vindo" se a fruta for "maçã".

const fruta = prompt(' Digite banana ou maçã.');

switch (fruta) {
  case 'banana':
    alert('Olá');
    break;
  case 'maçã':
    alert('Bem-vindo');
    break;
  default:
    alert(`Por favor, informe banana ou maçã, no lugar de: ${expr}.`);
}
*/
