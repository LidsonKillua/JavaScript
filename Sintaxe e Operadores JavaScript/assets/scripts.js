/*  Operadores: 

   =          igual
 x += 1     x = x + 1
 x *= 1     x = x * 1
 x /= 1     x = x / 1
 x %= 1     x = x % 1   

 + adição
 - subtração
 * multiplicação
 ** potência 
 / divisão
 % resto da divisão
 ++ incrementar em 1
 -- decrementar em 1

 == igual a 
 === mesmo valor e tipo
 != diferente
 !== valor e tipos diferentes
 > maior 
 < menor
 >= maior ou igual
 <= menor ou igual

 && "e" lógico
 || "ou" lógico
 ! "não" lógico


 if ternário 
 (condição) ? true : false;
*/ 

// rodar no HTML
function compare(num1, num2) {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var iguais = maior10 = menor20 = '';
    var soma = num1 + num2;

    (num1 === num2) ? iguais = ' são' : iguais = ' não são';
    (soma > 10) ? maior10 = 'maior' : maior10 = 'menor';
    (soma < 20) ? menor20 = 'menor' : menor20 = 'maior';

    console.log(`Os números ${num1} e ${num2} ${iguais} iguais. Sua soma é ${soma}, que é ${maior10} que 10 e ${menor20} que 20.`);
}


// Solução da aula:
function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    var soma = num1 + num2;
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

// rodar no node
console.log(comparaNumeros(1, 2));