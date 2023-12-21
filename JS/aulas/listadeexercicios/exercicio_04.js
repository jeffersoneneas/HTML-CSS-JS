// refatorando o código

/* /////Escolha a forma de pagamento/////

    1 - Debito, 10% de desconto
    2 - PIX ou Dinheiro, 15% de desconto
    3 - 2x, valor normal da etiqueta
    4 - Demais vezes, 10% de juros
*/
function aplicaDesconto(valor, desconto){
    return (valor - (valor*(desconto / 100)));
}

function aplicaJuros(valor, juros){
    return (valor + (valor*(juros / 100)));
}

const precoDoProduto = 100;
const formaDePagamento = 4;

  if (formaDePagamento === 1) {
    console.log(aplicaDesconto(precoDoProduto, 10)+'R$');
  } else if (formaDePagamento === 2) {
    console.log(aplicaDesconto(precoDoProduto, 15) + 'R$');
  } else if (formaDePagamento === 3) {
    console.log(precoDoProduto + "R$");
  } else {
    console.log(aplicaJuros(precoDoProduto, 10)+'R$');
  }


