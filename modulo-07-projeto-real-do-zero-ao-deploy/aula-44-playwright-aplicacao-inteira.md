# Aula 44 — Testando a aplicação inteira com Playwright

**Módulo 7 · 8 min · Entrega:** jornada E2E com persistência real, validação de API e ambiente de teste separado.

## Antes de gravar

Crie um banco **exclusivo de testes**, com conexão própria, e aplique a migração nele. Nunca execute limpeza automática no banco de desenvolvimento ou produção. Use `.env.test.local`, ignorado, com DATABASE_URL de teste e DEMO_READ_ONLY=false. O servidor E2E usará porta 3100. Instale o runner e o navegador antes do take.

```bash
npm install --save-dev @playwright/test
npx playwright install chromium
node --env-file=.env.test.local scripts/migrate.mjs
```

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Agora vamos testar a jornada inteira: interface, API e banco. Diferente da aula 24, os dados vêm de um servidor persistente. Por isso o ambiente de teste precisa ser separado e previsível.”

### 0:30–1:45 · Entenda · B

**Fala:** “Um teste E2E automatiza o caminho do usuário. Ele não precisa conhecer todos os detalhes internos, mas precisa de um estado confiável. Vamos começar com um banco vazio dedicado e executar um worker para evitar disputa nesta demonstração.”

“Não vamos criar uma rota pública ‘apagar tudo para testes’. Isso seria um risco. A preparação do banco acontece fora da interface pública, com a conexão de teste identificada. Se não conseguir garantir essa separação, não execute limpeza.”

### 1:45–4:45 · Veja · B

[Peça a configuração e abra o arquivo gerado antes de rodar.]

```text
Configure Playwright Test para Next em 127.0.0.1:3100, Chromium e workers=1.
O servidor deve receber apenas a configuração de .env.test.local;
não reutilize servidor de desenvolvimento nem conexão .env.local.
Crie um runner Node que carrega o arquivo de teste com precedência,
confirma que o nome do banco termina em _test sem imprimir a URL,
e inicia Next e Playwright com esse ambiente, preservando exit codes.
Teste: adicionar título único, concluir, recarregar, conferir persistência,
filtros, busca e contador global. Localize pelo nome único para não depender
da ordem. Use expectations aguardáveis, sem sleeps fixos.
Teste API: título vazio e só espaços retornam 400 sem criar tarefa;
PATCH com completed não booleano retorna 400; UUID inexistente retorna 404.
Não simule sucesso do banco nem enfraqueça assertions para passar.
```

**Fala:** “O arquivo `scripts/test-e2e.mjs` pedido precisa existir antes de chamarmos o comando. O runner deve carregar o ambiente de testes com precedência e repassá-lo aos processos. Também reviso que o Next não vai selecionar silenciosamente a URL de desenvolvimento. A checagem do nome é uma proteção adicional; eu ainda confirmo a instância de teste.”

```bash
node scripts/test-e2e.mjs
```

[Mostre execução e relatório do runner com quantidade real de casos.]

“O teste recarrega depois da conclusão. Se o estado fosse apenas local, essa expectativa falharia. Testar só a presença inicial da tarefa seria insuficiente para comprovar persistência.”

### 4:45–6:45 · Confira · B/C

**Fala:** “Uma falha deve ser investigada pela evidência: resposta de rede, trace, screenshot e logs sem segredos. Se a requisição deu 500, mudar o seletor não resolve o banco. Se o teste encontra dois itens, use um título único e um seletor apropriado, sem selecionar o primeiro arbitrariamente.”

```bash
npx vitest run
npx tsc --noEmit
npm run build
```

“Também quero verificar o modo somente leitura em uma execução separada, reiniciando o servidor com DEMO_READ_ONLY=true: GET deve funcionar, POST e PATCH devem retornar 403. Para desenvolvedores: mocks ajudam em testes focados, mas não comprovam integração com o PostgreSQL.”

### 6:45–8:00 · Pratique e transição · A

**Fala:** “Acrescente um caso que tenta 121 caracteres diretamente na API. O servidor precisa rejeitar mesmo que o formulário limite a digitação. Registre contagens de passou, falhou e pulou. A solução correta inclui banco separado e evidência de persistência, sem limpeza de dados reais. Na próxima aula vamos publicar a demo com escrita bloqueada.”

## Recuperação e limite

Se não houver banco de teste, é um pré-requisito pendente, não passe a usar produção. Scripts solicitados são artefatos a gerar e revisar; não existem automaticamente só porque apareceram no roteiro. A limpeza e recriação de dados precisam de proteção de ambiente e consentimento no laboratório. [Fontes](../materiais/REFERENCIAS.md).
