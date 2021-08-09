//3.Crie uma função que pede ao usuário para digitar um valor e calcular 5% de desconto retornando o valor do desconto.

function desconto() {
  val = prompt('Digite um valor');
  desc = val * 0.05; // ou 0.5 / 100
  return desc;
}
alert(desconto());
