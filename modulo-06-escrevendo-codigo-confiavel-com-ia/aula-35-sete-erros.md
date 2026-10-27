# Aula 35 — 7 erros que você deve evitar ao programar com IA

**Módulo 6 · 6 min · Entrega:** diagnosticar riscos em um pedido e reescrevê-lo de forma verificável.

## Antes de gravar

Projeto salvo. Prepare sete cartões, um por erro abaixo. Demonstração apenas sobre a lista local. Nenhum comando destrutivo, segredo real ou deploy será executado para ilustrar um erro.

## Roteiro de gravação

### 0:00–0:25 · Gancho · A

**Fala:** “A maior armadilha não é a IA escrever uma linha errada. É aceitarmos um resultado sem entender o pedido, a mudança e a prova. Vamos revisar sete erros usando situações que já apareceram no nosso projeto.”

### 0:25–2:45 · Entenda · B

[Mostre um cartão por vez; faça pequena pausa entre eles.]

**Fala:** “Primeiro: pedir uma coisa vaga. ‘Deixe profissional’ não define comportamento. Diga qual problema quer resolver e como conferir.”

“Segundo: mudar muita coisa de uma vez. Se alteramos filtro, validação e banco no mesmo pedido, fica difícil descobrir qual mudança causou uma falha. Entregue partes verificáveis.”

“Terceiro: aceitar sem revisar. O resumo da IA não substitui o diff. Confira arquivos, dependências e mudanças fora do escopo.”

“Quarto: tratar explicação como teste. Dizer que ‘funciona’ não é executar a jornada. Peça comando, resultado e evidência, e confira.”

“Quinto: colar segredos ou dados reais. Use exemplos fictícios e configuração segura. Apagar uma chave depois não desfaz uma exposição; ela pode precisar ser revogada.”

“Sexto: instalar ou autorizar sem entender. Leia a origem do pacote e o alcance da permissão. A conveniência não elimina o efeito da ação.”

“Sétimo: não guardar um estado recuperável. Git e registros de decisão ajudam a comparar e voltar. Conversa não é backup do projeto nem do banco.”

### 2:45–4:25 · Veja · B

[Mostre o pedido problemático como texto, sem enviá-lo.]

```text
Melhore tudo, instale o que quiser e publique quando terminar.
```

**Fala:** “Esse pedido mistura escopo aberto, dependências e uma ação externa. Vamos reescrever para uma mudança local que podemos conferir.”

```text
Corrija apenas a mensagem do filtro Pendentes quando não há resultados.
Mostre "Nenhuma tarefa pendente" sem apagar dados nem alterar os outros filtros.
Não instale pacotes nem publique. Primeiro explique os arquivos envolvidos.
Depois implemente e confira Pendentes vazio, Todas e Concluídas.
Relate o que foi executado e qualquer limitação.
```

[Envie o pedido reescrito, acompanhe o diff e os três cenários no navegador.]

### 4:25–5:20 · Confira · C/B

**Fala:** “A mensagem mudou só onde deveria? Os dados continuam em Todas? O filtro Concluídas mantém seu comportamento? Se não verificarmos essas perguntas, podemos trocar um erro por outro.”

“Para desenvolvedores: velocidade deve incluir tempo de revisão e correção. Uma entrega rápida que introduz regressão pode custar mais do que uma alteração pequena com evidência. Use a IA para reduzir trabalho repetitivo preservando o julgamento técnico.”

### 5:20–6:00 · Pratique e transição · A

**Fala:** “Escolha dois desses erros que você já cometeu e escreva uma regra prática para evitá-los no próximo pedido. Uma solução possível: sempre registrar o estado inicial e exigir evidência do comportamento alterado. Na próxima aula vamos transformar regras de negócio em testes automatizados.”

## Solução e cuidado

O exercício pede medidas observáveis, não ‘ter mais cuidado’. Não execute o prompt perigoso para criar um antes/depois teatral. A demonstração real é a correção limitada. [Referências](../materiais/REFERENCIAS.md).
