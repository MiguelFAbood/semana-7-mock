let nome = prompt("Qual é o seu nome?");

let renda = Number(prompt("Informe sua renda mensal (Ex: 2500.50):"));
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido! Por favor, informe um número válido para sua renda mensal:"));
}

let qtdDespesas = Number(prompt("Quantas despesas você irá informar? (Digite um número de 1 a 5)"));
while (isNaN(qtdDespesas)) {
    qtdDespesas = Number(prompt("Valor inválido! Informe um número de 1 a 5:"));
}

if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = Number(prompt(`Informe o valor da Despesa ${i}:`));

    while (isNaN(valorDespesa)) {
        valorDespesa = Number(prompt(`Valor inválido! Informe um número para a Despesa ${i}:`));
    }
    
    totalDespesas += valorDespesa;
}

let sobra = renda - totalDespesas;
let mensagemClassificacao = "";

if (totalDespesas > renda) {
    mensagemClassificacao = "Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= (renda * 0.30)) {
        mensagemClassificacao = "Ótimo: boa margem de sobra.";
    } else {
        mensagemClassificacao = "Ok: dá para melhorar a sobra.";
    }
}

let resultadoFinal = `Resumo do Orçamento de ${nome}
--------------------------------------
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${mensagemClassificacao}`;

alert(resultadoFinal);
console.log(resultadoFinal);