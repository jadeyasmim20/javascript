//4.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021)
// nome da função, por parametro ano que ele vai receber, preciso saber a idade

function maiorIdade(ano) {
  idade = 2021 - ano; //vou ter a idade
  if (idade >= 18) alert('maior de idade');
  else alert('menor de idade'); // ou document.write
}

ano = prompt('Digite o ano de nascimento');
maiorIdade(ano);
