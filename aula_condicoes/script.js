//EXEMPLO 1 IF e ELSE
// var nomeUsuario = prompt ('Inserir nome de usuário: ');

// if (nomeUsuario == '') {
//     alert('O nome do usuário não foi inserido');
// }
// else {
//     alert ('Nome de usuário inserido: ' + nomeUsuario);
// } 


// EXEMPLO 2 ELSE IF
// var combustivel = prompt ('O seu carro é movido à: ');

// if (combustivel == 'GNV') {
//     alert ('O carro é movido à Gás');
// }
// else if (combustivel == 'Gasolina'){
//     alert ('O carro é movido à Gasolina');
// }
// else if (combustivel == 'Álcool'){
//     alert ('O carro é movido à Alcool');
// }
// else {
//     alert ('O carro não funciona');
// }


//EXEMPLO 3 ELSE IF
// var numero = prompt('Digite um número de 1 à 5: ')

// if (numero == 1){
//     alert('O número inserido é um');
// }
// else if (numero == 2){
//     alert('O número inserido é dois');
// }
// else if (numero == 3){
//     alert('O número inserido é três');
// }
// else if (numero == 4){
//     alert('O número inserido é quatro');
// }
// else if (numero == 5){
//     alert('O número inserido é cinco');
// }
// else {
//     alert('O número inserido é inválido');
// }

// Exemplo 4 ELSE IF
// var numero = prompt ('Digite um número de 1 à 100')

// if (numero <= 11){
//     alert ('O número inserido encaixa entre 1 e 10')
// }
// else if (numero <= 21){
//     alert ('O número inserido encaixa entre 10 e 20')
// }
// else if (numero <= 31){
//     alert ('O número inserido encaixa entre 20 e 30')
// }
// else if (numero <= 41){
//     alert ('O número inserido encaixa entre 30 e 40')
// }
// else if (numero <= 51){
//     alert ('O número inserido encaixa entre 40 e 50')
// }
// else if (numero <= 61){
//     alert ('O número inserido encaixa entre 50 e 60')
// }
// else if (numero <= 71){
//     alert ('O número inserido encaixa entre 60 e 70')
// }
// else if (numero <= 81){
//     alert ('O número inserido encaixa entre 70 e 80')
// }
// else if (numero <= 91){
//     alert ('O número inserido encaixa entre 80 e 90')
// }
// else if (numero <= 101){
//     alert ('O número inserido encaixa entre 90 e 100')
// }
// else {
//     alert ('O número inserido é invalido')
// }


// // EXEMPLO 5  CONDICOES && (AND - AS DUAS PRECISAM SER VERDADEIRAS)
// var nome = prompt ('Insira o nome: ')
// var sobrenome = prompt ('Insira o sobrenome')

// if ((nome != '') && (sobrenome != '')) {
//     alert ('Nome: ' + nome + '\nSobrenome: ' + sobrenome)
// }
// else{
//     alert ('Erro ao inserir o nome e sobrenome')
// }


// EXEMPLO 6  CONDICOES || (OR - APENAS UMA PRECISA SER VERDADEIRA)
// var nome = prompt ('Inserir o seu nome: ')
// if ((nome = 'ANA') || (nome = 'Ana') || (nome = 'ana')){
//     alert ('O nome inserido é Ana')
// }
// else { 
//     alert ('O nome inserido não é Ana')
// }


// EXEMPLO 7 CONDICOES ! (NOT - INVERTE O SIGNIFICADO DE VERDADEIRO PARA FALSO E FALSO PARA VERDADEIRO)
var nome = prompt ('Inserir o seu nome: ')
var eVazio = nome == ''

if (!eVazio) {
    alert('Nome: ' + nome)
}
else {
    alert ('Nome está vazio')
}