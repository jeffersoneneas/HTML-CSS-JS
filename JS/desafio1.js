/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas :
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
console.log('Programa de viagem!');
// preço do combustível
const precoCombustivel = 5.63;

// km por litro
const kmPorLitro = 27;

// distância da viagem
let DistanciaDaViagem = 595;

//calculo do resultado //
let resultado = (DistanciaDaViagem / kmPorLitro)*precoCombustivel;

// mostrar no console 
console.log('O valor gasto na viagem é: ' +resultado.toFixed()+'R$');
