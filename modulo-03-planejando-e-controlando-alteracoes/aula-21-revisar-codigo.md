# Aula 21 — Como revisar o código escrito pelo Claude

**Módulo 3 · 6 min · Entrega:** revisão de filtros de tarefas com evidência de comportamento e escopo.

## Antes de gravar

Volte à pasta principal, com lista funcional e commit salvo. Nesta aula implementaremos filtros que até agora eram apenas propostas. Prepare cinco casos: lista vazia, pendente, concluída, títulos repetidos e troca de filtro após concluir.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “A IA terminou de editar. Como saber se a mudança está boa? Vamos revisar uma funcionalidade pequena em três camadas: o que foi pedido, o que mudou e o que realmente acontece ao usar.”

### 0:30–1:25 · Entenda · B

**Fala:** “Diff é a comparação de linhas antes e depois. Mesmo sem entender toda a linguagem, você consegue conferir nomes de arquivos, textos e mudanças fora do pedido. Depois, testa o comportamento. Conforme aprende código, aprofunda a revisão das regras e dos riscos.”

### 1:25–3:50 · Veja · B

```text
Adicione filtros Todas, Pendentes e Concluídas à lista atual.
Preserve as tarefas em memória e a validação existente.
Ao concluir uma tarefa no filtro Pendentes, ela deve sair dessa visão,
mas continuar em Todas e Concluídas. Use controles acessíveis por teclado.
Não instale pacotes. Explique os arquivos alterados e como verificar.
```

[Após a edição, não aceite o resumo como única prova.]

```bash
git status --short
git diff --stat
git diff
```

**Fala:** “Primeiro, o conjunto de arquivos faz sentido? Um filtro visual não deveria criar credenciais, trocar dependências ou modificar configurações de publicação. Depois procuro a lógica: filtrar não deve apagar o array original. A tarefa concluída precisa mudar de estado, não desaparecer dos dados.”

```text
Revise o diff sem editar. Para cada problema encontrado,
informe arquivo, comportamento afetado, reprodução e gravidade.
Separe defeitos comprováveis de preferências de estilo.
```

“Essa segunda leitura pode ajudar, mas ainda pode errar. Não vou aplicar uma sugestão sem conferir se o problema existe.”

### 3:50–5:00 · Confira · C

[Adicione duas tarefas, conclua uma e passe pelos três filtros. Teste teclado e console.]

**Fala:** “Todas mostra duas; Pendentes mostra uma; Concluídas mostra uma. Se concluir a pendente nesse filtro, ela sai da visão e continua em Todas. Também preciso de uma mensagem quando o filtro não tem resultados. Um filtro vazio não significa que todas as tarefas foram apagadas.”

“Para desenvolvedores: revise regressão, acessibilidade e tratamento de dados além da aparência. Testes automatizados vão entrar em breve; hoje a conferência manual tem critérios registrados, e não uma promessa de cobertura completa.”

### 5:00–6:00 · Pratique e transição · A

**Fala:** “Registre um achado real ou escreva ‘nenhum defeito identificado nos casos executados’, listando os casos. Não invente bug para parecer uma revisão profunda. Depois confira o diff final e salve a versão se ela passou. Na próxima etapa vamos conectar ferramentas externas e criar automações mantendo a mesma disciplina de revisão.”

## Solução e recuperação

Critérios: contagens corretas, sem perda de tarefa, teclado e estado vazio por filtro. Se houver falha, reproduza, peça correção limitada e repita o caso mais a regressão de adição. [Referências](../materiais/REFERENCIAS.md).
