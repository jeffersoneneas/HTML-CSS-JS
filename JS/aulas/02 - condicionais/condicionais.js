const numero = 0;

const numeroPar = (numero % 5) === 0;

if(numero === 0){
    console.log('número invalido');
}else if(numeroPar){
    console.log("é par");
}else {
    console.log("impar");
}

// console.log(numeroPar);