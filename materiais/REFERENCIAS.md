# Referências técnicas e revisão de versão

Referência editorial: conversa anexada pelo autor, com ementa V2, 48 aulas e metodologia Entenda → Veja → Pratique → Confira. O trecho recebido começa com “Carregando mensagens mais antigas”; nenhum conteúdo anterior a esse trecho foi presumido.

## Fontes efetivamente consultadas nesta produção

Em 26/10/2026, foram lidos o [README oficial do Claude Code](https://github.com/anthropics/claude-code/blob/main/README.md), o [CHANGELOG oficial](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md), o [catálogo oficial de plugins](https://github.com/anthropics/claude-code/blob/main/plugins/README.md) e exemplos oficiais de `feature-dev` e `code-review`. Também foram lidos os READMEs oficiais do [Playwright MCP](https://github.com/microsoft/playwright-mcp) e do [servidor MCP de arquivos](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem). São fontes móveis: confira novamente na data de gravação.

O README consultado recomenda instalador nativo, Homebrew ou WinGet e classifica instalação por npm como depreciada. O changelog registra alterações de comportamento de `/simplify`, `/loop`, `/agents`, contexto e permissões. Por isso os roteiros pedem conferir a versão local e não fixam um modelo específico ou menus antigos.

**Limite da consulta:** o domínio `code.claude.com` respondeu com bloqueio de rede neste ambiente. As páginas abaixo são referências oficiais para o ensaio, mas não foram integralmente verificadas por acesso direto nesta produção. Não se afirma que as 48 demonstrações foram executadas no Claude Code. Não há acesso autenticado à conta do professor aqui.

## Documentação para o ensaio

- [Visão geral](https://code.claude.com/docs/en/overview), [instalação](https://code.claude.com/docs/en/setup), [VS Code](https://code.claude.com/docs/en/vs-code).
- [Autenticação](https://code.claude.com/docs/en/authentication), [modelos](https://code.claude.com/docs/en/model-config), [custos](https://code.claude.com/docs/en/costs), [planos Claude](https://claude.com/pricing) e [preços da API](https://platform.claude.com/docs/en/about-claude/pricing).
- [Permissões](https://code.claude.com/docs/en/permissions), [configurações](https://code.claude.com/docs/en/settings), [memória](https://code.claude.com/docs/en/memory), [fluxos comuns](https://code.claude.com/docs/en/common-workflows), [CLI](https://code.claude.com/docs/en/cli-reference).
- [Checkpoints](https://code.claude.com/docs/en/checkpointing), [MCP](https://code.claude.com/docs/en/mcp), [skills](https://code.claude.com/docs/en/skills), [subagents](https://code.claude.com/docs/en/sub-agents), [hooks](https://code.claude.com/docs/en/hooks), [tarefas agendadas](https://code.claude.com/docs/en/scheduled-tasks).
- [Git: worktree](https://git-scm.com/docs/git-worktree), [Playwright MCP oficial](https://github.com/microsoft/playwright-mcp), [Playwright Test](https://playwright.dev/docs/intro).
- [Next.js App Router](https://nextjs.org/docs/app), [Node.js LTS](https://nodejs.org/en/download), [node-postgres](https://node-postgres.com/), [PostgreSQL](https://www.postgresql.org/docs/), [Vitest](https://vitest.dev/guide/), [Vercel](https://vercel.com/docs), [Neon](https://neon.com/docs).

## Decisões que evitam confusão

| Tema | Tratamento no curso |
|---|---|
| Goal/Goalx | Nome de uma metodologia local, sem alegar comando nativo. |
| Deep Research | Investigação documentada; sem pressupor modo/botão de pesquisa do produto. |
| Dynamic Workflow | Fluxo condicional escrito pelo aluno; não é um recurso presumido. |
| `/verify` | Skill criada pelo aluno em `.claude/skills/verify/SKILL.md`. |
| `/simplify` e `/loop` | Recursos dependentes de versão; conferir ajuda e usar alternativa explícita se ausentes. |
| Subagents | Arquivos em `.claude/agents/`; não depender do antigo assistente `/agents`. |
| Fork | Conversa alternativa; os arquivos e serviços não são automaticamente isolados. |
| Rewind | Conferir limites da versão; não substitui Git nem backup de banco. |
| Skills em HTML | Regras coerentes com HTML/CSS/JS; TypeScript entra no módulo 7. |
| Publicação | Demo somente leitura, sem prometer autenticação que não foi ensinada. |
