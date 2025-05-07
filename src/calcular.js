// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {

}
function somadoisnumeros(num1, num2 = 0){
  if(num1 & num2 == NaN){
  return('Erro parâmetros invalidos')
}

let resultado = num1 + num2
if(resultado !=somadoisnumeros)
return(resultado)
}
function subtrairdoisnumeros(num1, num2 = 0){
  if(num1 && num2 == NaN){
  return('Erro parâmetros errados')
}
let resultado = num1 + num2
console.log(resultado)
return(resultado)
}
function multiplicardoisnumeros(num1, num2 = 0){
let resultado = num1 + num2
console.log(resultado)
}
function dividirdoisnumeros(num1, num2 = 0){
let resultado = num1 + num2
console.log(resultado)
}
//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };