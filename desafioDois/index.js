/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

function rankingLevel(victories, defeats) {
  let result = victories - defeats
  
  if (result < 10) {
    return("Ferro")
  } else if (result <= 20) {
    return("Bronze")
  } else if (result <= 50) {
    return("Prata")
  } else if (result <= 80) {
    return("Ouro")
  } else if (result <= 90) {
    return("Diamante")
  } else if (result <= 100) {
    return("Lendário")
  } else {
    return("Imortal")
  }
}

let victories = 170
let defeats = 70
let rankingResults = victories - defeats;
let rankingLevels = rankingLevel(victories, defeats);

console.log(`O Herói tem de saldo de ${rankingResults} vitrórias e está no nível ${rankingLevels}`);