# Aula 09 — Seu primeiro projeto criado com Claude Code

**Módulo 2 · 8 min · Entrega:** página Tchr Tarefas acessível no navegador, com HTML, CSS e JavaScript separados.

## Antes de gravar

Abra uma pasta nova `tchr-tarefas` fora deste repositório de roteiros. Se reutilizar a pasta de demonstração do módulo 1, preserve seus arquivos em outra cópia antes. Claude autenticado, editor e navegador disponíveis. Nesta aula não precisamos de Node, framework ou banco.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A/C

**Fala:** “Hoje vamos criar a primeira versão do Tchr Tarefas. Será uma página pequena, com um título, uma explicação e um botão que responde ao clique. Vamos entender os arquivos e comprovar o resultado. Mais tarde esse mesmo domínio vai virar um gerenciador de tarefas.”

### 0:35–1:40 · Entenda · B

**Fala:** “A pasta guarda nosso projeto. `index.html` organiza o conteúdo; `styles.css` define a aparência; `app.js` dá comportamento ao botão. O navegador lê esses arquivos. Ainda não teremos servidor, login nem banco. Fechar o navegador não vai preservar tarefas porque sequer criamos esse recurso.”

[Mostre a pasta vazia. Abra `claude` no terminal dela.]

### 1:40–4:50 · Veja · B

```text
Crie uma página chamada Tchr Tarefas nesta pasta usando somente
index.html, styles.css e app.js, sem dependências e sem módulos JS.
Use português na interface, HTML semântico e CSS responsivo.
Inclua título, uma frase de apresentação e o botão "Começar".
Ao clicar, mostre em uma região com role="status": "Vamos organizar suas tarefas!".
Não use alert(), serviços externos, login ou banco.
Explique como abrir a página e o papel de cada arquivo.
```

**Fala:** “Estou pedindo algo que conseguimos verificar. HTML semântico significa usar elementos que representam o conteúdo, como título e botão de verdade. Responsivo significa se adaptar a telas menores. A região de status permite apresentar uma mensagem sem interromper a navegação.”

[Acompanhe a criação; abra os três arquivos, destacando ligação do CSS e script com `defer`. Não leia todo o código.]

“Aqui está a ligação entre a página e a aparência. Aqui o JavaScript encontra o botão e responde ao clique. Não precisa decorar a sintaxe: acompanhe a sequência ‘encontra, escuta o clique, atualiza a mensagem’. Se a geração criar algo diferente do pedido, vamos ajustar só o desvio, sem refazer tudo.”

### 4:50–6:40 · Confira · C/B

[Abra `index.html` no navegador. Clique no botão e use Tab/Enter. Reduza a largura da janela.]

**Fala:** “A página abriu; agora verifico o comportamento. Ao clicar, a mensagem aparece. Com o teclado, consigo chegar ao botão e acioná-lo? Em uma tela estreita, o texto continua legível? Se o clique não funcionar, abro o console do navegador e procuro erro de arquivo ou seletor.”

“Uma página bonita sozinha não prova que tudo funciona. Para desenvolvedores: neste começo, um escopo sem dependências reduz as variáveis da demonstração. A escolha é didática; não é uma regra de arquitetura para todo projeto.”

### 6:40–8:00 · Pratique e transição · A/B

**Fala:** “Seu exercício é trocar a frase de apresentação e personalizar a mensagem do botão. Mantenha os três arquivos e confira novamente clique, teclado e tela estreita. A solução está correta quando as duas frases mudam e o comportamento continua funcionando. Se alterar o nome de um arquivo, precisa atualizar também a referência no HTML. Na próxima aula vamos melhorar nossos pedidos para obter mudanças mais previsíveis.”

## Recuperação e continuidade

Entrada da aula 10: esses três arquivos funcionando. Se CSS não carregar, confira `href`; se JS falhar, confira `src`, seletor e console. Não introduza `fetch` ou módulos enquanto a página for aberta diretamente por arquivo. A partir da aula 24 usaremos HTTP local. [Referências](../materiais/REFERENCIAS.md).
