# Aula 30 — Deep Research: investigue antes de desenvolver

**Módulo 5 · 7 min · Entrega:** nota de decisão com fontes, limitações e recomendação adequada ao laboratório.

## Antes de gravar

Abra fontes oficiais de Web Storage/MDN, PostgreSQL e Next.js. Disponibilidade de busca web na conta não é pré-requisito: documentos podem ser lidos pelo professor e fornecidos à sessão. “Deep Research” aqui é uma metodologia de investigação, não um comando ou modo nativo presumido do Claude Code.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Nossa lista perde dados ao recarregar. Podemos salvar no navegador ou usar um servidor com banco. Antes de escolher uma tecnologia pela popularidade, vamos investigar qual problema cada alternativa resolve.”

### 0:35–1:45 · Entenda · B

**Fala:** “Pesquisar bem começa por uma pergunta delimitada: queremos persistência apenas neste navegador ou entre dispositivos e usuários? `localStorage` guarda dados no navegador e na origem; não é um banco compartilhado entre computadores. PostgreSQL é um banco usado por um servidor e exige configuração, acesso e operação.”

“Uma resposta longa sem fontes não vira pesquisa por causa do tamanho. Precisamos separar fato documentado, hipótese e recomendação.”

### 1:45–4:30 · Veja · B

```text
Investigue persistência para nosso laboratório de tarefas.
Compare armazenamento no navegador com backend e PostgreSQL.
Critérios: sobreviver a recarga, compartilhar entre dispositivos,
complexidade, proteção de dados e caminho para o módulo final.
Use fontes oficiais acessíveis; cite URL e data de consulta.
Se não puder acessar uma fonte, declare e peça o trecho necessário.
Não invente citações nem implemente nada.
Retorne fatos, dúvidas, recomendação e condições para revê-la.
```

[Mostre uma fonte real, encontre uma afirmação citada e destaque seu contexto. Se não houver web na sessão, forneça um trecho copiado com URL e identifique a limitação.]

**Fala:** “Vou conferir duas afirmações centrais: dados do navegador não são automaticamente compartilhados e acesso ao banco não deve ir para o frontend. Se a fonte fala de uma versão diferente ou de outro ambiente, preciso registrar isso.”

“A recomendação do curso é manter memória no laboratório atual e introduzir persistência no servidor no módulo 7. Isso evita ensinar uma solução transitória como se fosse sincronização completa. Podemos explicar `localStorage` sem acrescentá-lo agora ao código.”

### 4:30–5:50 · Confira · B

**Fala:** “Salvo em `DECISOES.md` a pergunta, as opções, as fontes consultadas, a escolha e quando reavaliar. Não salvo uma resposta inteira sem revisão. Se a IA citar uma página que não consegui abrir, marco a afirmação como não confirmada.”

“Para desenvolvedores: registre também restrições operacionais e o custo de migrar. Uma escolha boa para demonstração de usuário único pode ser inadequada para um produto com autorização por usuário.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Pesquise uma pergunta pequena: onde devem ficar credenciais de banco em uma aplicação web? Traga duas fontes oficiais, uma conclusão e uma dúvida. A solução correta mantém credenciais no servidor e distingue documentação lida de lembrança ou hipótese. Na próxima aula vamos transformar decisões e verificações em um fluxo que muda conforme o risco da tarefa.”

## Solução e cuidado

Não fazer chamada a um comando `/deep-research` inexistente. Fonte indisponível não deve ser apresentada como consultada. Credenciais nunca entram nos trechos fornecidos. [Referências](../materiais/REFERENCIAS.md).
