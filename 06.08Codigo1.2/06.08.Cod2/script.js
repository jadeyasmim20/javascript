//2.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021) .Controle : o usuário não pode digitar idade negativa ou acima de 130 anos por exemplo

var ano = prompt('Digite seu ano de nascimento, ex: 1990');
var maioridade = 0;

function anoNascimento(ano) {
  if (isNaN(ano)) {
    alert('Invalido, digitar ano corretamente!');
  } else {
    if (ano > 2021 || ano < 1891)
      alert('Sua idade não está entre 18 e 130 anos, digite outro número!');
    else {
      maioridade = 2021 - ano;
      if (maioridade >= 18) alert('maior de idade, ' + maioridade + ' anos');
      else {
        alert('menor de idade, ' + maioridade + ' ano(s)');
      }
    }
  }
}
anoNascimento(ano);
