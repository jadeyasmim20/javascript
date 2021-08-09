//WHILE: programa pedindo pro usuário digitar sua idade e OBRIGUE que a idade digitada esteja correta.

count = 0;

do {
  idade = prompt('Digite a sua idade somente com números: '); // informação para  o usuario.
  aux = parseInt(idade);
  aux2 = idade - aux; // para ser só n° inteiros.
  // tratando a entrada:
  if (idade < 0 || idade > 120 || aux2 != 0 || idade == ' ' || isNaN(aux)) {
    // if: se for esses requisitos
    alert('Valor inválido. Digite novamente: '); // alerta de erro.
    tem = 1;
  } // else: se não forem:
  else alert('Idade preenchida corretamente!'); // preenchido com sucesso!
  temp = 0;
} while (temp == 1); // condição de parada.

// Requisitos idade: ser +, ser n° inteiros 31, idade menor <120 e idade >0 maior que zero, idade ' ' não pode deixar espaço vaziu, não pode ser string; || ou , && e, isNaN
