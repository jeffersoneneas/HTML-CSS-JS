// preço dos combustíveis
const precoGasolina = 5.63;
const precoEtanol = 4.15;
const KmPorLitro = 10;
const distanciaViagem = 100;

// qual é o combustivel
var combustivel = 'etanol';

// condicional
if(combustivel === 'gasolina'){
    resultado = (distanciaViagem/KmPorLitro)*precoGasolina;
}else if(combustivel === 'etanol'){
    resultado = (distanciaViagem / KmPorLitro) * precoEtanol;
}else {
    console.log('combustivel informado é invalido');
}

console.log(resultado.toFixed(2));