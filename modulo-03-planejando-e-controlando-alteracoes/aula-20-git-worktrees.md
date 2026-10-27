# Aula 20 — Git Worktrees: trabalhe em várias tarefas sem conflitos

**Módulo 3 · 7 min · Entrega:** dois diretórios associados a branches distintos, sem prometer ausência de conflitos na integração.

## Antes de gravar

Laboratório com ao menos um commit, Git instalado e estado inicial conferido. Os nomes `feature/filtros` e a pasta vizinha `tchr-tarefas-filtros` ainda não devem existir. Esta demonstração é um exercício solicitado sobre worktrees, não uma exigência para acompanhar o resto do curso.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Duas tarefas na mesma pasta podem disputar os mesmos arquivos. Um worktree dá a cada branch um diretório de trabalho. Isso reduz a interferência durante a edição, mas alterações incompatíveis ainda podem gerar conflitos quando forem integradas.”

### 0:30–1:40 · Entenda · B

**Fala:** “Um branch é uma linha de desenvolvimento no Git. Um worktree é outro diretório ligado ao mesmo repositório, com seu branch selecionado. Não é um fork de conversa nem um novo banco. O histórico é compartilhado; arquivos de trabalho e processos precisam de cuidado próprio.”

“A mesma branch normalmente não pode ficar ativa em dois worktrees ao mesmo tempo. E dependências não devem ser presumidas presentes no novo diretório.”

### 1:40–4:35 · Veja · B

```bash
git status --short
git worktree list
git worktree add ../tchr-tarefas-filtros -b feature/filtros
git worktree list
```

**Fala:** “Criei um diretório vizinho e um branch novo a partir do commit atual. Agora abro essa pasta em outra janela do editor. Confirmo o caminho antes de iniciar outra sessão.”

```bash
cd ../tchr-tarefas-filtros
git branch --show-current
claude
```

```text
Nesta branch, altere somente o texto do estado vazio
para "Adicione sua primeira tarefa". Não implemente filtros ainda.
```

[Na pasta original, mostre que o texto não mudou. Depois inspecione e registre a alteração na pasta nova.]

```bash
git diff
git add index.html app.js
git diff --cached
git commit -m "docs(ui): esclarece estado vazio"
```

**Fala:** “Adicione apenas os arquivos que realmente mudaram; se um deles não mudou, não há problema, mas o diff preparado deve conter só o experimento. O título da branch é didático; esta pequena mudança serve para provar o isolamento antes de uma tarefa maior.”

### 4:35–5:55 · Confira · B

**Fala:** “A pasta original continua com seu estado anterior, e o outro worktree tem o commit do experimento. Quando for integrar, revise e faça merge pelo fluxo da equipe. Não vamos integrar uma alteração só para demonstrar um comando.”

“Para desenvolvedores: worktrees não isolam portas, variáveis globais, banco ou filas. Em um projeto com servidor, use portas e dados de desenvolvimento separados. E não apague a pasta à força para encerrar o experimento.”

### 5:55–7:00 · Pratique e transição · A/B

**Fala:** “Seu exercício é listar os worktrees e mostrar o branch de cada diretório. Antes de remover o laboratório extra, confirme que não há mudanças não salvas e que o commit foi preservado.”

```bash
git worktree list
git worktree remove ../tchr-tarefas-filtros
```

“Execute a remoção a partir da pasta original, só quando tiver decidido encerrar a cópia. A branch e o commit continuam no repositório. Na próxima aula vamos revisar uma mudança antes de considerá-la concluída.”

## Recuperação

Se Git recusar criação por pasta ou branch existente, inspecione e escolha nome novo; não sobrescreva. Se recusar remoção por arquivos modificados, preserve o trabalho e investigue. Nunca usar `--force` como atalho didático. [Fontes](../materiais/REFERENCIAS.md).
