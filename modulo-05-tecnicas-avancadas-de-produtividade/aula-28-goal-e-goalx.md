# Aula 28 — Goal e Goalx: desenvolvimento orientado a objetivos

**Módulo 5 · 7 min · Entrega:** uma ficha de objetivo com critérios, limite e regra de parada.

## Antes de gravar

Lista com filtros e Git disponíveis. Abra um documento novo `OBJETIVO.md`. **Goal e Goalx são nomes da metodologia didática deste curso**, não comandos nativos presumidos nem pacotes que o aluno precisa instalar. Não digite `/goal` ou `/goalx` como se fossem garantidos.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Uma sequência de pedidos pode produzir muitas alterações e ainda não resolver o problema. Vamos organizar o trabalho em torno de um objetivo verificável. Nesta aula, Goal significa definir a meta; Goalx é o nome que daremos ao ciclo de executar, verificar e decidir o próximo passo.”

### 0:35–1:45 · Entenda · B

**Fala:** “Esses nomes descrevem nosso método. Sua instalação pode ter uma extensão com nome parecido, mas não dependemos dela. O que importa é registrar resultado esperado, limites e quando parar. Sem critério de parada, a IA pode continuar ‘melhorando’ algo que já atende à necessidade.”

“Nossa meta é tornar claro quantas tarefas ainda faltam. Vamos adicionar um contador de pendentes sem mudar a forma de cadastrar ou concluir.”

### 1:45–4:30 · Veja · B

[Escreva a ficha e leia o propósito de cada campo.]

```markdown
# Objetivo: enxergar tarefas pendentes
Problema: o usuário não sabe quantas tarefas faltam sem contar manualmente.
Resultado: exibir "Pendentes: N" calculado a partir de todas as tarefas.
Critérios:
- Lista vazia mostra zero.
- Adicionar uma tarefa aumenta o valor.
- Concluir reduz; reabrir aumenta.
- Trocar filtros não muda a contagem global.
Limites: sem dependências, persistência ou mudança de layout geral.
Parada: critérios demonstrados e diff revisado.
Limite de tentativa: até duas correções; depois investigar a causa.
```

```text
Leia OBJETIVO.md. Proponha uma alteração pequena para atender aos critérios.
Depois da revisão da proposta, implemente apenas esse escopo.
Registre evidências por critério e não acrescente melhorias opcionais.
```

**Fala:** “Aqui começa nosso ciclo Goalx. Primeiro a hipótese de solução, depois uma mudança limitada, depois a evidência. Se o número variar com o filtro, encontramos um erro específico: a contagem usou a lista visível em vez do conjunto completo.”

[Mostre implementação e teste manual de cada critério. Corte a espera, não a interpretação.]

### 4:30–5:50 · Confira · C/B

**Fala:** “Com duas tarefas abertas, o contador mostra dois. Concluo uma e passa a um. No filtro Concluídas, continua um, porque estamos contando pendências globais. Reabro e volta a dois. Agora posso encerrar, mesmo que a IA sugira animações ou outra fonte.”

“Para desenvolvedores: um objetivo com evidência ajuda na revisão e evita medir progresso pela quantidade de código. Limitar tentativas também impede um ciclo caro de alterações sem diagnóstico.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Crie uma ficha para melhorar a mensagem do filtro vazio. Escreva um comportamento, dois critérios e uma regra de parada. Não peça implementação antes de conseguir explicar o que comprova a entrega. Sua solução deve permitir dizer ‘terminou’ sem depender de gosto indefinido. Na próxima aula veremos uma repetição programada, com limite e acompanhamento.”

## Solução e cuidado

Não apresentar a ficha como funcionalidade exclusiva da Anthropic. Se existir plugin homônimo na máquina do professor, desabilite a confusão visual ou explique separadamente origem, instalação e diferença. [Referências e distinções](../materiais/REFERENCIAS.md).
