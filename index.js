const unidades = {
  1: ['um'],
  2: ['dois'],
  3: ['tres'],
  4: ['quatro'],
  5: ['cinco'],
  6: ['seis'],
  7: ['sete'],
  8: ['oito'],
  9: ['nove']
}

const dezenas = {
  1: ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
  2: ['vinte'],
  3: ['trinta'],
  4: ['quarenta'],
  5: ['cinquenta'],
  6: ['sessenta'],
  7: ['setenta'],
  8: ['oitenta'],
  9: ['noventa']
}

const centenas = {
  1: ['Cento'],
  2: ['Duzentos'],
  3: ['Trezentos'],
  4: ['Quatrocentos'],
  5: ['Quinhentos'],
  6: ['Seiscentos'],
  7: ['Setecentos'],
  8: ['Oitocentos'],
  9: ['Novecentos']
}

function writeNumber(number) {
  //do not use this function, it's old and ugly
  let answer = "";

  if (number.length == 1) {
    document.write(`${unidades[number[0]]}`);
    return;
  } else if (number.length == 2) {
    if (number[0] == 1) {
      document.write(dezToNine[(number)]);
      return;
    } else {
      answer = dezenas[number[0]] + " e " + unidades[number[1]];
      document.write(answer);
      return;
    }
  } else if (number.length == 3) {

    if (number[0] == 1 && number[1] == 0 && number[2] == 0) {
      document.write("cem");
      return;
    }

    answer = centenas[number[0]];

    if (number[1] === 1) {
      answer += " e " + dezToNine[parseInt(number[1] + number[2])];
      document.write(answer);
      return;
    } else {
      console.log(answer);
      answer += " e " + dezenas[number[1]] + " e " + unidades[number[2]];
      document.write(answer);
    }
  }
  return;
}

function jeitinhoDoHeyd(number) {
  if (number.length === 1) {
    if (number === '0') {
      document.write('zero')
      return;
    }
    document.write(`${unidades[number[0]]}`);
    return;
  }
  if (number.length === 2) {
    if (number[0] === '1') {
      document.write(`${dezenas[number[0]][number[1]]}`);
      return;
    }
    if (number[1] === '0') {
      document.write(`${dezenas[number[0]]}`);
      return;
    }    
    document.write(`${dezenas[number[0]]} e ${unidades[number[1]]}`);
    return;
  }
  if (number.length === 3) {
    if (number === '100') {
      document.write('cem');
      return;
    }
    if (number[1] === '1') {
      document.write(`${centenas[number[0]]} e ${dezenas[number[1]][number[2]]}`);
      return;
    }
  
    if (number[2] === '0') {
      document.write(`${centenas[number[0]]} e ${dezenas[number[1]]}`);
      return;
    }    
    document.write(`${centenas[number[0]]} e ${dezenas[number[1]]} e ${unidades[number[2]]}`);
    return;
  }

  document.write("Escreve 3 digitos ae malandro!");
  return;
}

const number = prompt("Digite um numero");

//writeNumber(number);
jeitinhoDoHeyd(number);