//1.Programa que le um número entre 0 e 10, e escreve este número por extenso.

numeros = parseInt(prompt(' Digite um número entre 0 e 10 '));

switch (numeros) {
  case 0:
    document.write('Zero');
    break;
  case 1:
    document.write('Um'); //digitar númer 1
    break; //delimita o final
  case 2:
    document.write('Dois');
    break;
  case 3:
    document.write('Três');
    break;
  case 4:
    document.write('Quatro');
    break;
  case 5:
    document.write('Cinco');
    break;
  case 6:
    document.write('Seis');
    break;
  case 7:
    document.write('Sete');
    break;
  case 8:
    document.write('Oito');
    break;
  case 9:
    document.write('Nove');
    break;
  case 10:
    document.write('Dez');
    break;
  default:
    document.write('Erro');
    break;
}
