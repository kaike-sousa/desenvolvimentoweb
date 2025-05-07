// let entrada = prompt('Inserir um dado: ')
// //repetimos com while até que o usuário digite 'sair'

// while (entrada != 'sair'){
//     alert('O usuário inseriu' + entrada)
//     //solicitamos novamente um dado
//     //Na proxima interação, será verificado se não é 'sair'
//     entrada = prompt ('Inserir outro dado')
// }



//Utilizando o while crie uma funçao que recebe um numero e calcula o seu fatorial, o fatorial de um numero é o produto dele pelos seus antecessores maiores que 0 
function fatorial(n) {
    let resultado = 1;
    while (n > 1) {
      resultado *= n--;
    }
    return resultado;
}

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
alert("O fatorial de " + numero + " é " + fatorial(numero));
  