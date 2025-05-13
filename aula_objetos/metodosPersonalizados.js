function pessoa(nome, idade, rua){
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.falar = function(){
        console.log('Olá, sou' + this.nome)
    }
}

const pessoal = new pessoa ('Homer', 39, 'Av. Sempre-verde 727');
const pessoa2 = new pessoa ('Marge', 29, 'Av. Sempre-verde 727');

pessoa1.falar();
pessoa2.falar();