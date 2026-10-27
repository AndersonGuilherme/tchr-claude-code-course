# Aula 31 — Dynamic Workflow: organize fluxos inteligentes com IA

**Módulo 5 · 8 min · Entrega:** fluxo condicional aplicado a uma mudança visual e a uma mudança de regra.

## Antes de gravar

Projeto salvo, testes Playwright da aula 24 disponíveis. Crie `WORKFLOW.md`. “Dynamic Workflow” nomeia a metodologia local, não um recurso nativo garantido. O professor vai mostrar decisões explícitas, sem fingir um orquestrador instalado.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Trocar uma frase e mudar a regra de validação não exigem a mesma investigação. Nosso workflow pode adaptar o caminho ao risco, mantendo critérios de conclusão. É isso que vamos chamar de fluxo dinâmico.”

### 0:35–1:50 · Entenda · B

**Fala:** “Um workflow é a sequência de trabalho. Dinâmico significa que algumas etapas dependem do que encontramos. Não significa deixar a IA inventar um processo sem limite. Precisamos de condições claras e de uma pessoa revisando decisões sensíveis.”

“Se faltam requisitos, perguntamos. Se o problema é reproduzível, registramos o caso. Se há mudança de regra, ampliamos a verificação. Se existe credencial, migração ou publicação, precisamos tratar o efeito externo antes de executar.”

### 1:50–4:45 · Veja · B

[Escreva o fluxo abaixo e percorra-o com o cursor.]

```markdown
# Fluxo do Tchr Tarefas
1. Ler instruções e estado atual; registrar objetivo e limites.
2. Há decisão essencial ausente? Perguntar antes de implementar.
3. Mudança só de texto/estilo? Fazer diff pequeno e conferir UI/teclado.
4. Mudança de regra? Reproduzir casos, planejar e testar comportamento.
5. Dependência ou serviço externo? Justificar necessidade e revisar acesso.
6. Implementar a menor alteração coerente com o objetivo.
7. Executar as verificações pertinentes e registrar comando e resultado.
8. Falhou? Investigar a causa; até duas tentativas de correção dirigida.
9. Revisar diff e relatar limites. Encerrar ao cumprir os critérios.
Nunca declarar teste executado sem evidência.
```

```text
Use WORKFLOW.md para classificar esta tarefa, sem implementar:
trocar o texto do botão Adicionar para "Adicionar tarefa".
Explique qual caminho seguirá e quais verificações são suficientes.
```

**Fala:** “Esta é uma alteração de texto, mas pode afetar um teste que procura o nome do botão. Isso mostra por que precisamos ler o projeto antes de classificar mecanicamente.”

```text
Agora classifique, sem implementar: aumentar o limite de título
de 120 para 200 caracteres. Identifique validação, interface,
testes e documentação que podem depender do limite.
```

“Aqui há regra de negócio, casos de borda e potencial divergência entre camadas. Não fazemos a alteração agora porque o curso vai manter 120. Estamos comparando caminhos para entender o método.”

### 4:45–6:45 · Confira · B/C

[Implemente somente a mudança de texto após revisar o plano. Ajuste seletor do teste se necessário para refletir o comportamento aprovado, sem remover expectativas.]

**Fala:** “Agora confira o botão visível, navegação por teclado e teste afetado. Mudar o seletor por uma alteração legítima de nome é diferente de apagar uma asserção porque ela falhou. A regra de 120 continua intacta.”

“Para desenvolvedores: fluxos adaptativos precisam de critérios auditáveis. ‘Rode qualquer teste que quiser’ dá liberdade demais para escolher só os fáceis. Indique os comportamentos atingidos e a evidência esperada.”

### 6:45–8:00 · Pratique e transição · A

**Fala:** “Classifique uma correção de contraste e uma falha ao concluir tarefas de mesmo título. Explique por que a segunda precisa de reprodução funcional. A solução correta mostra condições, ação e critério de parada. Na próxima aula vamos simplificar código preservando comportamento, sem usar a aparência de limpeza como prova de qualidade.”

## Solução e cuidado

Não criar uma skill `/dynamic-workflow` sem ensiná-la. O fluxo é um documento usado em prompt. Revisar não significa executar as duas tarefas: apenas a mudança visual aprovada entra no código. [Fontes](../materiais/REFERENCIAS.md).
