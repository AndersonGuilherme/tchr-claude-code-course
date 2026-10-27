# Aula 16 — Plan Mode: faça o Claude planejar antes de programar

**Módulo 3 · 7 min · Entrega:** plano aprovado para substituir o contador por uma lista de tarefas em memória.

## Antes de gravar

Página das aulas anteriores salva em cópia. Nenhum banco ou framework. Confira o seletor de modos na versão instalada. O planejamento desta aula não implementa a lista; a implementação acontecerá na aula 17.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Pedir ‘crie um gerenciador de tarefas’ pode gerar login, banco e muitas telas que não precisamos agora. Vamos usar o planejamento para decidir primeiro qual problema resolver e quais mudanças realmente cabem nesta etapa.”

### 0:30–1:40 · Entenda · B

**Fala:** “Plan Mode organiza a sessão para investigar e propor antes de implementar. Ele não torna uma ideia correta automaticamente. Ainda precisamos fornecer requisitos, revisar a proposta e conferir as ferramentas utilizadas. Nosso próximo passo é uma lista em memória: ela existe enquanto a página está aberta e reinicia ao recarregar.”

[Selecione o modo pelo controle visível; confirme o indicador.]

### 1:40–4:20 · Veja · B

```text
Planeje substituir o contador por uma lista de tarefas em memória.
Leia index.html, styles.css, app.js e CLAUDE.md.
O usuário poderá adicionar um título não vazio, marcar como concluído
e ver estado vazio. Rejeite títulos só com espaços e limite a 120 caracteres.
Sem banco, login, dependências, remoção ou filtros nesta etapa.
Liste arquivos, etapas, riscos e critérios de aceitação.
Não implemente. Se faltar decisão essencial, pergunte antes.
```

**Fala:** “Observe que nomeei também o que fica fora. Não estou tentando desenvolver o produto inteiro de uma vez. Se a IA perguntar se as tarefas devem sobreviver ao recarregamento, respondo não nesta versão. Se sugerir um banco mesmo assim, corrijo o plano.”

[Mostre o plano real e marque cada requisito na tela.]

“Vou procurar uma sequência pequena: criar formulário e lista, modelar tarefas em um array, validar o título, renderizar o estado e conferir teclado. Array é uma coleção em memória. Cada tarefa precisa de uma identificação estável para marcar a correta, mesmo quando o texto se repete.”

### 4:20–5:50 · Confira · B

**Fala:** “Um plano utilizável permite responder: o que será alterado, o que não será, como testar e onde estão os riscos? Um plano de vinte passos vagos pode ser menos útil que quatro etapas com resultados claros. Também quero confirmar que nenhum arquivo da aplicação mudou durante o planejamento.”

[Compare os arquivos com a cópia anterior; registre o plano revisado em `PLANO.md`, manualmente ou após autorização específica de escrita do documento fora do modo de análise.]

“Para desenvolvedores: planejar não precisa virar uma cerimônia para trocar uma palavra. Use mais planejamento quando há ambiguidade, dependências ou risco. Aqui ele evita adicionar persistência e autenticação antes dos pré-requisitos.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Revise o plano e escreva três critérios: uma tarefa válida aparece; espaços são rejeitados; marcar uma tarefa não muda outra. Acrescente que os dados reiniciam ao recarregar. Seu exercício é encontrar uma decisão ausente antes de implementar. Na próxima aula vamos transformar esse plano em etapas de desenvolvimento e executar a primeira funcionalidade completa.”

## Solução de referência

Plano aprovado cobre adição, conclusão, estado vazio, identificadores, limite e verificação manual. Não inclui recursos adiados. Se o modo permitir escrita de documentos de planejamento, diferencie isso de editar a aplicação; não prometa ausência absoluta de toda escrita interna. [Fontes](../materiais/REFERENCIAS.md).
