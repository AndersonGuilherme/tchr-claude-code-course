# Exemplos de apoio à gravação

Estes exemplos são materiais do roteiro, não a aplicação final pronta. Execute laboratórios fora da pasta dos roteiros.

## Validação — aula 36

Pré-requisito: Node.js LTS. Não há instalação de dependências.

```bash
cd materiais/exemplos/validacao
node --check validation.js
node --test title.test.cjs
```

`validation.js` contém a função usada pelos testes; não há cópia da implementação nos testes. Para usar numa página de scripts clássicos, carregue `validation.js` antes de `app.js` e chame `TaskValidation.normalizeTitle(valor)` dentro de tratamento de erro. Ao integrar, use o mesmo arquivo, não mantenha duas regras divergentes.

Os testes cobrem vazio, espaços, trim, limite aceito, limite rejeitado e tipo inválido. A função lança erro; a interface deve capturá-lo e apresentar mensagem adequada. Ela não implementa formulário, persistência ou segurança completa. O limite usa o comprimento de string JavaScript (unidades UTF-16), não contagem de grafemas visuais; não explique como uma equivalência perfeita a letras para todos os idiomas.

## SQL e migração — aula 42

Copie as pastas `migrations/` e `scripts/` de `persistencia/` para a raiz do **projeto Next**, preservando arquivos existentes. Instale `pg` no projeto de aplicação conforme a aula. Configure `.env.local` fora da gravação. Depois:

```bash
node --env-file=.env.local scripts/migrate.mjs
```

É uma criação inicial repetível de tabela. Não altera esquemas antigos nem implementa um gerenciador de migrações. Não execute contra um banco desconhecido. Falhas retornam status não zero sem imprimir a conexão. Este material não foi executado contra PostgreSQL neste ambiente de produção dos roteiros; valide no banco de laboratório antes de gravar.

## Ambiente E2E — aula 44

O roteiro pede gerar `scripts/test-e2e.mjs` no projeto final porque ele depende dos scripts e da configuração efetivamente criados. O contrato é: carregar `.env.test.local` com precedência, validar banco dedicado, repassar ambiente ao Next e ao runner, não reutilizar servidor de desenvolvimento e preservar código de saída. Esse arquivo não é fornecido como implementação já validada aqui.

O Next lê arquivos de ambiente próprios; não suponha que o simples nome `.env.test.local` fará `next dev` selecionar o banco de teste. Injete a configuração explicitamente no processo iniciado pelo runner e confirme a instância. Não use `NODE_ENV=test` para improvisar um ambiente de desenvolvimento Next sem verificar suporte.
