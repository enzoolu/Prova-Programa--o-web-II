let numeroSorteado = Math.round(Math.random()*30);
    while (numeroSorteado >= 30 && numeroSorteado <= 0) {
        numeroSorteado = Math.round(Math.random()*30);
    }
    
console.log(`Número sorteado: ${numeroSorteado}`);

let soma = 0;
for (let i = 0; i <= numeroSorteado; i++) {
    soma += i
}
console.log(`A soma é: ${soma}`);