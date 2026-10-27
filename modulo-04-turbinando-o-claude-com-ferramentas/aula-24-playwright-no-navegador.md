# Aula 24 — Playwright com Claude Code: testes no navegador

**Módulo 4 · 8 min · Entrega:** verificação exploratória pelo MCP e um teste Playwright reproduzível no projeto estático.

## Antes de gravar

Node LTS disponível da aula 23; lista com filtros funcionando. Confirme o README oficial do Playwright MCP. Execute instalações e download de navegador antes do take. Ainda não há autenticação, banco ou contas reais no navegador automatizado.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Vamos pedir ao Claude que abra nossa página e confira uma tarefa. Depois guardaremos esse comportamento como teste que pode ser repetido sem depender de uma conversa. São duas coisas relacionadas, mas diferentes.”

### 0:30–1:35 · Entenda · B

**Fala:** “Playwright automatiza um navegador. Pelo MCP, a IA pode explorar a interface. Já Playwright Test executa um arquivo de teste com expectativas explícitas. Uma exploração bem-sucedida não significa que uma suíte de regressão foi criada.”

### 1:35–4:10 · Veja: exploração · B/C

[No terminal do projeto; `npm init` somente se não houver `package.json`. Revise o manifesto criado.]

```bash
npm init -y
npm install --save-dev @playwright/test http-server
npx playwright install chromium
npx http-server . -a 127.0.0.1 -p 5500 -c-1
```

**Fala:** “Agora servimos a página por HTTP local. Este terminal precisa continuar aberto; outro terminal será usado para o Claude. O endereço aponta para esta máquina, não publica a aplicação na internet.”

```bash
claude mcp add --transport stdio playwright -- npx -y @playwright/mcp@latest
```

```text
Use Playwright MCP para abrir http://127.0.0.1:5500.
Adicione "Gravar aula", marque como concluída e confira os filtros.
Use rótulos e papéis acessíveis. Relate ações, resultados e erros de console.
Não altere o código nem navegue em outros sites.
```

[Mostre a chamada real e a página. Se o MCP pedir instalação de navegador, siga a instrução oficial e corte a espera.]

### 4:10–6:30 · Veja: teste salvo e conferência · B

**Fala:** “Agora vou transformar a verificação em um arquivo. O teste precisa falhar se o comportamento quebrar.”

```text
Crie tests/tarefas.spec.ts para Playwright Test.
Use URL local 127.0.0.1:5500 e um navegador Chromium na configuração.
Em contexto novo, adicione "Gravar aula", espere a tarefa aparecer,
marque-a concluída e confira Pendentes e Concluídas.
Use os rótulos reais da página e assertions explícitas.
Não altere a aplicação para esconder uma falha do teste.
```

```bash
npx playwright test --project=chromium
```

**Fala:** “O nome do projeto deve existir na configuração gerada. Se não existir, corrija a configuração ou use o comando correspondente. Vou conferir a quantidade de testes e as expectativas. Um teste pulado ou zero testes não comprova nada.”

### 6:30–7:20 · Pratique · C

**Fala:** “Acrescente um caso para título só com espaços. A lista deve continuar vazia e uma mensagem de validação deve aparecer. Execute esse caso e o anterior. Para desenvolvedores: seletores por papel e nome acessível tendem a representar melhor a interação do usuário do que classes visuais frágeis.”

### 7:20–8:00 · Transição · A

**Fala:** “Temos uma exploração pela IA e um teste salvo. Ao terminar, encerre o servidor que você iniciou com Ctrl+C. Não esqueça de registrar as versões no lockfile. Na próxima aula vamos empacotar rotinas em skills reutilizáveis.”

## Recuperação

Conexão recusada: confira servidor/porta. Seletor ambíguo: use o nome acessível real, sem enfraquecer a expectativa. Instalação de navegador depende do sistema; siga o diagnóstico oficial. [Fontes](../materiais/REFERENCIAS.md).
