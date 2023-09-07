/*
let i = 0;
while ( i < 10) {
    console.log(i);
    i++;
}
*/

/*
const palavras = [ 'oi', 'sumido', 'tudo', 'bem?', 'Saudades']
let mensagem = '';

for (let palavra of palavras) {
    mensagem += `${palavra} `;
}
console.log(mensagem);

*/
/*
//Exercicio 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)//10 porque soma os totais
*/

//Exercicio 2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//a)vai printar só os numeros acima de 18
//b)não tem como
*/


//exercicio 3
/*

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = "" 
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){//aqui é adcionado +1 para printar um asteriscos
    linha += "*"
  }
  console.log(linha)//printa linha
  quantidadeAtual++ //adciona mais um a variavel
}
*/
//exercicios de escritas
//exercicio 1 

/*
const bichinhos = prompt("Quantos bichcinhos de estimação você tem?")
let nomes = [];
if (bichinhos <= 0){
  console.log("Que pena você pode adotar um pet!")
} else if {
  for (let i = 0; i < bichinhos; i++){
    nomes[i] = prompt("Digite o nome de um: ")
  }
}
for (let i = 0; i < bichinhos; i++) {
  console.log(`O nome dele é: ${nomes[i]}`  )
}
*/



const arrayOriginal = [ 5, 10, 15 ,45, 18, 1, 12, 68]
let divPorDez = []
let numerosPar = []
let frase = []
let menorNumero = arrayOriginal[0];
let maiorNumero = 0;
//imprimir array
for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(`${arrayOriginal[i]}`)
}

for (let i = 0; i < arrayOriginal.length; i++) {
  divPorDez[i] = arrayOriginal[i] / 10
  console.log(`${divPorDez[i]}`)
}

for (let i = 0; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] % 2 == 0) {
    numerosPar[i] = arrayOriginal[i]
    console.log(`Esse numero é par: ${numerosPar[i]}`)
  }
}

for (let i = 0; i < arrayOriginal.length; i++) {
  frase[i] = `O elemento do index ${i} é ${arrayOriginal[i]}`;
  console.log(frase[i])
}

for (let i = 0; i < arrayOriginal.length; i++) {
 if (maiorNumero < arrayOriginal[i]) {
    maiorNumero = arrayOriginal[i];
  } else   if (menorNumero > arrayOriginal[i]){
    menorNumero = arrayOriginal[i];
  } 
}

console.log(`O maior numero do array é ${maiorNumero}`)
console.log(`O menor numero do array é ${menorNumero}`)


//Desafios
/*

console.log('#########################################')
console.log('###########Jogo da Adivinhação###########')
console.log('#########################################')

let loop =  false
numeroSecreto = Number(prompt("Digite o numero secreto: "))
let tentativas = 0;
console.log("Que comece os jogos: :|")
while (loop == false) {
  numero = Number(prompt("Digite um número: "))
  if (numero > numeroSecreto) {
    console.log("Errrrrrrrou, é menor")
  } else if (numero < numeroSecreto) {
    console.log("Errrrrrrrou, é maior")
  } else if (numero == numeroSecreto){
    alert ("Acertouu!!!")
    loop = true
  }
  tentativas++;
}
  console.log(`O número de tentativas foi ${tentativas}`)

*/