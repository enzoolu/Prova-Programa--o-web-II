let numeroSorteado = Math.round(Math.random()*1000);
console.log(numeroSorteado);

let centenas = numeroSorteado / 100;
console.log(`Centena = ${centenas.toFixed(0)}00`);