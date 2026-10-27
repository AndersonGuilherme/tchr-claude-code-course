# Aula 38 — Como refatorar código antigo sem quebrar o sistema

**Módulo 6 · 8 min · Entrega:** reorganizar a filtragem mantendo os casos já conhecidos.

## Antes de gravar

Lista funcional, commits e testes anteriores. A aula 32 pode já ter simplificado filtros: inspecione antes para não inventar duplicação. Se não houver mudança útil, use uma cópia didática explicitamente identificada com lógica misturada; não piore o projeto principal para depois fingir melhoria.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Refatorar significa melhorar a estrutura sem mudar o comportamento esperado. Vamos separar uma regra da interface em passos pequenos. Primeiro precisamos saber o que o código faz hoje e quais casos não podem mudar.”

### 0:30–1:45 · Entenda · B

**Fala:** “Código antigo pode ter regras importantes escondidas em detalhes. Reescrever tudo de uma vez pode eliminar essas regras sem perceber. Testes de caracterização registram comportamentos existentes relevantes. Se encontrarmos um bug, anotamos separadamente: corrigir comportamento e reorganizar estrutura são mudanças que precisam de objetivos claros.”

“Nossa regra é selecionar tarefas por status sem alterar o array original. Isso pode virar uma função pura, fácil de testar sem navegador.”

### 1:45–4:45 · Veja · B

```text
Analise a filtragem atual sem editar e proponha uma extração pequena.
Queremos uma função selectTasks(tasks, filter) sem acesso ao DOM.
Preserve Todas, Pendentes e Concluídas, IDs e a contagem global.
Primeiro registre testes: lista vazia, mistura de estados, títulos repetidos
e entrada não mutada. Defina explicitamente a política para filtro desconhecido.
Não mude aparência, limites de título ou dependências.
```

**Fala:** “Vou revisar a política para um filtro desconhecido: neste laboratório, podemos tratar como Todas, mas ela precisa ser decidida e testada, não surgir por acaso. Depois de validar o teste inicial, autorizo a extração.”

[Execute a linha de base. Extraia somente a função aprovada e faça a interface chamá-la.]

```bash
npm test
npx playwright test --project=chromium
git diff
```

“O teste deve importar a função usada pela aplicação. Não criamos uma segunda versão dentro do arquivo de testes só para passar. No diff, espero ver o trecho sair de um lugar e a chamada nova aparecer. Se apareceu uma troca completa de framework, o escopo foi perdido.”

### 4:45–6:40 · Confira · C/B

[Percorra filtros, duas tarefas de mesmo título, conclusão e contador global.]

**Fala:** “A lista filtrada pode mudar, mas os dados originais não devem ser apagados. Vou conferir também que concluir uma tarefa segue atingindo o ID correto. Se um teste falhar, investigo a diferença em vez de atualizar a expectativa automaticamente.”

“Para desenvolvedores: testes de caracterização não tornam um comportamento inseguro aceitável. Se descobrirmos uma falha de segurança, tratamos como correção explícita. E uma extração só vale se a nova fronteira tiver uma responsabilidade compreensível.”

### 6:40–8:00 · Pratique e transição · A

**Fala:** “Escolha um trecho que mistura regra e apresentação. Escreva o que entra, o que sai e o que deve permanecer. Pode ser a contagem de pendentes. Proteja os casos, extraia e repita o fluxo do navegador. Sua solução está correta se a estrutura melhora sem alterar os resultados combinados. Na próxima aula vamos controlar uso e custo sem trocar verificação por pressa.”

## Recuperação e limite

Se a extração exigir mudança de módulos, preserve compatibilidade com a página e adapte imports conscientemente. Não executar restauração global sobre trabalho do aluno. Nenhuma refatoração é obrigatória só porque o arquivo tem muitas linhas. [Fontes](../materiais/REFERENCIAS.md).
