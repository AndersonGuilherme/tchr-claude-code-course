# Aula 18 — Rewind e Git: como desfazer alterações com segurança

**Módulo 3 · 6 min · Entrega:** um commit da versão funcional e uma mudança experimental recuperada sem perder trabalho alheio.

## Antes de gravar

Git instalado. Use cópia exclusiva do laboratório e confira arquivos antes de adicionar. Nenhum segredo. Configure nome/e-mail de autoria adequados; se usar GitHub público, considere e-mail de privacidade. Confira se `/rewind` existe e o que a versão recupera.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Recuperar uma mudança não precisa significar apagar tudo. Vamos separar checkpoints da sessão e histórico do Git. O objetivo é voltar com consciência do que será perdido e do que será preservado.”

### 0:30–1:35 · Entenda · B

**Fala:** “Git registra versões dos arquivos que escolhemos acompanhar. Um commit é um ponto desse histórico. Rewind trabalha com checkpoints da sessão conforme os recursos do Claude Code. Ele não é backup universal: comandos de terminal, arquivos fora do acompanhamento e efeitos externos podem não ser recuperados. Banco, mensagens enviadas e deploy não voltam só porque a conversa voltou.”

### 1:35–3:30 · Veja · B

[Na cópia de laboratório, inicialize somente se ainda não houver repositório.]

```bash
git init
git status --short
git add index.html styles.css app.js CLAUDE.md
git diff --cached
git commit -m "feat: cria lista de tarefas em memoria"
```

**Fala:** “Eu adiciono arquivos conhecidos e leio o diff preparado antes de registrar. Não uso `git add .` sem inspecionar o conteúdo. Agora peço uma mudança visual pequena, apenas no título, para termos um experimento fácil de reconhecer.”

```text
Troque somente o título visível da página para "Experimento de título".
Não altere outros comportamentos.
```

[Abra `/rewind`, se disponível. Leia quais opções recuperam conversa, código ou ambos. Mostre a escolha sem prometer recuperação de efeitos externos.]

### 3:30–4:55 · Confira · B/C

**Fala:** “O título original voltou? O diff confirma? Se a versão não oferecer recuperação adequada, podemos usar Git para uma alteração local conhecida. Antes, lemos a diferença. O comando seguinte descarta mudanças não commitadas somente do arquivo indicado; por isso ele só deve ser usado neste experimento depois da conferência.”

```bash
git diff -- index.html
git restore --source=HEAD -- index.html
git status --short
```

“Se houver outras edições importantes no mesmo arquivo, não use essa recuperação integral: preserve uma cópia e recupere trechos com orientação. Para desfazer um commit já compartilhado, `git revert` cria um novo registro inverso; isso é diferente de descartar uma edição local.”

### 4:55–6:00 · Pratique e transição · A

**Fala:** “Seu exercício é registrar a versão funcional, mudar uma frase e recuperar apenas essa mudança após ler o diff. Confirme o título no navegador e o estado do Git. A resposta correta inclui explicar o que a ferramenta recuperou e o que ficou fora. Na próxima aula vamos explorar conversas alternativas sem confundir isso com isolamento de arquivos.”

## Cuidados e solução

Não executar `reset --hard`, `clean -fd` ou restauração global. Se o commit pedir identidade, configure-a conscientemente e repita; não invente sucesso. Resultado: commit real, arquivo esperado e ausência de perda de outras mudanças. [Referências](../materiais/REFERENCIAS.md).
