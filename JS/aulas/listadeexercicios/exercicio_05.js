class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastoDePercurso(distancia, precoCombustivel){
        return (distancia / this.gastoPorKm) *precoCombustivel;
    }

}

const palio = new Carro('fiat','prata',10);
console.log(palio.calcularGastoDePercurso(70, 5));

const uno = new Carro('fiat', 'preto', 12);
console.log(uno.calcularGastoDePercurso(70,5));
