// 3° Script mostrando na tela: calculo do valor a ser pago por um produto, com a condição de pagamento escolhida e efetuar o cálculo adequado;

var produto = 150;

pag = parseInt(prompt('Escolha uma opção: 1, 2, 3  ou 4'));

if (pag == 1)
  document.write('O valor a ser pago  no produto é: ', (produto * 90) / 100);

if (pag == 2)
  document.write('O valor a ser pago no produto é: ', (produto * 85) / 100);

if (pag == 3) document.write('O valor a ser pago no produto é: ', produto);

if (pag == 4)
  document.write(
    'O valor a ser pago no produto é: ',
    produto + (produto * 10) / 100
  );
