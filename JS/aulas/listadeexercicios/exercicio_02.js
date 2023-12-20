console.log('Calculadora de IMC');

// Pegando informações
var peso = 53;
var altura = 1.63;

// Calculo do IMC
const imc = peso / Math.pow(altura, 2);

// Visualização do resultado
console.log(`seu IMC é : ${imc.toFixed(1)}`);

// Condição do resultado
if (imc < 18.5) {
  console.log("Abaixo do peso!");
} else if (imc < 25) {
  console.log("Peso normal!");
} else if (imc < 30) {
  console.log(" Acima do peso!");
} else if (imc <= 40) {
  console.log("Obeso!");
}else {
    console.log('Obesidade grave!!!!!!');
}