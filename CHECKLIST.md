# Checklist editorial e técnico

## Entrega dos roteiros

- [x] Conversa anexada lida; ementa de 48 aulas preservada.
- [x] Oito pastas com os nomes dos módulos, numeradas para ordenar a gravação.
- [x] Um arquivo Markdown por aula, com título e numeração global 01–48.
- [x] Preparação do ambiente e objetivo em cada roteiro.
- [x] Cenas com tempos contínuos, falas prontas e ações de tela.
- [x] Demonstração/prompt, conferência, prática e transição em cada aula.
- [x] Observações para desenvolvedores sem abandonar explicações para iniciantes.
- [x] Projeto inicial HTML/CSS/JS coerente com o `CLAUDE.md` ensinado.
- [x] Passagem para Next/TypeScript apresentada como nova implementação do mesmo domínio.
- [x] Recursos nativos distinguidos de Goal/Goalx, pesquisa, fluxo dinâmico e skill `verify`.
- [x] Limites de fork, rewind, worktrees e memória explicitados.
- [x] Segurança, persistência, banco de teste e publicação somente leitura tratados.
- [x] Índice clicável com 48 aulas e total de 319 minutos estimados.
- [x] Direção de gravação, glossário, referências e exemplos de apoio incluídos.

## Verificações realizadas neste ambiente

Revisão feita em 26/10/2026, usando o fuso do autor. A sequência editorial foi produzida em ordem, sem delegar aulas a agentes paralelos. O conjunto contém aproximadamente 27 mil palavras de roteiros; duração final depende do ensaio e da edição.

- Contagem e sequência: 48 arquivos, sem números repetidos ou faltantes; distribuição 8/7/6/6/7/5/6/3.
- Tempos de cena: início em 0:00, intervalos contíguos e término correspondente ao tempo da aula; soma 319 minutos.
- Estrutura: todos os roteiros contêm preparação, blocos de fala e prática; blocos de código delimitados.
- Blocos JSON de configuração: sintaxe validada. Isso não equivale a validar todos os campos contra uma instalação do Claude.
- Blocos Bash: `bash -n` usado para verificar sintaxe. Comandos que dependem de programas, contas ou serviços não foram por isso executados.
- Exemplo de validação: `node --check validation.js` e `node --test title.test.cjs`; **6 testes passaram, 0 falharam, 0 pulados**.
- Experimento de detecção: em cópia temporária, limite alterado para aceitar 121; o teste detectou a quebra. A cópia foi descartada e o original permanece correto.
- Script de migração: sintaxe Node verificada; a migração não foi executada contra um banco nesta produção editorial.
- Links locais e cobertura do índice: conferidos antes do envio ao GitHub.
- Diff e arquivos preparados para commit: revisados para excluir anexos de origem, segredos e artefatos de execução.

## Ensaios que o professor precisa realizar antes da gravação

Esses itens dependem da máquina, conta e serviços usados nos vídeos; **não foram executados nesta produção dos roteiros**. São checklist de produção, não aulas faltantes.

- [ ] Instalação real nos sistemas operacionais que serão mostrados.
- [ ] Conta, planos, preços, modelos e limites disponíveis na data da gravação.
- [ ] Descoberta dos comandos na versão local e comportamento das permissões.
- [ ] Cada prompt no estado de entrada da aula; revisar respostas reais antes de narrar.
- [ ] MCP, navegador, skills, subagents, hooks e recursos dependentes de versão.
- [ ] Next/TypeScript: geração, testes, build e funcionamento no ambiente de gravação.
- [ ] PostgreSQL: migração, persistência após reinício e tratamento de falhas.
- [ ] E2E: banco dedicado, configuração repassada ao servidor e testes realmente executados.
- [ ] Demo pública: GET funcional e POST/PATCH bloqueados no servidor.
- [ ] Áudio, legibilidade em celular, legendas e corte das esperas.
- [ ] Medir o tempo final; atualizar duração na plataforma após a edição.

Consulte [referências e limites da pesquisa](materiais/REFERENCIAS.md). Nenhuma execução de Claude, aplicação final ou deploy é alegada por existir um comando no roteiro. A publicação deste repositório contém materiais do curso; não representa a publicação da aplicação ensinada.
