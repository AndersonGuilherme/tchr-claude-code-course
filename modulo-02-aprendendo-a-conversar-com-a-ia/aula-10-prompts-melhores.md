# Aula 10 — Como escrever prompts melhores para programar

**Módulo 2 · 6 min · Entrega:** um pedido com objetivo, contexto, limites e critérios observáveis.

## Antes de gravar

Página da aula 9 funcionando. Salve cópia antes de editar. Prepare no editor o pedido vago “melhore a página”; ele será analisado, não executado para causar mudanças desnecessárias.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A/B

**Fala:** “Quando peço ‘melhore a página’, o que seria melhorar? Trocar cores, aumentar letras ou criar uma funcionalidade? A IA precisa adivinhar. Vamos transformar esse pedido em uma instrução que outra pessoa também conseguiria executar e conferir.”

### 0:30–1:40 · Entenda · B

**Fala:** “Um bom pedido costuma responder quatro perguntas: o que eu quero, qual é o contexto, quais são os limites e como vou reconhecer o resultado. Não existe uma frase mágica. Detalhes úteis reduzem ambiguidade; detalhes irrelevantes só ocupam contexto.”

[Escreva os quatro itens ao lado do pedido vago.]

“Nosso objetivo será melhorar a leitura em telas pequenas. O contexto é uma página de três arquivos. O limite é manter textos e comportamento. O critério é caber em uma janela de 360 pixels sem rolagem horizontal.”

### 1:40–4:10 · Veja · B/C

```text
Na página Tchr Tarefas, melhore a leitura em celular.
Leia index.html e styles.css antes de propor mudanças.
Em uma viewport de 360 px, o conteúdo deve caber sem rolagem horizontal,
o texto deve continuar legível e o botão deve ser fácil de acionar.
Mantenha todos os textos e o comportamento do botão.
Não adicione dependências. Explique a proposta antes de editar
e depois liste exatamente os arquivos modificados.
```

**Fala:** “Eu não determinei cada valor de CSS; defini o problema e os limites. Primeiro leio a proposta. Se ela incluir uma biblioteca ou mudar o texto, aponto esse desvio antes de seguir. Quando houver uma decisão ambígua, peço uma pergunta específica.”

[Aprove a proposta coerente, mostre o diff e abra a visualização responsiva a 360 px.]

“Vamos conferir o resultado, porque palavras como ‘responsivo’ não comprovam nada sozinhas. A largura cabe? O botão funciona? O texto permanece igual? Se falhar, envio evidência: largura usada, comportamento observado e resultado esperado. Não digo apenas ‘não funcionou’.”

### 4:10–5:10 · Confira · B

**Fala:** “Um retorno útil seria: ‘A 360 pixels aparece rolagem horizontal; o contêiner tem largura fixa. Corrija mantendo o conteúdo’. Isso limita a próxima investigação. Para desenvolvedores: critérios de aceitação não precisam prescrever implementação. Deixe espaço para uma solução adequada e exija evidência do comportamento.”

“Também não exijo que a IA revele um raciocínio interno. Peço uma explicação das decisões e uma proposta verificável. O que interessa é compreender o que será feito e por quê.”

### 5:10–6:00 · Pratique e transição · A

**Fala:** “Reescreva ‘deixe o botão melhor’ usando as quatro perguntas. Uma solução possível pede foco visível para teclado, preserva o clique e exige teste com Tab e Enter. Execute e confira. Na próxima aula vamos entender a pasta de trabalho, porque um pedido excelente no projeto errado continua sendo um problema.”

## Solução de referência

Prompt do exercício: “No botão Começar, acrescente foco visível ao navegar com Tab, sem remover o estilo normal nem alterar a mensagem de clique. Não instale pacotes. Confira Tab e Enter.” Resultado exige foco perceptível e comportamento preservado. [Fontes](../materiais/REFERENCIAS.md).
