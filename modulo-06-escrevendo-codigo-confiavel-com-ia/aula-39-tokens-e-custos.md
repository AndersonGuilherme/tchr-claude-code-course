# Aula 39 — Como economizar tokens e reduzir custos

**Módulo 6 · 6 min · Entrega:** um fluxo com escopo e orçamento acompanháveis, sem promessa de economia fixa.

## Antes de gravar

Conta de demonstração, sem dados de cobrança identificáveis na tela. Confira comandos de uso e custo da versão: o changelog registra unificações e alterações. Não grave valores pessoais. Prepare um pedido amplo e sua versão delimitada.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Economizar não significa mandar uma frase tão curta que a IA precise adivinhar. O objetivo é reduzir contexto irrelevante, tentativas repetidas e trabalho fora da meta, mantendo a conferência do resultado.”

### 0:30–1:40 · Entenda · B

**Fala:** “Tokens representam unidades de conteúdo processado. O consumo depende de entrada, saída, ferramentas, contexto, modelo e condições do provedor. Assinaturas têm limites próprios; API tem cobrança conforme suas regras. Uma estimativa local não é necessariamente a fatura final.”

“Cache de contexto e outras otimizações podem ajudar conforme o produto, mas não vou prometer uma porcentagem universal. Primeiro vamos controlar aquilo que conseguimos observar: tamanho da tarefa, leituras necessárias e quantidade de tentativas.”

### 1:40–4:00 · Veja · B

[Mostre o pedido amplo sem executá-lo.]

```text
Leia tudo e melhore o projeto inteiro.
```

**Fala:** “Esse pedido abre espaço para uma investigação e uma edição enormes. Agora uma versão com resultado e limite.”

```text
Investigue somente por que a contagem de pendentes muda ao trocar filtro.
Comece por app.js e pelos testes relacionados. Não leia relatórios gerados
nem dependências. Reproduza o caso, proponha uma correção mínima
e rode os testes afetados. Se não houver o defeito, relate a evidência.
Pare após concluir ou após duas tentativas sem diagnóstico suficiente.
```

“Se o defeito não existir na sua versão, a resposta correta é dizer isso. Não precisamos criar um bug para justificar a investigação. Posso fornecer um trecho específico e pedir que a IA só amplie a leitura se encontrar dependências relevantes.”

[Abra `/usage` ou o mecanismo de consumo listado na versão. Se `/cost` existir, explique sua finalidade real. Oculte dados pessoais.]

“Aqui acompanho o uso disponível para esta conta. Anoto antes e depois de uma tarefa real, sem chamar uma única amostra de comparação científica. Um modelo diferente pode custar menos por token e exigir mais tentativas; avalio o custo da entrega, não só da primeira resposta.”

### 4:00–5:10 · Confira · B

**Fala:** “Minhas ações práticas: manter instruções curtas e corretas, não carregar artefatos gerados, separar tarefas independentes, escolher modelo adequado, compactar com decisões preservadas e evitar agentes ou loops sem necessidade. Nunca economizo apagando testes importantes.”

“Para desenvolvedores: configure os limites e alertas do provedor e monitore o uso agregado. Um limite de tentativa no prompt é orientação de trabalho; controle financeiro precisa do mecanismo de cobrança disponível.”

### 5:10–6:00 · Pratique e transição · A

**Fala:** “Reescreva um pedido amplo com arquivos iniciais, critério, limite de tentativa e parada. Identifique onde você acompanha uso e orçamento. A solução correta reduz trabalho desnecessário sem omitir validação. Fechamos qualidade. Agora vamos reconstruir o Tchr Tarefas com uma arquitetura de aplicação web e persistência real.”

## Solução e cuidado

Não confundir token com palavra, uso com valor faturado ou `/compact` com economia sem perdas. Se a conta não mostrar custo monetário, declare a limitação. [Fontes](../materiais/REFERENCIAS.md).
