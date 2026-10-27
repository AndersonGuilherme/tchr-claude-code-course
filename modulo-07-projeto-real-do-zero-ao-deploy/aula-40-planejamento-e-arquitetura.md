# Aula 40 — Criando uma aplicação do zero: planejamento e arquitetura

**Módulo 7 · 8 min · Entrega:** projeto Next.js executando e plano da aplicação com fronteiras claras.

## Antes de gravar

Preserve o laboratório HTML. Use outra pasta `tchr-tarefas-web`, nunca sobrescreva a anterior. Node LTS compatível com Next.js 16, npm e Git. Next 16 exige pelo menos Node 20.9; prefira uma LTS suportada na gravação. Download e scaffold devem ser ensaiados antes; corte esperas. Tenha os critérios das aulas 16, 21 e 28.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Nosso laboratório já ensinou tarefas, filtros e revisão. Agora vamos reconstruir o mesmo domínio numa aplicação com frontend, backend e banco. Não é uma transformação automática do HTML: vamos reaplicar os requisitos numa arquitetura nova.”

### 0:35–2:00 · Entenda · B

[Diagrama: navegador → API no Next.js → PostgreSQL.]

**Fala:** “Next.js organiza uma aplicação React e permite código no servidor. TypeScript acrescenta informação de tipos para ajudar a detectar inconsistências durante o desenvolvimento. PostgreSQL mantém os dados depois de fechar a aplicação. O navegador chama a API; a API valida e acessa o banco. A credencial fica no servidor.”

“Nesta etapa, nosso escopo é um laboratório de usuário único. Não vamos fingir que implementamos autenticação. Publicaremos uma demo somente leitura com dados fictícios. Um serviço público com escrita precisaria identificar usuários, autorizar acesso e limitar abuso.”

### 2:00–4:45 · Veja · B

```bash
node --version
npm --version
npx create-next-app@16 tchr-tarefas-web --ts --eslint --app --no-src-dir --no-tailwind --use-npm --import-alias "@/*" --yes
cd tchr-tarefas-web
npm run dev
```

**Fala:** “O comando cria uma base com TypeScript, App Router e CSS sem Tailwind. A versão 16 delimita a geração usada no curso; o lockfile guardará as versões resolvidas. Se uma pergunta surgir, confira as opções atuais, em vez de aceitar recursos extras sem saber.”

[Abra a página inicial local no navegador; em outro terminal inspecione `package.json`, `app/page.tsx`, `app/layout.tsx` e `app/globals.css`.]

“`page.tsx` representa uma página; `layout.tsx` organiza a estrutura comum; CSS cuida da aparência. Não vou explicar todo React antes de mostrar um resultado, mas vou nomear cada fronteira quando usarmos.”

```text
Crie PLANO.md e CLAUDE.md para esta aplicação real, após ler o projeto.
Stack: Next.js App Router, TypeScript, CSS e PostgreSQL via pg no servidor.
Etapas: frontend em memória; API e banco; filtros/contador; testes; demo pública.
Requisitos: title aparado de 1 a 120 caracteres, ID estável, completed booleano,
estados de carregamento/erro/vazio e acessibilidade por teclado.
Sem login, multiusuário, dependências extras ou deploy automático.
Documente que a demo pública bloqueará escrita via DEMO_READ_ONLY=true.
Liste comandos reais existentes; não afirme testes ainda não criados.
```

### 4:45–6:40 · Confira · B/C

**Fala:** “Confiro se o novo `CLAUDE.md` fala da nova stack. Não copio a regra antiga ‘sem framework’. A página inicial deve abrir sem erro. Depois paro o servidor de desenvolvimento quando necessário e executo as verificações que o projeto realmente fornece.”

```bash
npx tsc --noEmit
npm run build
```

“Se o scaffold tentar baixar fontes externas e a rede bloquear, registre o diagnóstico e use fontes de sistema como escolha do projeto; não desative verificações de rede. Para desenvolvedores: build valida composição e tipos em parte, mas ainda não prova banco ou regras de negócio.”

### 6:40–8:00 · Pratique e transição · A

**Fala:** “Seu exercício é desenhar as três fronteiras e apontar onde fica `DATABASE_URL`: no servidor. Confira a página inicial e registre os comandos executados. A solução correta inclui um plano sem prometer autenticação. Na próxima aula vamos construir a interface com estados claros antes de conectar o banco.”

## Recuperação

Porta ocupada: use outra porta e anote-a para os testes. Não mate processos desconhecidos. Pasta já existe: escolha outra ou inspecione; nunca sobrescreva. As etapas seguintes assumem a raiz `tchr-tarefas-web`. [Fontes](../materiais/REFERENCIAS.md).
