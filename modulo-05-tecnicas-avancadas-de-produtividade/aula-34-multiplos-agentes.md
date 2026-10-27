# Aula 34 — Múltiplos agentes: como desenvolver tarefas em paralelo

**Módulo 5 · 8 min · Entrega:** duas análises independentes com contratos de saída, integração e revisão humana.

## Antes de gravar

Projeto salvo. Subagents funcionais conforme aula 26. Use análises sem escrita para a primeira demonstração; isso evita disputa de arquivos. Paralelismo real precisa de suporte do ambiente. Não confunda duas janelas abertas com execução paralela comprovada.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Mais agentes podem ajudar quando há tarefas independentes. Também podem multiplicar custo, repetição e conflitos. Vamos dividir uma revisão em duas perguntas distintas e reunir os resultados sem aceitar conclusões automaticamente.”

### 0:35–1:50 · Entenda · B

**Fala:** “Boa paralelização começa pela decomposição. Se uma tarefa depende do resultado da outra, executá-las ao mesmo tempo pode produzir trabalho perdido. Se dois agentes editam o mesmo arquivo, precisamos de isolamento e integração. Hoje vamos fazer análises somente leitura.”

[Mostre dois cartões: A validação e identidade; B acessibilidade estática. O professor é o integrador.]

“Agentes não compartilham necessariamente toda a conversa, e cada relatório precisa dizer quais arquivos leu e o que não executou.”

### 1:50–4:45 · Veja · B

[Crie um segundo agente de leitura, usando o formato da aula 26, com foco em acessibilidade e ferramentas Read/Glob/Grep. Preserve o agente de validação.]

```text
Delegue duas análises independentes e sem edição, em paralelo se suportado:
A — revisor-tarefas: validação de título e identidade de tarefas repetidas.
B — revisor-acessibilidade: rótulos, foco e mensagens na interface.
Para ambos: cite arquivos, evidência, impacto e verificações não executadas.
Não use rede, não instale nada e não aplique correções.
Depois reúna achados sem duplicar e destaque possíveis discordâncias.
```

**Fala:** “Agora observo o registro de execução. Se o ambiente fizer uma análise depois da outra, apresento como delegação sequencial, sem chamar de ganho de paralelismo. O método de divisão continua útil, mas a execução precisa ser descrita com precisão.”

[Mostre resultados e selecione um achado de cada área para conferir no código.]

“Vou classificar os relatos: defeito reproduzível, risco a investigar ou preferência. Se os agentes discordarem, a decisão vem da regra do projeto e da evidência. Não é uma votação de modelos.”

### 4:45–6:45 · Confira e integre · B/C

**Fala:** “Uma análise estática de foco não comprova que a navegação por teclado foi testada. Eu abro a página e confiro. A validação de títulos repetidos também merece um cenário real: duas tarefas com o mesmo nome, só uma concluída.”

[Reproduza os dois cenários e registre um relatório integrado com responsáveis e próximos passos.]

“Para desenvolver em paralelo com escrita, prefira tarefas que tocam áreas diferentes, use branches/diretórios adequados e deixe claro quem integra. Worktrees não separam bancos e portas. A verificação final precisa acontecer sobre o conjunto integrado, não apenas nas partes.”

### 6:45–8:00 · Pratique e transição · A

**Fala:** “Divida uma revisão em duas tarefas independentes e escreva entrada, saída e limite de cada uma. Identifique uma terceira tarefa que deve esperar os resultados, como implementar a correção consolidada. A solução correta mostra dependências e não cria agentes só para aumentar a contagem. Fechamos produtividade com objetivo, repetição, pesquisa, fluxo e evidência. No próximo módulo, vamos aprofundar confiabilidade.”

## Solução e limite

Não é necessário usar recursos experimentais de equipes para esta aula; subagents já permitem ensinar a divisão. Não prometa velocidade linear. Se não houver suporte a paralelismo, declare e ensaie o recurso compatível antes de gravar o título definitivo. [Fontes](../materiais/REFERENCIAS.md).
