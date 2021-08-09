//4 - Peça ao usuário para digitar 10 idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores. intervalos: [0- 17], [18-110],

var recebe_17 = 0;
var recebe_110 = 0;

for (i = 1; i <= 10; i++) {
  var idade = parseInt(prompt('Digite idade em números, ex: 30'));
  if (idade >= 0 && idade <= 17) {
    recebe_17++;
  }
  if (idade >= 18 && idade <= 110) {
    recebe_110++;
  }
}
document.write('Pessoas menores de idade: ', recebe_17, '</br>');
document.write('Pessoas maiores de idade: ', recebe_110, '</br>');
