console.log("Calculadora de Desconto!");

// valor do produto
var valorProduto = 150;

// forma de pagamento(debito, pix ou dinheiro, parcelado 2x e parcelado mais que duas vezes)
var formaPagamento = "debito";

// calculo
var descontado = 0;
var desconto = 0;
if (formaPagamento === "debito") {
  desconto = (10 / 100) * valorProduto;
  descontado = valorProduto - desconto;
} else if ((formaPagamento == "pix") | (formaPagamento == "dinheiro")) {
  desconto = (15 / 100) * valorProduto;
  descontado = valorProduto - desconto;
} else if (formaPagamento <= 2 && formaPagamento > 1) {
  desconto = (15 / 100) * valorProduto;
  descontado = valorProduto - desconto;
} else if (formaPagamento >= 3) {
  desconto = (15 / 100) * valorProduto;
  descontado = valorProduto + desconto;
} else {
  console.log(
    "Forma de pagamento inválida. Por favor, escolha entre: debito, pix, dinheiro ou o numero da parcela"
  );
}

if (descontado != 0) {
  console.log(`O valor final do produto ficou por: ${descontado} R$`);
}
