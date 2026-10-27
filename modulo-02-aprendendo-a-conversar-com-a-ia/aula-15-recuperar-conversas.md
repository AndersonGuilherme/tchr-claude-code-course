# Aula 15 — Como recuperar e continuar conversas anteriores

**Módulo 2 · 5 min · Entrega:** retomar uma sessão correta e reconciliar o histórico com os arquivos atuais.

## Antes de gravar

Duas sessões locais de laboratório, reconhecíveis pelo assunto. Sem dados pessoais nos títulos. Confira `claude --help` para opções de continuação e retomada. O histórico pode ser local e não sincronizar entre computadores ou contas.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Você fechou o terminal e quer continuar o trabalho. Retomar a conversa pode recuperar o contexto, mas não volta o projeto automaticamente para o estado daquela mensagem. Hoje vamos abrir uma sessão anterior e conferir onde realmente estamos.”

### 0:30–1:25 · Entenda · B

**Fala:** “Continuar costuma selecionar a sessão recente associada ao ambiente ou diretório. Retomar permite escolher uma sessão ou identificador. Esses mecanismos não significam importar qualquer conversa do site do Claude ou do ChatGPT. Também não são um backup remoto do código.”

“Antes de continuar, confirme a pasta. Duas sessões podem ter histórias parecidas, mas tarefas diferentes. O código pode ter mudado depois da conversa que vamos abrir.”

### 1:25–3:25 · Veja · B

[Saia da sessão pelo mecanismo exibido na interface, preservando os arquivos. No terminal do projeto, execute a opção confirmada na ajuda.]

```bash
claude --resume
```

**Fala:** “Vou escolher a sessão pelo assunto e horário, sem mostrar identificadores sensíveis desnecessários. Também existe a opção de continuar a recente quando a ajuda da sua versão a oferecer.”

```bash
claude --continue
```

[Não execute as duas simultaneamente; mostre a segunda como alternativa.]

```text
Antes de continuar, resuma o objetivo desta conversa e a última pendência.
Depois inspecione os arquivos atuais e aponte diferenças em relação
ao histórico. Não edite nada até concluirmos essa conferência.
```

**Fala:** “Aqui está a parte mais importante: não mando ‘continue’ sem verificar o estado. Se o contador já foi concluído em outra sessão, não precisamos implementá-lo novamente.”

### 3:25–4:20 · Confira · B

**Fala:** “A sessão escolhida fala do nosso projeto? O arquivo atual confirma a descrição? A próxima ação ainda faz sentido? Se o histórico não aparecer, confira diretório, conta, máquina e retenção. Se realmente não estiver disponível, retome pelo `CLAUDE.md`, pelas notas e pelos arquivos; não invente um identificador.”

“Para desenvolvedores: pense na conversa como apoio de trabalho, e no repositório e nas decisões registradas como fontes verificáveis. Uma retomada pode conter hipóteses antigas já invalidadas pelo código.”

### 4:20–5:00 · Pratique e transição · A

**Fala:** “Encerre uma sessão, abra o seletor e recupere a conversa do contador. Peça um resumo e confira o arquivo antes de fazer nova alteração. A solução é conseguir explicar o objetivo e a pendência reais, sem repetir uma tarefa concluída. Fechamos o módulo com projeto, instruções e contexto organizados. Agora vamos planejar mudanças e usar Git para acompanhá-las.”

## Solução e cuidado

Uma sessão retomada e nenhuma edição antes da reconciliação. Se `/resume` estiver disponível dentro da interface, pode ser usado como alternativa ao CLI. Não prometa sincronização ou recuperação de histórico apagado. [Fontes](../materiais/REFERENCIAS.md).
