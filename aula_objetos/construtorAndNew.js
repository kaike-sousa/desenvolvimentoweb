function xicara(cor, forma, peso, capacidade){
    this.cor = cor;
    this.forma = forma;
    this.peso= peso;
    this.capacidade = capacidade;
}

const xicara1 = new xicara('branca', 'redonda', 5, 10);
const xicara2 = new xicara('rosa', 'quadrada', 8, 15);

console.log(xicara1)
console.log(xicara2)