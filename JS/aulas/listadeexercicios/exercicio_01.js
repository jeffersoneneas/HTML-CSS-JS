console.log("Calculadora de média");

// notas dos alunos
var nota1 = 7;
var nota2 = 5;
var nota3 = 4;

// calculo da média
const media = (nota1 + nota2 + nota3) / 3;

// condição
if (media < 5) {
  console.log(`Aluno reprovado com a nota: ${media.toFixed(1)}`);
} else if (media <= 7) {
  console.log(`Aluno de recuperação com a nota: ${media.toFixed(1)}`);
} else {
  console.log(`Aluno aprovado com a nota: ${media.toFixed(1)}`);
}
console.log('Fim do programa!');
console.log('Tenha um ótimo dia!')