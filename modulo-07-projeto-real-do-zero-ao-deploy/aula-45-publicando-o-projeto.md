# Aula 45 — Publicando nosso projeto na internet

**Módulo 7 · 8 min · Entrega:** demonstração pública somente leitura, com dados fictícios, GET funcional e escrita bloqueada no servidor.

## Antes de gravar

Aplicação revisada e testes da aula 44 concluídos. Conta GitHub, provedor Next.js (exemplo: Vercel) e banco PostgreSQL hospedado (exemplo: Neon) com termos e custos conhecidos. Crie banco exclusivo da demo, separado de desenvolvimento e testes. Autenticação dos provedores e valores de segredos ficam fora da captura. Não publicar é melhor do que expor credencial ou API insegura.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Nossa aplicação vai sair do computador e ganhar um endereço público. Como este curso não implementa contas de usuário, vamos publicar uma demonstração somente leitura. O aluno poderá ver tarefas fictícias, mas ninguém poderá escrever no banco público.”

### 0:35–1:45 · Entenda · B

[Diagrama: repositório → provedor de aplicação → banco da demo.]

**Fala:** “Deploy reúne código, configuração e serviços. O banco local não acompanha automaticamente o código. Variáveis do computador também não aparecem sozinhas na hospedagem. Ter uma página online não prova que API e banco funcionam: vamos conferir cada parte.”

“Somente leitura precisa ser regra no servidor. Esconder o botão não impede alguém de enviar uma requisição. POST e PATCH devem recusar antes de qualquer consulta de escrita quando DEMO_READ_ONLY=true.”

### 1:45–4:50 · Veja · B

```text
Prepare a aplicação para demo somente leitura, sem publicar por conta própria.
Com DEMO_READ_ONLY=true, GET lista dados fictícios; POST/PATCH retornam 403
antes de acessar escrita. A interface informa "Demonstração somente leitura",
oculta/desabilita cadastro e conclusão e mantém filtros e busca.
A UI pode receber readOnly como prop do servidor, sem expor DATABASE_URL.
Verifique que a rota usa runtime Node e pool limitado.
Documente comandos de build, migração e variáveis, sem valores de segredos.
Não adicione NEXT_PUBLIC_DATABASE_URL nem crie rota pública de seed/reset.
```

**Fala:** “Primeiro reviso e testo isso localmente. Depois preparo o banco da demo por uma conexão privada: aplico a migração e insiro apenas tarefas fictícias. Não mostro a URL nem a senha no vídeo. A API pública já ficará em leitura; o preparo do banco não depende dela.”

[No Git, confira diff e arquivos preparados antes de enviar. Não use `git add .` às cegas.]

```bash
git status --short
git diff
```

“Com o código no repositório, importo o projeto no provedor. Confirmo diretório, versão de Node, comando `npm run build` e ambientes. Configuro DATABASE_URL segura e DEMO_READ_ONLY=true no ambiente de produção; previews também precisam de banco e política próprios. Não compartilho a mesma credencial indiscriminadamente entre ambientes.”

[Execute deploy pelo fluxo do provedor, mostrando confirmação sem dados privados. Corte build e espera.]

### 4:50–6:55 · Confira · C/B

**Fala:** “Abro o endereço público em uma janela anônima. Quero ver aviso de demo, tarefas fictícias, busca e filtros funcionando. Na rede, GET deve retornar sucesso. Também preciso testar que escrever diretamente não funciona.”

[No terminal, substitua DOMINIO_DA_DEMO pelo domínio real sem segredos.]

```bash
curl -i -X POST "https://DOMINIO_DA_DEMO/api/tasks" -H "Content-Type: application/json" --data '{"title":"tentativa bloqueada"}'
```

**Fala:** “Espero 403 e nenhum registro novo. Faço o equivalente de PATCH com um ID fictício válido e espero o mesmo bloqueio. Se der 201 ou alterar dados, o deploy não está pronto: retiro a exposição ou bloqueio a rota e corrijo antes de divulgar.”

“Para desenvolvedores: confirme limites de conexão, pooling recomendado pelo banco, TLS, logs sem credenciais e estratégia de rollback. Uma versão antiga pode ser incompatível com uma migração nova; voltar o código não desfaz automaticamente o banco.”

### 6:55–8:00 · Pratique e transição · A

**Fala:** “Seu exercício é preencher uma ficha de publicação com versão do código, ambientes, verificação de GET, bloqueio de POST/PATCH e limites conhecidos. Se não tiver conta ou não quiser hospedar, registre deploy como não executado e mantenha a validação local; não invente URL pública. No próximo módulo vou reunir tudo em um workflow de trabalho.”

## Limite explícito

Entrega pública não é produto multiusuário. Antes de liberar escrita: autenticação, autorização por proprietário, proteção contra abuso, revisão de origem/CSRF conforme a arquitetura e política de dados. Se já houver recurso de remoção externo ao curso, ele também deve ser bloqueado; não basta proteger duas rotas. [Fontes](../materiais/REFERENCIAS.md).
