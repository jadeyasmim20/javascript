// 3x3x3 =27 base x espoente, eleva o primeiro pelo segundo, sqrt raízes quadradas, Math
// raiz quadrada do número 25 corresponde ao número 5, pois 5² é igual a 25.

//document.write(Math.pow(3, 3)); 

num1 = 9.31;
num2 = 10;
num3 = 0.00002;
num4 = 3E-3; // 3 x 10 ^ - 3 notação cientifica 3casas antes do . n° grandes ou pequenos
num5 = 3/2;
num6 = -5.05

// respostas roud(arredondar o.5 = 1, 0.3 = 0): 9, 10, 0, 0, 2, -5.
// respostas roud (chão arredonda para baixo 0.5 = 0, 0.3 =0): 9, 10, 0, 0, 1, --6.
// respostas ceil (vai arredondar para cima, 0.5 = 1, 0.3 = 1): 10, 10, 1, 1, 2, -5.
//ex: -5 é maior que -6.
// abs (absoluto, tamanho vai tirar o menos): 9.51, 10, 0.00002, 0.0003, 1.5, 5.


document.write('test roud:', Math.round(num1), ' ', Math.round(num2), ' ', Math.round(num3), ' ', Math.round(num4), ' ', Math.round(num5), ' ', Math.round(num6), '</br>')

document.write('test floor:', Math.floor(num1), ' ', Math.floor(num2), ' ', Math.floor(num3), ' ', Math.floor(num4), ' ', Math.floor(num5), ' ', Math.floor(num6), '</br>')

document.write('test ceil:', Math.ceil(num1), ' ', Math.ceil(num2), ' ', Math.ceil(num3), ' ', Math.ceil(num4), ' ', Math.ceil(num5),' ', Math.ceil(num6), '</br>')

document.write('test abs:', Math.abs(num1), ' ', Math.abs(num2), ' ', Math.abs(num3), ' ', Math.abs(num4), ' ', Math.abs(num5),' ', Math.abs(num6), '</br>')

//document.write(Math.sin(3.14))

document.write('o maior da serie e: ', Math.max(19, 21, 10, 12, 19, 22, 34), '</br>');//34

document.write('o menor da serie e: ', Math.min(19, 21, 10, 12, 19, 22, 34), '</br>');//10

document.write('número randomico: ', (Math.floor(Math.random() * ((750 - 250 +1)) + 250)) // intervalo.
