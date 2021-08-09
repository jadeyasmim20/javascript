//2.Aumento de acordo com o plano de trabalho.

var salario = parseInt(prompt(' Digite o seu salario '));
var plano = prompt(' Escolha a sua opção de plano: A, B ou C ');

switch (plano) {
  case (plano = 'A'):
    salario = salario * 0.1 + salario;
    document.write('salario: ' + salario);
    break; //delimita o final
  case (plano = 'B'):
    salario = salario * 0.15 + salario;
    document.write('salario: ' + salario);
    break;
  case (plano = 'C'):
    salario = salario * 0.2 + salario;
    document.write('salario: ' + salario);
    break;
  default:
    document.write('Erro');
    break;
}
