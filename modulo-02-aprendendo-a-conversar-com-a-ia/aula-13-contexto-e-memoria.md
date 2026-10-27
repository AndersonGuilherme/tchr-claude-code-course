# Aula 13 — Contexto e memória: o que o Claude realmente sabe?

**Módulo 2 · 6 min · Entrega:** separar informação na conversa, arquivos recuperáveis e instruções persistentes.

## Antes de gravar

Projeto da aula 12, com `CLAUDE.md`. Prepare um arquivo fictício `NOTAS.md` com a decisão “o projeto é um laboratório de usuário único”. Não inclua segredos. Deixe duas sessões separadas prontas para mostrar o contraste.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Você escreveu algo ontem. Será que a sessão de hoje sabe disso? Não devemos presumir. Vamos separar o que está nesta conversa, o que existe nos arquivos e o que é carregado como instrução ou memória.”

### 0:30–1:50 · Entenda · B

[Diagrama: conversa atual → contexto; ferramentas → arquivos; instruções/memórias → contexto quando carregadas.]

**Fala:** “Contexto é a informação disponível ao modelo para responder agora. Ele tem limite. Um arquivo no disco não significa que todo o conteúdo já foi lido. Uma sessão anterior também não se torna conhecimento automático de qualquer sessão nova.”

“Instruções como `CLAUDE.md` e recursos de memória podem persistir conforme a configuração e a versão. Ainda assim, precisamos conferir o que foi carregado. Memória não é acesso ilimitado ao computador, nem lembrança perfeita de tudo que aconteceu.”

### 1:50–4:10 · Veja · B

[Na primeira sessão, envie uma decisão fictícia, sem salvá-la.]

```text
Nesta conversa, considere que o nome de demonstração do projeto é Aurora.
Não salve essa informação nem altere arquivos.
```

**Fala:** “Agora abro uma sessão nova e pergunto qual nome foi decidido. Não vou recompensar um palpite correto: quero saber de onde veio a informação. Se não houver fonte, a resposta responsável é reconhecer que não sabe.”

```text
Qual nome de demonstração foi escolhido? Diga a fonte.
Se não houver informação disponível, não adivinhe.
```

[Depois mostre `NOTAS.md` e peça leitura explícita.]

```text
Leia NOTAS.md e CLAUDE.md. Resuma as decisões que realmente estão
registradas nesses arquivos e indique a origem de cada uma.
```

**Fala:** “Agora fornecemos uma fonte verificável. A decisão sobre usuário único está no arquivo. O nome temporário pode não estar. Esta distinção evita que uma suposição vire requisito do projeto.”

### 4:10–5:10 · Confira · B

**Fala:** “Abra os arquivos citados e confirme as frases. Se aparecer uma decisão que não existe neles, peça correção. Também não salve qualquer conversa como regra permanente: decisões duráveis merecem registro; tentativas passageiras não precisam poluir o manual.”

“Para desenvolvedores: trate documentação, testes e decisões de arquitetura como fontes recuperáveis. Contexto bem escolhido costuma ajudar mais do que enviar todo o repositório indiscriminadamente.”

### 5:10–6:00 · Pratique e transição · A

**Fala:** “Escolha uma decisão real do laboratório e registre em `NOTAS.md`. Abra uma nova sessão, peça a leitura e confira se a fonte foi citada corretamente. A resposta deve distinguir fato registrado de sugestão. Na próxima aula vamos reduzir ou reiniciar o contexto sem confundir isso com desfazer código.”

## Solução e recuperação

Aceite variações de memória da instalação: se o nome aparecer por algum mecanismo persistente, mostre a fonte em vez de declarar falha do experimento. Não prometa amnésia total nem lembrança universal. [Fontes](../materiais/REFERENCIAS.md).
