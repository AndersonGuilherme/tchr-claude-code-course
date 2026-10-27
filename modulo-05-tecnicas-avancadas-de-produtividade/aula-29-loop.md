# Aula 29 — Loop: automatize tarefas repetitivas no Claude

**Módulo 5 · 6 min · Entrega:** repetição observável, limitada e cancelada, sem automação destrutiva.

## Antes de gravar

Confira `/loop` no menu e a sintaxe na ajuda da versão. Tenha servidor local iniciado na porta 5500 como na aula 24. A tarefa será consultar o estado HTTP, sem escrita. Não use loop para disparar mensagens, consumir API paga sem limite ou editar código sem revisão.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Você está esperando um serviço voltar e fica repetindo a mesma checagem. Podemos programar uma repetição. Mas uma automação útil precisa de frequência, escopo e parada; caso contrário, só repetimos um erro mais rápido.”

### 0:30–1:35 · Entenda · B

**Fala:** “O recurso de loop, quando disponível nesta versão, agenda a repetição de um pedido. Não confunda com um serviço de monitoramento de produção. Persistência, intervalos e comportamento ao fechar ou retomar a sessão dependem do produto. Não vamos prometer que continuará funcionando depois de encerrar o processo.”

“Também não existe garantia de que um texto ‘faça três vezes’ seja um limitador financeiro. Eu vou acompanhar as execuções e cancelar explicitamente.”

### 1:35–3:50 · Veja · B

[Após conferir a ajuda atual, invoque a forma suportada; exemplo de intervalo de um minuto.]

```text
/loop 1m Verifique uma única vez o status HTTP de http://127.0.0.1:5500 e relate horário e resultado. Não altere arquivos, não reinicie serviços e não use sites externos.
```

**Fala:** “Vou observar a primeira execução e o agendamento. Entre uma rodada e outra, corto a espera na edição, mantendo horário e contagem visíveis. Na segunda rodada, paro manualmente o servidor que eu mesmo iniciei, para observar a mudança de estado.”

[Interrompa o servidor com Ctrl+C no terminal dele. Observe uma nova checagem; não permita reinício automático.]

“Agora a requisição falha porque o serviço está parado. O loop deve relatar, não tentar consertar algo fora do pedido. Em seguida uso o mecanismo de cancelamento mostrado pela versão e confirmo que não há próxima execução pendente.”

### 3:50–4:55 · Confira · B

**Fala:** “Eu preciso de evidência de duas situações: serviço acessível e serviço parado. Também preciso comprovar a parada da repetição. Apenas fechar uma janela pode deixar tarefa em segundo plano em algumas versões; confira o estado no gerenciador da sessão.”

“Se `/loop` não estiver disponível, faça três checagens manuais com o mesmo pedido e explique que a repetição agendada não foi demonstrada. Para desenvolvedores: monitoramento persistente exige ferramentas de infraestrutura, alertas e operação próprios.”

### 4:55–6:00 · Pratique e transição · A

**Fala:** “Seu exercício é repetir uma consulta sem escrita, observar até três execuções e cancelar. Anote frequência, custo/uso observado e regra de parada. Nunca use um ambiente com dados reais para testar reação a falha. A solução correta inclui mostrar que acabou. Na próxima aula vamos investigar uma decisão técnica antes de escolher a implementação.”

## Recuperação e limite

Sintaxe rejeitada: consulte a ajuda, não tente variações aleatórias. Se a tarefa permanecer em segundo plano, encerre pelo mecanismo oficial antes de sair. O número de execuções do take deve ser real, não um contador inserido como evidência fictícia. [Fontes](../materiais/REFERENCIAS.md).
