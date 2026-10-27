# Aula 11 — Working Directory: como o Claude acessa seu projeto

**Módulo 2 · 5 min · Entrega:** iniciar uma sessão na raiz correta e confirmar o escopo dos arquivos.

## Antes de gravar

Projeto `tchr-tarefas` disponível. Prepare uma pasta vizinha chamada `outro-laboratorio`, sem dados reais. Não use sua pasta pessoal inteira como exemplo de acesso. Mostre caminhos de demonstração sem nome de usuário real.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Se eu pedir para editar `index.html`, qual arquivo a IA vai encontrar? A resposta depende de onde a sessão começou e dos acessos permitidos. Vamos confirmar a pasta de trabalho antes de qualquer alteração.”

### 0:30–1:25 · Entenda · B

**Fala:** “Working directory é o diretório de trabalho: a pasta usada como referência para caminhos relativos. Raiz do projeto é a pasta principal dos nossos arquivos. Não é necessariamente a raiz do disco. Abrir o terminal em uma pasta acima pode ampliar o contexto e causar confusão entre projetos.”

“A pasta inicial também não é uma prisão absoluta. Ferramentas, diretórios adicionais e permissões podem ampliar acesso. Por isso combinamos localização correta com leitura dos pedidos de ferramenta.”

### 1:25–3:30 · Veja · B

[No terminal externo à sessão, navegue até o projeto. Use o caminho real da máquina e explique que o exemplo é relativo à pasta pai.]

```bash
cd tchr-tarefas
pwd
claude
```

**Fala:** “`cd` muda a pasta; `pwd` mostra onde estamos no Bash. No PowerShell, posso usar `Get-Location`. Agora inicio a sessão aqui dentro. Vou pedir uma inspeção curta, sem edição.”

```text
Confirme o diretório de trabalho desta sessão.
Liste somente os arquivos do primeiro nível do projeto.
Não leia pastas vizinhas nem altere arquivos.
```

[Compare a listagem com o explorador do editor.]

“Devem aparecer nossos três arquivos e quaisquer arquivos locais que você tenha criado. Se aparecer outro projeto, interrompa e abra uma nova sessão na pasta correta. Não peça à IA para procurar pelo computador inteiro até achar.”

“Observe também a diferença entre `styles.css` e um caminho absoluto completo. O relativo é interpretado a partir de uma referência. Um comando que muda de diretório dentro de uma ferramenta não garante que todas as ferramentas futuras herdarão a mudança; confirme o local de execução.”

### 3:30–4:20 · Confira · B

**Fala:** “A árvore do editor, o terminal e a listagem da sessão precisam ser coerentes. Para desenvolvedores: em monorepos, escolha uma raiz que dê contexto suficiente sem carregar todo o histórico de serviços irrelevantes. Não acrescente diretórios sensíveis só para evitar uma pergunta de permissão.”

### 4:20–5:00 · Pratique e transição · A

**Fala:** “Feche esta sessão sem alterar nada, abra um novo terminal dentro de `tchr-tarefas` e peça a mesma listagem. O exercício está correto se você consegue mostrar de onde a sessão começou e quais arquivos pertencem ao projeto. Na próxima aula vamos criar o manual que explica ao Claude como trabalhar nessa pasta.”

## Solução e recuperação

Resultado esperado: pasta `tchr-tarefas`, arquivos HTML/CSS/JS reconhecidos e nenhuma escrita. Se `cd` falhar, localize a pasta pelo editor, abra o terminal nela e repita a conferência. Não use caminhos inexistentes copiados do vídeo. [Fontes](../materiais/REFERENCIAS.md).
