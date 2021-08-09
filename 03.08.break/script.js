//Script informando a quantidade de dias do mês de acordo com o mês digitado (para o mês use números ou string). Utilize switch com break

var mes = new String();
mes = prompt(' Digite o número ou o nome de um mês ');

switch (mes) {
  case '1':
  case 'Janeiro':
    document.write('Janeiro tem 31 dias'); //digitar númer 1
    break; //delimita o final
  case '2':
  case 'Fevereiro':
    document.write('Fevereiro tem 28 dias');
    break;
  case '3':
  case 'Março':
    document.write('Março tem 31 dias');
    break;
  case '4':
  case 'Abril':
    document.write('Abril tem 30 dias');
    break;
  case '5':
  case 'Maio':
    document.write('Maio tem 31 dias');
    break;
  case '6':
  case 'Junho':
    document.write('Junho tem 30 dias');
    break;
  case '7':
  case 'Julho':
    document.write('Julho tem 31 dias');
    break;
  case '8':
  case 'Agosto':
    document.write('Agosto tem 31 dias');
    break;
  case '9':
  case 'Setembro':
    document.write('Setembro tem 30 dias');
    break;
  case '10':
  case 'Outubro':
    document.write('Outubro tem 31 dias');
    break;
  case '11':
  case 'Novembro':
    document.write('Novembro tem 30 dias');
    break;
  case '12':
  case 'Dezembro':
    document.write('Dezembro tem 31 dias');
    break;
  default:
    document.write('Erro');
    break;
}
