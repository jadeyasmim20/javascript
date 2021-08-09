num1 = 31;
num2 = 9;
num3 = 55;
num4 = 16;
num5 = 9;
num6 = 3500;
num7 = 5;
num8 = 30;

//Item 1
total = num1 + num2;
document.write(total);
document.write('</br>'); // soma da minha idade (31)  com a da minha filha(9)= 40
//Texto concatenado:
document.write('Soma da minha idade com a da minha filha: ' + total + '<br>');

//Item 2
total = total * num3;
document.write(total);
document.write('</br>'); //40 multiplicando com a idade do meu pai(55)= 2200
//Texto concatenado:
document.write('Multiplicando com a idade do meu pai: ' + total + '<br>');

//Item 3
total = num4 + num5;
document.write(total);
document.write('</br>'); // soma da idade dos meus irmãos 16 + 9= 25
//Texto concatenado:
document.write('Soma da idade dos meus irmãos: ' + total + '<br>');

total = total * num1;
document.write(total);
document.write('</br>'); // multiplicando com a minha idade 25 * 31= 775
//Texto concatenado:
document.write('Multiplicando com a minha idade: ' + total + '<br>');

total = total / (num1 + num2);
document.write(total);
document.write('</br>'); // dividindo com o resultado do item 01 775 / 40= 19.375
//Texto concatenado:
document.write('Dividindo com o resultado do item 01: ' + total + '<br>');

// Item 4
total = num6 / num7;
document.write(total);
document.write('</br>'); // divida renda familiar pela  minha família 3500 / 5= 700
//Texto concatenado:
document.write('Divida renda familiar pela  minha família: ' + total + '<br>');

total = total * num8;
document.write(total);
document.write('</br>'); // resultado multiplique por 30 *700=21.000
//Texto concatenado:
document.write('Resultado multiplique por 30: ' + total + '<br>');
