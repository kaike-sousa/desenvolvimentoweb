class Carro{
    constructor(marca, ano, cor){
        this.marca = marca;
        this.ano = ano;
        this.cor = cor
    }
    apresentar(){
        var idade = 2025 - this.ano;
        console.log('O' +this.marca + 'é' + this.cor + 'e tem' + idade + 'anos')
    }
}

const meuCarro = new Carro ('ford', 2014, 'vermelho');
meuCarro. apresentar()