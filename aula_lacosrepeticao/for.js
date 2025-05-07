// //solicitamos um valor ao usuario
// let numero = parseInt(prompt('Inserir Número'))

// //A cada repetição, calculamos o número inserido vezes o numero da repetição (i)
// for (let i = 1; i <= 10; i ++){
//     let resultado = numero * i;
//     console.log(numero + 'X' + i + '= ' + resultado)
// }


//UTILIZANDO FOR CRIE UMA FUNÇÃO QUE RECEBA UM NUMERO DE 1 a 10 E EXIBA TODOS OS NUMEROS QUE SAO MENORES QUE ELE
let numero = parseInt(prompt("Digite um número de 1 a 10:"));

if (numero >= 1 && numero <= 10) {
    let resultado = "";
    for (let i = 1; i < numero; i++) {
    resultado += i + "\n";
}

alert("Números menores que " + numero + ":\n" + resultado);
} else {
    alert("Número inválido. Digite de 1 a 10.");
}
