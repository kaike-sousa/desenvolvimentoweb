const pessoa = {
    nome: 'Kaike',
    idade: 39,
    rua: 'Antonio bomporti 35'
};

//Percorremos todas as propriedades do objeto com o ciclo for .. in
for (const propriedade in pessoa){
    console.log(pessoa[propriedade]);
}