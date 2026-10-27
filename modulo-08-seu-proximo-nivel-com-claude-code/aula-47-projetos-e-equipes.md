# Aula 47 — Como usar Claude Code em projetos e equipes reais

**Módulo 8 · 7 min · Entrega:** proposta de contribuição com escopo, evidência e requisitos de equipe.

## Antes de gravar

Use o repositório de laboratório, não código confidencial de uma empresa. Prepare uma issue fictícia de mensagem de erro e um modelo de PR. Não publique comentários, PRs ou mensagens reais durante o exemplo sem autorização da organização. Políticas corporativas e contratos têm precedência sobre preferências pessoais.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Num projeto em equipe, escrever o código é só uma parte da entrega. Outra pessoa precisa entender a mudança, reproduzir a verificação e saber o que ainda falta. Vamos transformar uma tarefa pequena em uma contribuição revisável.”

### 0:30–1:50 · Entenda · B

**Fala:** “Antes de conectar uma IA ao código da empresa, confirme se a ferramenta, o plano e o envio de dados são permitidos. Não presuma autorização só porque você tem acesso ao repositório. Depois, aprenda as regras locais: organização, comandos, branches, testes e revisão.”

“`CLAUDE.md` pode registrar convenções, mas não substitui política de dados ou proteção de branch. E um agente revisor não substitui a aprovação humana exigida pela equipe.”

### 1:50–4:30 · Veja · B

[Abra uma issue de demonstração em arquivo local.]

```markdown
# Tarefa: explicar falha ao carregar tarefas
Problema: quando a API não responde, a interface fica sem orientação clara.
Resultado: mostrar mensagem de erro e botão Tentar novamente.
Critérios: erro visível; nova tentativa funcional; dados antigos não apagados
silenciosamente; sem alteração do contrato da API.
Fora do escopo: autenticação, retries infinitos e novo serviço de monitoramento.
```

```text
Leia as instruções do repositório e proponha uma implementação para esta issue.
Identifique componentes afetados, testes e possíveis riscos.
Não altere infraestrutura nem envie comentários ou PRs automaticamente.
Depois da implementação revisada, prepare um texto de PR com problema,
comportamento final, verificações realmente executadas e limitações.
```

**Fala:** “Vou mostrar como escrever a descrição, não inventar um teste aprovado. O texto precisa dizer o que acontece quando a API falha e como a pessoa consegue tentar novamente. Se o teste foi feito com uma resposta de rede simulada, declare isso; não chame de falha real do provedor.”

[Mostre um modelo de descrição, identificando os campos como modelo até executar.]

```markdown
Quando a API não responde, a interface informa a falha e oferece nova tentativa.
A tentativa preserva os dados disponíveis e não cria ciclos automáticos infinitos.

Validação: registrar aqui o comando/caso realmente executado e o resultado.
Limitação: esta alteração não implementa observabilidade de produção.
```

### 4:30–5:50 · Confira · B

**Fala:** “Quem revisa consegue entender a tarefa sem ler minha conversa com a IA? O diff contém apenas a mudança? Os testes verificam o cenário do erro e a recuperação? O texto distingue teste simulado de integração real? Essa clareza reduz retrabalho.”

“Para desenvolvedores: alinhe quem integra mudanças paralelas, proteja credenciais de CI e mantenha lockfiles. Documente também quem pode aprovar dependências e deploy. Ferramenta não resolve sozinha a coordenação do time.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Pegue uma mudança que você realmente fez no curso e escreva uma descrição de PR de dois parágrafos: problema e comportamento; depois validação e limites. Não escreva que executou algo só porque existe um comando. A solução correta permite que outra pessoa avalie a contribuição com autonomia. Na última aula, vamos organizar seu próximo ciclo de aprendizado.”

## Solução e cuidado

O modelo de PR não é evidência de implementação. Se só houve planejamento, escreva ‘proposta’ e testes pendentes. Não publicar código de terceiros nem segredos na demonstração. [Fontes](../materiais/REFERENCIAS.md).
