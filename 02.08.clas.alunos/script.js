Nome1 = 'João';
num1 = 9;
num2 = 8;
num3 = 7;
result = 0;
result = (num1 + num2 + num3) / 3; // primeiro lugar
document.write(
  result >= 7
    ? ' O aluno ' +
        Nome1 +
        ' ficou com a media ' +
        result +
        ', portanto o aluno foi Aprovado! </br> '
    : 'O aluno' +
        Nome1 +
        ' ficou com a media ' +
        result +
        ', portanto o aluno foi Reprovado! </br> '
);

Nome2 = 'Maria'; // segundo lugar
num4 = 6;
num5 = 10;
num6 = 5;
result = 0;
result = (num4 + num5 + num6) / 3;
document.write(
  result >= 7
    ? ' A aluna ' +
        Nome2 +
        ' ficou com a media ' +
        result +
        ', portanto a aluna foi Aprovada! </br> '
    : 'O aluno' +
        Nome2 +
        ' ficou com a media ' +
        result +
        ', portanto a aluna foi Reprovada! </br> '
);

Nome3 = ' Zeca'; // ultimo lugar
num7 = 9;
num8 = 4;
num9 = 5;
result = 0;
result = (num7 + num8 + num9) / 3;
document.write(
  result >= 7
    ? ' O aluno ,' +
        Nome3 +
        ' ficou com a media ' +
        result +
        ', portanto o aluno foi Aprovado! </br> '
    : 'O aluno' +
        Nome3 +
        ' ficou com a media ' +
        result +
        ', portanto o aluno foi Reprovado! </br> '
);
