# Aula 14 — /compact e /clear: como controlar o contexto

**Módulo 2 · 5 min · Entrega:** resumir ou reiniciar uma conversa preservando decisões importantes em arquivos.

## Antes de gravar

Sessão de laboratório com algumas mensagens sobre o contador. Anote os arquivos atuais e registre decisões relevantes em `NOTAS.md`. Confira `/compact` e `/clear` no menu da versão instalada. Evite executar comandos enquanto uma tarefa está em andamento.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Uma conversa longa pode carregar tentativas que já não ajudam. Podemos compactar para continuar com um resumo ou limpar o contexto para uma nova tarefa. Nenhuma dessas ações deve ser confundida com desfazer arquivos.”

### 0:30–1:25 · Entenda · B

**Fala:** “Compactar resume o histórico usado na sessão, tentando preservar o que importa. Um resumo pode perder detalhes. Limpar começa um novo contexto de conversa conforme o comportamento da versão, mas não apaga automaticamente os arquivos nem todas as instruções e memórias persistentes.”

“Antes de reduzir contexto, registre requisitos, decisões e pendências importantes fora da conversa. `NOTAS.md` pode guardar isso no laboratório. Não use esse arquivo para despejar mensagens sem organização.”

### 1:25–3:25 · Veja · B

```text
Resuma objetivo atual, arquivos alterados, decisões e pendências.
Separe o que foi verificado do que ainda não foi testado.
```

[Confira o resumo e salve apenas os fatos corretos em `NOTAS.md`.]

```text
/compact Preserve o objetivo do contador, arquivos envolvidos e verificações pendentes.
```

**Fala:** “Após a compactação, peço que a sessão diga o que falta. Se um detalhe importante sumiu, restauro a informação a partir do registro, sem fingir que o resumo é perfeito.”

```text
Qual é o objetivo atual e quais verificações ainda faltam?
Não altere arquivos.
```

[Mostre o estado dos arquivos no editor. Depois use `/clear` e faça leitura explícita das notas.]

```text
/clear
```

```text
Leia CLAUDE.md e NOTAS.md. Explique o estado do laboratório sem editar nada.
```

### 3:25–4:20 · Confira · B/C

**Fala:** “O contador continua no arquivo e na página. Limpar a conversa não removeu essa implementação. A sessão consegue retomar os fatos registrados depois de ler as fontes. Para desenvolvedores: compactar não é uma forma de reduzir tokens sem nenhuma perda possível. Faça checkpoints das decisões, principalmente antes de mudar de tarefa.”

### 4:20–5:00 · Pratique e transição · A

**Fala:** “Faça um resumo de quatro itens: objetivo, arquivos, decisões e próximo teste. Compacte e confira esses itens. Depois, se quiser iniciar uma tarefa independente, limpe e leia novamente as instruções. O exercício está correto quando você consegue diferenciar ‘mudei a conversa’ de ‘mudei o projeto’. Na próxima aula vamos retomar sessões anteriores.”

## Solução e cuidado

Arquivo preservado; contexto resumido ou reiniciado; informações recuperadas por fontes reais. Se o comando mudou, localize o equivalente na ajuda e registre a versão na gravação. Não afirme que `/clear` exclui permanentemente todos os registros históricos. [Referências](../materiais/REFERENCIAS.md).
