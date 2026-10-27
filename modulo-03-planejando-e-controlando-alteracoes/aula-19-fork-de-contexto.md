# Aula 19 — Fork de contexto: explore ideias sem perder seu trabalho

**Módulo 3 · 5 min · Entrega:** comparar duas propostas em conversas separadas sem editar a mesma pasta em paralelo.

## Antes de gravar

Projeto salvo no Git. Sessão recente sobre a lista e histórico local disponível. Confira `claude --help` para `--resume` e `--fork-session`. Anote o identificador pelo mecanismo da interface, sem publicá-lo desnecessariamente. Não abra duas sessões escritoras.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Quero comparar filtros em abas com um seletor de status. Posso explorar as duas ideias sem obrigar uma única conversa a carregar decisões contraditórias. Isso é um fork de contexto: uma ramificação da conversa, não uma cópia automática dos arquivos.”

### 0:30–1:30 · Entenda · B

**Fala:** “A conversa alternativa começa a partir de um histórico, conforme a função disponível na versão. Depois, as conversas podem seguir rumos diferentes. Se ambas trabalharem no mesmo diretório, continuam enxergando os mesmos arquivos. Banco, portas e serviços também não se separam por causa do fork.”

“Hoje vamos apenas comparar propostas. Na próxima aula aprenderemos uma opção de isolamento de diretórios com Git worktrees.”

### 1:30–3:20 · Veja · B

[Após confirmar a sintaxe na ajuda, use o ID real somente no terminal local. O texto `ID_DA_SESSAO` é um marcador a substituir, não um identificador válido.]

```bash
claude --resume ID_DA_SESSAO --fork-session
```

```text
Explore uma proposta de filtros por abas: Todas, Pendentes, Concluídas.
Não implemente nem altere arquivos. Compare clareza para iniciantes,
acesso por teclado e esforço. Liste critérios para decidir.
```

**Fala:** “Na conversa original, faço a mesma pergunta para um seletor de status. Peço análise, sem edição. Comparo as propostas usando os mesmos critérios em vez de escolher pela resposta mais entusiasmada.”

```text
Explore um seletor de status para os mesmos filtros.
Não altere arquivos. Use os critérios: clareza, teclado e esforço.
```

“Se sua versão não oferecer esse fork, abra uma sessão nova e forneça um resumo revisado do estado e do objetivo. Isso é uma alternativa de trabalho, não a mesma função fingindo existir.”

### 3:20–4:15 · Confira · B

```bash
git status --short
```

**Fala:** “Os arquivos continuam sem mudanças. Tenho duas propostas e uma justificativa de escolha. Registre a decisão aprovada em `NOTAS.md`, não duas regras conflitantes em `CLAUDE.md`. Para desenvolvedores: ramificar contexto ajuda a comparar hipóteses, mas não controla concorrência de escrita.”

### 4:15–5:00 · Pratique e transição · A

**Fala:** “Compare duas opções para apresentar o estado vazio: uma frase ou um exemplo com botão de ação. Use clareza, acessibilidade e esforço. Escolha uma e diga por quê. O exercício está correto se a escolha tem critérios e os arquivos não foram editados durante a comparação. Na próxima aula vamos separar diretórios para tarefas diferentes.”

## Solução e cuidado

O título da aula não promete proteção automática de arquivos. Se houver edições prévias, `git status` deve preservá-las; compare com o estado inicial em vez de exigir sempre saída vazia. [Fontes](../materiais/REFERENCIAS.md).
