# Aula 42 — Backend e banco de dados: conectando tudo

**Módulo 7 · 8 min · Entrega:** criar, listar e concluir tarefas via API, persistindo após reiniciar o servidor.

## Antes de gravar

Esta aula exige ensaio: oito minutos de edição não incluem provisionar banco ou baixar imagem. Use PostgreSQL 17 local por Docker ou um banco gerenciado **exclusivo de desenvolvimento**. Configure a conexão fora da captura. Instale `pg` e tipos. Mantenha SSL conforme o provedor; não use `rejectUnauthorized: false` para contornar erro.

```bash
npm install pg
npm install --save-dev @types/pg
```

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Agora uma tarefa vai sobreviver à recarga e ao reinício do Next. O navegador enviará um pedido; o servidor validará e gravará no PostgreSQL. A senha do banco fica fora da interface e da gravação.”

### 0:30–1:40 · Entenda · B

[Mostre diagrama navegador → `/api/tasks` → banco.]

**Fala:** “API é a interface entre essas partes. GET lista, POST cria e PATCH altera o estado de uma tarefa. O servidor não pode confiar só no formulário: uma requisição pode vir de outro programa. Por isso validamos tipo, espaços e limite novamente.”

### 1:40–3:05 · Veja: banco · B

[Se usar Docker, prepare `.env.postgres.local` fora da captura com POSTGRES_USER, POSTGRES_PASSWORD e POSTGRES_DB; confira ignore antes. Alternativa gerenciada: pule Docker, mantendo banco dedicado.]

```bash
docker run --name tchr-postgres --env-file .env.postgres.local -p 127.0.0.1:5432:5432 -v tchr-postgres-data:/var/lib/postgresql/data -d postgres:17
```

**Fala:** “O volume mantém os dados; a porta está ligada só à interface local. Para repetir com o contêiner já criado, use `docker start tchr-postgres`, não crie outro com o mesmo nome. A conexão `DATABASE_URL` fica em `.env.local` e nunca começa com `NEXT_PUBLIC_`.”

[Abra `migrations/001_create_tasks.sql`, sem conexão real na tela.]

```sql
CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL CHECK (char_length(btrim(title)) BETWEEN 1 AND 120),
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
```

### 3:05–5:45 · Veja: implementação · B

```text
Conecte a interface ao PostgreSQL por Route Handlers do App Router.
Crie lib/db.ts server-only com pg.Pool reutilizado e máximo de 5 conexões.
Use runtime Node.js; DATABASE_URL somente no servidor.
Crie a migração SQL mostrada e scripts/migrate.mjs que a lê e executa;
falhas devem terminar com status não zero e fechar a conexão.
GET /api/tasks retorna Task[] ordenado por created_at e id.
POST valida JSON, title string, trim, 1–120; retorna Task e status 201.
PATCH /api/tasks/[id] valida UUID e completed booleano; 404 se não existir.
No Next 16, trate params conforme a API assíncrona do Route Handler.
Use SQL parametrizado; nunca concatene título na consulta.
Mapeie created_at para createdAt. Retorne erros genéricos ao cliente.
POST/PATCH devem retornar 403 antes de escrever se DEMO_READ_ONLY=true.
Frontend: carregamento, erro visível, envio desabilitado durante requisição
e atualização só após resposta válida. GET sem cache de dados obsoletos.
Não implemente remoção nem autenticação. Explique arquivos e limitações.
```

```bash
node --env-file=.env.local scripts/migrate.mjs
```

**Fala:** “Esse script precisa ser criado antes do comando. Uma consulta de criação deve usar `$1` para o título, com valor enviado separadamente. Isso trata o título como dado, não como instrução SQL.”

```typescript
const result = await pool.query(
  'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, completed, created_at',
  [title]
);
```

### 5:45–7:15 · Confira · C/B

[Crie tarefa, recarregue, conclua, reinicie Next e confira o mesmo ID/estado. Inspecione Network sem expor headers sensíveis.]

**Fala:** “Também envio título vazio e espaços: espero 400 e nenhum registro novo. ID válido inexistente deve dar 404. Paro o banco de laboratório para conferir erro visível e resposta sem senha ou detalhes internos; depois reinicio e repito o caso afetado.”

“Para desenvolvedores: `IF NOT EXISTS` torna esta criação repetível, mas não substitui migrações versionadas futuras. O pool tem limite por instância; cinco conexões em várias instâncias ainda multiplicam o total.”

### 7:15–8:00 · Pratique e transição · A

**Fala:** “Mostre uma tarefa com o mesmo ID após reiniciar o Next. Depois ative somente leitura no ambiente local, reinicie e confirme que uma tentativa de escrita retorna 403. Reative escrita apenas no laboratório. Na próxima aula vamos evoluir a experiência sem quebrar esse contrato.”

## Recuperação e limite

Banco indisponível, credencial incorreta e tabela ausente são falhas diferentes. Leia logs privados sem copiar segredos. Esta API ainda não protege dados por usuário; não liberar escrita pública. [Referências](../materiais/REFERENCIAS.md).
