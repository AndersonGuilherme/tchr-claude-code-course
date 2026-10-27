# Aula 32 — /simplify: como melhorar e simplificar seu código

**Módulo 5 · 6 min · Entrega:** simplificação de pequeno escopo com comportamento preservado e diff revisado.

## Antes de gravar

Projeto salvo e teste de adição/conclusão funcionando. Consulte o menu e a ajuda de `/simplify`: o changelog oficial registra mudanças desse recurso. Não prometa que ele só analisa; algumas versões também aplicam alterações. Use cópia de laboratório e confirme o escopo antes de invocar.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Menos linhas não significa automaticamente código melhor. Vamos procurar uma simplificação pequena que torne uma regra mais clara sem mudar o comportamento. O teste precisa continuar protegendo a mesma experiência.”

### 0:30–1:35 · Entenda · B

**Fala:** “Simplificar pode significar remover duplicação, nomear uma regra ou separar responsabilidades. Pode também dar errado se juntar coisas que parecem iguais mas têm finalidades diferentes. A pergunta é: ficou mais fácil entender e manter, preservando os casos importantes?”

“`/simplify` é um recurso cujo comportamento depende da versão. Vamos ler sua descrição atual. Se não existir na sua instalação, faremos a mesma tarefa com um prompt explícito, sem fingir que o comando foi executado.”

### 1:35–3:55 · Veja · B

```bash
git status --short
npx playwright test --project=chromium
```

[Servidor da aula 24 ativo. Guarde o resultado inicial; se falhar, diagnostique antes de refatorar.]

**Fala:** “A linha de base precisa estar conhecida. Agora localizo um trecho pequeno, como a lógica dos filtros, e explico a intenção. Se a versão permitir informar escopo a `/simplify`, uso a sintaxe exibida. Caso contrário, uso o pedido abaixo.”

```text
Revise somente a lógica de filtros de app.js.
Proponha e aplique uma simplificação pequena, sem mudar rótulos,
dados, contagem global de pendentes ou comportamento dos filtros.
Não crie dependências. Explique por que melhora a leitura.
Se não houver melhoria clara, mantenha o código e diga isso.
```

[Na versão compatível, mostre `/simplify` e a descrição real antes da execução. Não execute as duas alternativas sobre o mesmo diff sem necessidade.]

### 3:55–5:00 · Confira · B/C

```bash
git diff
npx playwright test --project=chromium
```

**Fala:** “Compare o antes e depois com um exemplo de cada filtro. A contagem de pendentes continua global? Os testes mantêm as mesmas expectativas? Se a proposta alterou textos ou acrescentou uma abstração enorme, ela saiu do escopo.”

“Para desenvolvedores: uma extração útil dá nome a um conceito real. Uma função genérica com muitos parâmetros pode esconder a regra em vez de esclarecê-la. Não use quantidade de funções como medida de qualidade.”

### 5:00–6:00 · Pratique e transição · A

**Fala:** “Escolha uma duplicação pequena, escreva o comportamento que deve permanecer e avalie uma proposta. Você pode concluir que não vale alterar. A solução correta é uma decisão justificada com evidência, não uma mudança obrigatória. Na próxima aula vamos criar nossa própria rotina de verificação, sem confundir o nome dela com um comando nativo.”

## Recuperação

Se o comando aplicar mudanças amplas, pare e revise no Git antes de aceitar; preserve trabalho anterior. Falha no teste deve ser investigada, sem enfraquecer asserções. [Referências e dependência de versão](../materiais/REFERENCIAS.md).
