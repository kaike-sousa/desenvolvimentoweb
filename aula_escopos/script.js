var nome = 'Lucas'

function obterNome () {
    var nome = 'Jonas'
    console.log(this.nome)
}

obterNome()
console.log(this.nome)