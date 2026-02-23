let primeiroNumero = parseInt(Math.random()*10000);
let segundoNumero = parseInt(Math.random()*500);
let resultado =primeiroNumero + segundoNumero;
console.log(primeiroNumero,segundoNumero);
console.log(resultado);

//exibindo na pagina - para ISSO CRIAMOS UMA VARIAVEL QUE RECEBE O ELEMENTO HTML

document.getElementById('elPrimeiroNumero').textContent = 
`Primeiro número sorteado = ${primeiroNumero}`;

document.getElementById('elSegundoNumero').textContent = 
`segundo número sorteado = ${segundoNumero}`;

document.getElementById('resultadoSoma').textContent = 
`${primeiroNumero} + ${segundoNumero} = ${resultado}`;