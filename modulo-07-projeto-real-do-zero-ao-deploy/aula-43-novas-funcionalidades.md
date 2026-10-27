# Aula 43 — Evoluindo o projeto com novas funcionalidades

**Módulo 7 · 7 min · Entrega:** busca local por título, combinada com filtros e contagem coerente.

## Antes de gravar

Aplicação com API e banco funcionando, escrita habilitada apenas no laboratório local. Salve um commit e use dados fictícios. Filtros e contador já existem; a novidade é a busca, não uma repetição de recurso anterior. Instale Vitest no projeto Next antes do take com `npm install --save-dev vitest`; ele será o runner dos testes TypeScript deste projeto. Não introduza paginação ou escala de produção nesta aula.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Com muitas tarefas, procurar pelo título ajuda. Vamos adicionar uma busca pequena que funciona junto com os filtros. Antes de escrever código, precisamos decidir o que a busca afeta e o que continua global.”

### 0:30–1:40 · Entenda · B

**Fala:** “A lista carregada do servidor é nossa fonte atual de dados. A visão exibida pode ser derivada de duas condições: status e texto. Não precisamos salvar o resultado filtrado como outra fonte independente, porque isso pode criar divergência.”

“Nesta versão, a busca será local e sem diferenciar maiúsculas de minúsculas. Não prometemos busca sem acentos ou pesquisa no banco inteiro. Quando houver paginação, buscar só os itens carregados poderá ser insuficiente e a arquitetura precisará mudar.”

### 1:40–4:15 · Veja · B

```text
Planeje e implemente busca local por título na lista já carregada.
Campo com rótulo "Buscar tarefas"; ignore espaços nas pontas e caixa.
Combine busca e filtro de status sem alterar a coleção original.
Busca vazia restaura a visão do filtro atual.
Mostre "Nenhuma tarefa encontrada" quando não houver resultados.
Mantenha contador global de pendentes, independente de busca/filtro.
Não altere API, banco ou validação de título. Não instale pacotes.
Acrescente testes da seleção usando Vitest, com imports explícitos
de test/expect; mantenha-os separados dos arquivos E2E do Playwright.
Configure include para os testes unitários e explique limites da busca local.
```

**Fala:** “Vou conferir a proposta antes de aceitar. Uma função de seleção pode receber tarefas, status e consulta. Ela retorna a visão sem remover nada da fonte. Também vamos manter o campo acessível por teclado e a mensagem de resultado compreensível.”

[Acompanhe o diff; mostre como status e texto se combinam.]

“Para testar, uso ‘Gravar aula’ e ‘Revisar roteiro’. A consulta ‘gravar’ encontra a primeira; ‘GRAVAR’ também. Se ela estiver concluída e o filtro for Pendentes, não deve aparecer. Limpar a busca volta ao filtro, não necessariamente a Todas.”

### 4:15–5:50 · Confira · C/B

[Execute a matriz: texto, caixa, espaços, combinação de status, zero resultados, limpar busca; confira contador.]

**Fala:** “O contador global continua refletindo todas as tarefas pendentes, não apenas as visíveis. Recarregar busca os dados persistidos; a consulta da interface pode reiniciar, porque não prometemos guardar a busca na URL.”

```bash
npx vitest run
npx tsc --noEmit
npm run build
```

“Se Vitest ainda não foi instalado, use a preparação indicada no material de apoio e crie os testes antes de executar. Não trate ‘comando não encontrado’ como falha da regra. Para desenvolvedores: mudança incremental pequena evita misturar otimização de consulta, paginação e UX numa mesma entrega.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Crie um caso com uma tarefa concluída cujo título combina com a busca e uma pendente que não combina. Explique o resultado nos dois filtros. Sua solução está correta se usa a interseção das condições e preserva dados. Na próxima aula vamos automatizar a jornada com API e banco, incluindo falhas de entrada.”

## Preparação dos testes

Se a base não tiver Vitest, execute `npm install --save-dev vitest`, configure testes de domínio e use `npx vitest run`. Diferencie esses testes da suíte `node:test` do laboratório antigo. Arquivos do módulo 2 não são automaticamente testes desta aplicação. [Referências](../materiais/REFERENCIAS.md).
