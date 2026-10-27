# Aula 37 — Segurança: como proteger senhas, tokens e seus projetos

**Módulo 6 · 7 min · Entrega:** configuração de exemplo sem segredos e diagnóstico correto de uma possível exposição.

## Antes de gravar

Use apenas credenciais fictícias claramente inválidas. Prepare `.env.example` sem valores sensíveis e `.gitignore`. Não abra `.env` real. Esta aula prepara conceitos para o backend do módulo 7; a página atual não deve receber credenciais de banco.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Uma credencial não é só um texto: ela pode dar acesso a dados e gerar cobrança. Vamos organizar configuração sem colocar segredos no código, no vídeo ou no prompt. E vamos entender por que esconder uma chave no frontend não funciona.”

### 0:30–1:45 · Entenda · B

**Fala:** “Frontend roda no navegador do usuário. Código e configurações enviados para lá podem ser inspecionados. Backend roda no servidor e pode acessar uma credencial sem entregá-la ao navegador. Um arquivo `.env` ajuda a separar configuração do código, mas não criptografa automaticamente o conteúdo nem corrige uma arquitetura que envia o segredo ao cliente.”

“No Next.js, variáveis com prefixo `NEXT_PUBLIC_` podem ser incorporadas ao código do navegador. Portanto, uma conexão de banco nunca deve usar esse prefixo.”

### 1:45–4:25 · Veja · B

[Edite somente arquivos fictícios no laboratório.]

```gitignore
node_modules/
.env
.env.*
!.env.example
playwright-report/
test-results/
```

```dotenv
# .env.example — documentação, não credenciais
DATABASE_URL=
DEMO_READ_ONLY=true
```

```bash
git status --short
git check-ignore .env.local
git ls-files -- .env .env.local
```

**Fala:** “O arquivo de exemplo mostra os nomes necessários, sem senha. A regra de ignore evita adicionar arquivos locais por engano. Mas se um arquivo já era acompanhado, adicionar ao ignore não o remove do histórico. A listagem de arquivos acompanhados ajuda a identificar isso, sem imprimir o conteúdo.”

“Se uma chave real foi publicada, a ação imediata é revogar ou rotacionar no provedor e investigar uso. Depois tratamos arquivos, histórico, cópias e logs conforme o processo da equipe. Apagar só a última linha do Git não recupera o sigilo.”

[Mostre uma requisição fictícia com entrada de título, sem executar código malicioso.]

“Outra proteção será validar dados no servidor e usar parâmetros SQL. Não basta confiar no formulário: alguém pode enviar uma requisição diretamente. E texto de tarefa deve ser exibido como texto, nunca interpretado como script.”

### 4:25–5:50 · Confira · B

**Fala:** “Confira o que será commitado, os nomes das variáveis e os destinos das integrações. Uma busca automática pode encontrar padrões, mas também deixar passar segredos e gerar falsos positivos. Não vou abrir um arquivo sensível inteiro durante uma revisão gravada.”

“Para desenvolvedores: autenticação identifica o usuário; autorização decide a quais dados ele tem acesso. Nosso laboratório ainda não implementa isso. Por essa razão, o deploy final será uma demonstração somente leitura, sem escrita pública.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Crie o arquivo de exemplo, confira o ignore com um arquivo vazio de laboratório e explique o que faria se uma chave vazasse. Sua solução deve citar revogação ou rotação, não apenas exclusão do arquivo. Na próxima aula vamos refatorar uma regra mantendo comportamento e proteção de testes.”

## Solução e cuidado

Não colocar conexão real em comando de terminal, print ou screenshot. O exemplo não é um gerenciador de segredos e não implementa autenticação. [Referências](../materiais/REFERENCIAS.md).
