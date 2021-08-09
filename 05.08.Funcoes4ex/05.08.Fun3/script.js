//3 - Crie uma função que informe se o sexo é feminino ou masculino. ex: usuário digitou 'F,' programa retorna: é feminino!.

var digitado = prompt('Digite uma das opções: F ou M');
function categoria(F, M) {
  if (digitado == 'F') document.write('Feminino');
  else if (digitado == 'M') document.write('Masculino');
}
categoria('digitado');
