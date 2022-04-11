let valorReal = Math.round(Math.random()*100);
console.log(`Valor em Real: ${valorReal}`);

let conversaoDolar = valorReal / 4.7;
console.log(`Conversão para Dolar: ${conversaoDolar.toFixed(2)}`);

let conversaoEuro = valorReal / 5.11;
console.log(`Conversão para Euro: ${conversaoEuro.toFixed(2)}`);

let conversaoPeso = valorReal / 0.042;
console.log(`Conversão para Peso Argentino: ${conversaoPeso.toFixed(2)}`);

let conversaoLibra = valorReal / 6.12;
console.log(`Conversão para Libra: ${conversaoLibra.toFixed(2)}`);

let conversaoBitcoin = valorReal / 199759.79;
console.log(`Conversão para Bitcoin: ${conversaoBitcoin}`);