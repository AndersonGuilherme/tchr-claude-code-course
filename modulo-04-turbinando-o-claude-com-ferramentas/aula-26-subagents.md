# Aula 26 — Subagents: como usar agentes especializados

**Módulo 4 · 7 min · Entrega:** agente de revisão com tarefa delimitada e relatório validado pelo professor.

## Antes de gravar

Projeto com lista e filtros; CLI compatível com subagents. Crie `.claude/agents/` apenas no laboratório. O changelog oficial registra mudanças no antigo assistente `/agents`; este roteiro usa arquivo explícito e não pressupõe que aquele menu exista.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Podemos delegar uma revisão específica sem pedir que a mesma conversa faça tudo. Um subagent recebe uma tarefa delimitada e devolve um resultado. O nome ‘especialista’ organiza o trabalho; não prova que a resposta está correta.”

### 0:30–1:40 · Entenda · B

**Fala:** “Uma skill oferece instruções reutilizáveis; um subagent executa uma tarefa delegada com contexto e ferramentas conforme sua configuração. Eles podem ser combinados, mas não são a mesma coisa. Delegação também consome uso do serviço e pode precisar de supervisão.”

“Hoje queremos apenas uma revisão estática da validação de títulos. Não precisa navegar na internet, editar arquivos ou instalar pacotes. Dar poucas ferramentas torna a tarefa mais compreensível e reduz ações desnecessárias.”

### 1:40–4:15 · Veja · B

[Crie `.claude/agents/revisor-tarefas.md`. Confira os nomes de ferramentas aceitos pela versão.]

```markdown
---
name: revisor-tarefas
description: Revisa validação e atualização de tarefas sem editar o projeto.
tools: Read, Glob, Grep
---

Você revisa o domínio de tarefas.
Leia os arquivos relevantes; não altere arquivos nem execute comandos.
Confira título vazio, espaços, limite de 120 caracteres,
identificadores estáveis e conclusão da tarefa correta.
Para cada achado, cite arquivo, trecho, cenário e impacto.
Separe bug demonstrável de sugestão. Declare verificações não executadas.
Retorne no máximo cinco achados relevantes; não invente problemas.
```

```text
Delegue ao subagent revisor-tarefas a revisão da lista atual.
Peça que examine especialmente duas tarefas com o mesmo título.
Não implemente nenhuma correção nesta etapa.
```

**Fala:** “Vou observar se houve delegação real para o agente configurado. Uma resposta da conversa principal imitando um revisor não comprova o recurso. O relatório precisa citar a implementação atual.”

[Mostre a atividade do agente e abra um trecho citado.]

### 4:15–5:50 · Confira · B/C

**Fala:** “Se ele disser que concluir uma tarefa pode afetar outra de mesmo título, procuro se o código usa o título como identidade e tento reproduzir. Se a implementação usa IDs únicos e o cenário não acontece, rejeito o achado. Revisão independente ajuda, mas também pode produzir falso positivo.”

“Para desenvolvedores: uma boa delegação inclui entrada, escopo, ferramentas e contrato de saída. Não delegue ‘garanta segurança total’, porque isso não define uma tarefa verificável. E não assuma que o agente vê automaticamente toda a conversa principal.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Adapte o agente para revisar somente acessibilidade estática: rótulos, botões e mensagens. Mantenha o relatório sem alegar navegação, porque não demos navegador a ele. Seu exercício está correto quando a delegação é real, o escopo é respeitado e você reproduz pelo menos um cenário conferido. Na próxima aula, vamos disparar uma verificação com um hook.”

## Solução e recuperação

Se o agente não for descoberto, confira diretório, frontmatter e reinicialização da sessão. Caso a versão tenha outro mecanismo, siga a documentação atual e explique a diferença. Nenhum achado deve ser aceito apenas por vir de um subagent. [Fontes](../materiais/REFERENCIAS.md).
