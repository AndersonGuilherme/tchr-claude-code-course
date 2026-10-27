# Aula 41 — Criando o frontend completo com Claude Code

**Módulo 7 · 8 min · Entrega:** interface tipada de tarefas, funcionando em memória com estados explícitos.

## Antes de gravar

Next da aula 40 funcionando. Leia o plano e salve um commit. Prepare rascunho visual simples: cabeçalho, formulário, filtros, contador e lista. “Completo” refere-se à interface do escopo do curso; a persistência vem na aula 42. Não copie arquivos HTML para dentro de JSX sem adaptação.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A/C

**Fala:** “Vamos construir a tela que o aluno já conhece, agora com componentes e tipos. Primeiro faremos funcionar em memória. Assim conseguimos identificar um problema da interface antes de misturá-lo com conexão de banco.”

### 0:30–1:50 · Entenda · B

**Fala:** “Um componente é uma parte da interface com uma responsabilidade, como formulário ou lista. Estado é a informação que muda, como tarefas e filtro selecionado. TypeScript descreve o formato esperado desses dados, mas não valida sozinho o que chega pela rede; isso ficará para o servidor.”

[Mostre o tipo no editor, explicando cada campo.]

```typescript
export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};
```

### 1:50–4:50 · Veja · B

```text
Implemente a interface do PLANO.md com estado local, sem API ainda.
Use Task {id, title, completed, createdAt}. Crie componentes pequenos
para formulário, filtros e lista, sem biblioteca de UI adicional.
Formulário com label, limite 120, trim e erro compreensível.
Adição gera ID estável; checkbox altera só a tarefa selecionada.
Filtros Todas/Pendentes/Concluídas e contagem global de pendentes.
Inclua estado vazio geral e vazio do filtro, foco visível e layout a 360 px.
Não use dangerouslySetInnerHTML nem dados pessoais.
Mantenha a página de servidor e limite "use client" ao componente interativo.
Explique cada arquivo e não acrescente autenticação ou persistência.
```

**Fala:** “`use client` identifica uma fronteira de componente interativo no Next. Não é uma instrução para mover credenciais para o cliente. Vamos evitar transformar todo arquivo em cliente só porque um formulário tem eventos.”

[Mostre a árvore proposta; acompanhe formulário, estado e renderização.]

“A lista usa o ID como chave para manter a identidade dos itens. Concluir por título falharia quando duas tarefas têm o mesmo nome. O texto da tarefa deve aparecer como texto; React normalmente escapa esse conteúdo, mas não devemos usar uma abertura para HTML arbitrário.”

### 4:50–6:45 · Confira · C/B

[Teste vazio, duas tarefas iguais, conclusão de uma, filtros, contador e teclado. Reduza viewport.]

**Fala:** “Vou cadastrar duas tarefas de mesmo título. Só a escolhida deve mudar. No filtro Pendentes, a concluída sai da visão, mas continua em Todas. O contador mostra a quantidade global. Se recarregar, os dados somem porque ainda estão em memória.”

```bash
npx tsc --noEmit
npm run build
```

“Também reviso o console e o diff. Para desenvolvedores: componentes devem seguir responsabilidades, não uma quantidade arbitrária de linhas. Separar formulário e lista ajuda aqui; criar uma biblioteca genérica inteira seria excesso.”

### 6:45–8:00 · Pratique e transição · A

**Fala:** “Seu exercício é melhorar a mensagem de um filtro vazio preservando o comportamento. Confira teclado e layout estreito. A solução correta distingue ‘não há tarefas’ de ‘não há resultados neste filtro’. Na próxima aula vamos substituir o estado descartável por uma fonte persistente no servidor.”

## Solução e recuperação

Não afirmar persistência ou chamadas HTTP nesta aula. Se houver erro de hidratação por data/ID criado durante renderização, gere-os no evento de adição e confira a fronteira cliente/servidor. Erro de tipo deve ser resolvido sem recorrer a `any` geral. [Fontes](../materiais/REFERENCIAS.md).
