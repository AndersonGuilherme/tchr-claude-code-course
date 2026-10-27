# Aula 17 — Como transformar uma ideia em um plano de desenvolvimento

**Módulo 3 · 7 min · Entrega:** lista de tarefas mínima implementada e conferida pelos critérios da aula 16.

## Antes de gravar

`PLANO.md` aprovado e cópia dos arquivos anteriores. Página ainda com contador. Prepare títulos fictícios “Gravar aula” e “Revisar roteiro”. Não pule a distinção entre requisito e implementação.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Uma ideia descreve o que queremos. Um plano executável organiza como chegar lá em partes que conseguimos conferir. Vamos usar o plano da aula anterior para entregar a primeira lista de tarefas, sem acrescentar recursos no meio.”

### 0:30–1:40 · Entenda · B

**Fala:** “O usuário quer registrar tarefas e marcar o que fez. Isso vira comportamento observável: preencher um campo, enviar, enxergar a tarefa e alterar seu estado. A implementação organiza esse comportamento em dados, interface e eventos. Nossa primeira versão usa um array, uma coleção que vive na memória da página.”

[Mostre uma lista de três etapas: dados/validação; interface/eventos; verificação.]

“Priorizar não é esquecer recursos. Filtros e persistência ficam anotados como próximos passos, sem bloquear a entrega atual.”

### 1:40–4:35 · Veja · B/C

```text
Implemente o PLANO.md aprovado em três etapas pequenas.
Substitua o contador pela lista em memória, preservando a identidade visual.
Tarefa: id estável, title e completed. Valide trim e máximo de 120 caracteres.
Use formulário com rótulo visível, botão Adicionar e conclusão por checkbox.
Renderize o título como texto, nunca como HTML injetado.
Após cada etapa, explique arquivos e verificações; não acrescente recursos.
```

**Fala:** “O identificador distingue duas tarefas com o mesmo título. `completed` indica se foi concluída. E renderizar como texto evita interpretar o título como código HTML. Mesmo num laboratório, já podemos aprender escolhas seguras.”

[Acompanhe a primeira etapa e confira a estrutura. Continue as seguintes após conferir o escopo.]

“Agora abro a página. Começo pelo estado vazio. Digito uma tarefa, envio e observo a lista. Digito outra e marco somente a primeira. Por fim, tento espaços. A validação deve mostrar uma mensagem compreensível e impedir o cadastro.”

### 4:35–5:55 · Confira · C/B

[Teste 120 caracteres, 121 caracteres e título com caracteres `< >`; confira console.]

**Fala:** “O limite deve funcionar tanto na interface quanto na função que valida os dados, quando ela existir. Se o campo impedir o caractere extra, isso prova o limite visual, não toda a lógica. Vamos conferir a função também quando criarmos testes.”

“Recarregando, os dados desaparecem. Hoje isso é o comportamento previsto, não um bug escondido. Para desenvolvedores: uma fatia vertical pequena conecta dados, interface e verificação e reduz o risco de construir camadas enormes sem validar a experiência.”

### 5:55–7:00 · Pratique e transição · A

**Fala:** “Crie duas tarefas com o mesmo título e marque apenas uma. Registre o resultado. Depois envie uma tarefa só com espaços: nenhuma linha nova deve aparecer. Se falhar, descreva passos, resultado atual e esperado antes de pedir correção. Na próxima aula vamos registrar versões com Git e comparar isso com os checkpoints do Claude.”

## Solução e continuidade

Entrada da aula 18: lista com adição, conclusão, estado vazio e validação. Não há persistência. Se a IA usou `innerHTML` para títulos, peça substituição por `textContent` ou criação segura de elementos e repita o teste. [Referências](../materiais/REFERENCIAS.md).
