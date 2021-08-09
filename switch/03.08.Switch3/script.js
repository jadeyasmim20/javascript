// Desafio: 3 O cardápio:

var codigo = parseInt(prompt(' Digite o codigo '));
var quantidade = parseInt(prompt(' Digite a quantidade '));

switch (codigo) {
  case (codigo = 100):
    valor = quantidade * 1.2;
    document.write(
      quantidade + ' Cachorro(s) quente(s): R$ ' + valor + ' reais'
    );
    break; //delimita o final
  case (codigo = 101):
    valor = quantidade * 1.3;
    document.write(quantidade + ' Bauru(s) simples: R$ ' + valor + ' reais');
    break;
  case (codigo = 102):
    valor = quantidade * 1.5;
    document.write(quantidade + ' Bauru(s) com ovo(s): R$ ' + valor + ' reais');
    break;
  case (codigo = 103):
    valor = quantidade * 1.2;
    document.write(quantidade + ' Hambúrger(s): R$ ' + valor + ' reais');
    break;
  case (codigo = 104):
    valor = quantidade * 1.3;
    document.write(quantidade + ' Cheeseburguer(s): R$ ' + valor + ' reais');
    break;
  case (codigo = 105):
    valor = quantidade * 1;
    document.write(quantidade + ' Refrigerante(s): R$ ' + valor + ' reais');
    break;
  default:
    document.write('Erro');
    break;
}
