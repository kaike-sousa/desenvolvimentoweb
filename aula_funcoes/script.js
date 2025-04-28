//Exemplo
// var resultado = 0;

// //Função que soma dois número e atribui o resultado
// function somar(primeiroNumero + segundoNumero){
//     resultado = primeiroNumero + segundoNumero
// } 

//     //função que mostra o resultado no console
// function mostra(mensagem){
//     console.log(mensagem)
// } 

//chamamos primeiro para somar e depois para mostrar
// somar(6,3);
// mostrar(resultado)



//EXEMPLO CALCULADORA

// function calculadora(primeiroNumero, segundoNumero, operacao){
//     if(operacao == '+'){
//         return primeiroNumero + segundoNumero;
//     }
//     else if (operacao == '-'){
//         return primeiroNumero - segundoNumero;
//     }
//     else if (operacao == '*'){
//         return primeiroNumero * segundoNumero;
//     }
//     else if (operacao == '/'){
//         return primeiroNumero / segundoNumero;
//     }
//     else{
//         return 0;
//     }
// }
// console.log(calculadora(10,5, '*'));




//EXERCICIO (CRIAR UMA FUNÇÃO QUE FAZ SUBTRAÇÕES)
var numero1 = Number(prompt('Digite o primeiro número: '))
var numero2 = Number(prompt('Digite o segundo número: '))

function subtracacao (num1, num2){
    if (num1 > num2 ){
        return num1 - num2;
    }
    else{
        return num2 - num1;
    }
}

console.log (subtracacao(numero1, numero2))
alert(subtracacao(numero1, numero2))





//EXEMPLO CALCULADORA DE PREÇO
// const somar = (a, b) => a + b
// const subtrair = (a, b) => a - b
// const calcularICMS = x => x * 0.21

// let precoProduto = 500
// let desconto = 50

// //CALCULO  O PRECOPRODUTO + ICMS - DESCONTO
// const icms = calcularICMS (precoProduto)
// const soma = somar (precoProduto, icms)
// const novoPreco = subtrair (soma, desconto)
// console.log(novoPreco)

