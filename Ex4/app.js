const numeros = [];
    for(let i=0; i<=4; i++){
        numeros[i] = Math.round(Math.random()*100);        
    }
console.log(numeros);

if (numeros[0] > numeros[1] && numeros[0] > numeros[2] && numeros[0] > numeros[3] && numeros[0] > numeros[4]) {
    console.log(`O maior número é ${numeros[0]}`);
}

else if (numeros[1] > numeros[0] && numeros[1] > numeros[2] && numeros[1] > numeros[3] && numeros[1] > numeros[4]) {
    console.log(`O maior número é ${numeros[1]}`);
}

else if (numeros[2] > numeros[0] && numeros[2] > numeros[1] && numeros[2] > numeros[3] && numeros[2] > numeros[4]) {
    console.log(`O maior número é ${numeros[2]}`);
}

else if (numeros[3] > numeros[0] && numeros[3] > numeros[1] && numeros[3] > numeros[2] && numeros[1] > numeros[3]) {
    console.log(`O maior número é ${numeros[3]}`);
}

else {
    console.log(`O maior número é ${numeros[4]}`);
}

//-----------------------------------------

if (numeros[0] < numeros[1] && numeros[0] < numeros[2] && numeros[0] < numeros[3] && numeros[0] < numeros[4]) {
    console.log(`O menor número é ${numeros[0]}`);
}

else if (numeros[1] < numeros[0] && numeros[1] < numeros[2] && numeros[1] < numeros[3] && numeros[1] < numeros[4]) {
    console.log(`O menor número é ${numeros[1]}`);
}

else if (numeros[2] < numeros[0] && numeros[2] < numeros[1] && numeros[2] < numeros[3] && numeros[2] < numeros[4]) {
    console.log(`O menor número é ${numeros[2]}`);
}

else if (numeros[3] < numeros[0] && numeros[3] < numeros[1] && numeros[3] < numeros[2] && numeros[1] < numeros[3]) {
    console.log(`O menor número é ${numeros[3]}`);
}

else {
    console.log(`O menor número é ${numeros[4]}`);
}