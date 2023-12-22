class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const jefferson = new Pessoa();

jefferson.nome = "Jefferson";
jefferson.idade = "25";

console.log(jefferson);
