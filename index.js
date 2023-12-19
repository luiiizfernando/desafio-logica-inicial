let nome = "Luiz Fernando"
let xp = 10001 //quantidade de experiência
let nivel

// No enunciado dizia ser menor do que 1000 e assim por diante. Contudo se se deixar xp = 1000
// não entra em nenhuma condicional o que é um erro. Sendo assim mudei para <= 1000 para corrigir
// assim como alterei algumas faixas de valores para ficar tudo certo.

if(xp <= 1000)
{
    nivel = "Ferro"
}
else if(xp >= 1001 && xp <= 2000)
{
    nivel = "Bronze"
}
else if(xp >= 2001 && xp <= 5000)
{
    nivel = "Prata"
}
else if(xp >= 5001 && xp <= 6000)
{
    nivel = "Ouro"
}
else if(xp >= 6001 && xp <= 8000)
{
    nivel = "Platina"
}
else if(xp >= 8001 && xp <= 9000)
{
    nivel = "Ascendente"
}
else if(xp >= 9001 && xp <= 10000)
{
    nivel = "Imortal"
}
else if(xp >= 10001)
{
    nivel = "Radiante"
}

console.log("O herói de nome " + nome + " está no nível de " + nivel)