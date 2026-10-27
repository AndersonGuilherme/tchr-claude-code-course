# Aula 12 — CLAUDE.md: ensine o Claude a seguir suas regras

**Módulo 2 · 8 min · Entrega:** instruções coerentes com a tecnologia real e comportamento conferido no diff.

## Antes de gravar

Página de três arquivos funcionando. Não há React nem TypeScript ainda: o exemplo foi ajustado para não contradizer o projeto inicial. Abra o editor na raiz e preserve qualquer `CLAUDE.md` existente antes de acrescentar regras.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Você já repetiu a mesma regra em várias conversas? Vamos registrar as convenções do projeto em `CLAUDE.md`. Pense nele como um manual de trabalho: útil para orientar, mas incapaz de garantir que tudo será obedecido.”

### 0:30–1:40 · Entenda · B

**Fala:** “Esse arquivo pode explicar tecnologias, organização e formas de verificar mudanças. Ele não é banco de dados, não guarda nossa conversa inteira e não substitui testes ou permissões. Escreva regras curtas que correspondam ao projeto real. Pedir React e TypeScript agora seria confuso, porque construímos uma página com HTML, CSS e JavaScript.”

### 1:40–4:40 · Veja · B

[Crie manualmente na raiz; leia cada seção explicando sua finalidade.]

```markdown
# Tchr Tarefas — instruções do projeto

## Tecnologia atual
- Use HTML, CSS e JavaScript sem framework.
- Não adicione dependências sem aprovação.
- Mantenha conteúdo, aparência e comportamento nos arquivos existentes.

## Convenções
- Escreva nomes de funções e variáveis em inglês.
- Mantenha a interface e as explicações em português.
- Use HTML semântico e preserve acesso por teclado.
- Não coloque senhas ou tokens em arquivos do projeto.

## Verificação
- Explique decisões importantes e liste arquivos alterados.
- Confira no navegador o comportamento afetado e o console.
- Execute os testes existentes quando houver.
- Se não houver teste automatizado, diga isso; não invente resultado.
```

**Fala:** “Aqui eu digo o que existe hoje. ‘Quando houver’ é importante: ainda não configuramos uma suíte automática. Se eu mandasse executar um comando inexistente, criaria uma falsa expectativa. Também separei idioma da interface de idioma dos identificadores.”

[Inicie uma nova sessão na raiz para demonstrar carregamento sem depender de detecção imediata de um arquivo recém-criado.]

```text
Leia as instruções do projeto e acrescente ao botão um contador de cliques.
A mensagem deve ser "Cliques: N" depois de cada clique.
Não altere o título nem crie dependências. Explique as convenções seguidas.
```

### 4:40–6:40 · Confira · B/C

**Fala:** “Vamos olhar os identificadores, não apenas a declaração da IA. A função está nomeada em inglês? A mensagem continua em português? Houve pacote novo? No navegador, o primeiro clique mostra um, o segundo mostra dois. Recarregando, o contador volta ao início, porque o estado está apenas na memória da página.”

[Mostre contador e console; se houver desvio, peça correção específica.]

“Se uma regra não foi seguida, verifico se ela foi carregada, se era clara e se havia uma instrução conflitante. Não aumento o documento com cinquenta frases repetidas. Para desenvolvedores: mantenha instruções versionadas e próximas das decisões do projeto, com comandos reais e escopo bem definido.”

### 6:40–8:00 · Pratique e transição · A

**Fala:** “Acrescente duas regras: uma sobre organização e outra sobre verificação. Depois peça uma mudança pequena e confira se foram seguidas. Por exemplo: manter estilos em `styles.css` e testar o botão pelo teclado. Seu resultado é o arquivo mais a evidência da mudança, não só uma resposta dizendo ‘obedeci’. Na próxima aula vamos entender quais informações a IA realmente tem disponíveis.”

## Solução e cuidado

Ao abrir a nova sessão, confira as instruções carregadas pela interface/mecanismo de memória disponível. Não coloque detalhes pessoais no documento. No módulo 7, atualizaremos as regras para a nova stack, sem carregar a regra antiga “sem framework”. [Referências](../materiais/REFERENCIAS.md).
