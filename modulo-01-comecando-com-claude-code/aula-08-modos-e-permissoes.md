# Aula 08 — Modos e permissões: como controlar a IA

**Módulo 1 · 7 min · Entrega:** diferenciar planejar, editar e autorizar execução, decidindo uma permissão pelo escopo.

## Antes de gravar

Pasta descartável com `index.html`, conta autenticada e permissões padrão. Confira os nomes de modos na versão atual. Não habilite bypass de permissões. Prepare uma cópia do arquivo, pois aprovação de edição pode persistir por sessão dependendo da escolha.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “O Claude pode pedir para ler um arquivo, alterar código ou executar um comando. Antes de clicar em permitir, precisamos saber o que estamos autorizando. Vamos observar uma mudança pequena e decidir cada ação pelo que ela realmente faz.”

### 0:30–1:50 · Entenda · B

**Fala:** “Um modo organiza como a sessão trabalha; uma regra de permissão controla o uso de ferramentas. Plan Mode é útil para analisar e planejar antes de implementar. Outros modos podem permitir edições com menos interrupções. Os nomes e a combinação de opções variam por versão e política da conta.”

“Confiar numa pasta não torna todo arquivo dela confiável. Um texto no projeto pode conter instruções maliciosas. E uma frase como ‘não apague nada’ no prompt ajuda a comunicar intenção, mas não cria uma barreira técnica absoluta.”

### 1:50–4:45 · Veja · B

[Mostre o seletor de modo. Use o atalho exibido pela interface — frequentemente Shift+Tab — e confirme o indicador, sem depender apenas do atalho.]

```text
Leia index.html e proponha como acrescentar um subtítulo.
Não altere arquivos nem execute comandos de escrita.
```

**Fala:** “Estamos pedindo uma análise. Vou conferir a proposta e observar as ferramentas usadas. Agora retorno ao modo de edição com aprovação normal e envio um pedido específico.”

```text
Adicione abaixo do título o subtítulo "Organize uma tarefa por vez".
Altere somente index.html. Explique o diff.
```

[Leia a eventual permissão; destaque ferramenta, arquivo, comando e duração do consentimento.]

**Fala:** “Antes de permitir, comparo o arquivo com o pedido. Esta ação corresponde ao que solicitei? A autorização vale só uma vez ou cria uma regra mais ampla? Para nosso laboratório, prefiro a menor autorização necessária. Se aparecer uma instalação ou remoção que não pedi, recuso e peço explicação.”

“Não vou demonstrar um comando destrutivo real para ensinar recusa. Basta cancelar uma ação fora do escopo ou discutir uma captura identificada como exemplo. Segurança não exige colocar seus dados em risco para fazer uma aula.”

### 4:45–6:00 · Confira · B/C

**Fala:** “Agora leio o diff e abro a página. O subtítulo aparece e nada além do combinado foi alterado? Uma permissão aceita não prova correção do código. Ela só autorizou uma ação.”

[Abra o menu de permissões, se disponível, para mostrar onde revisar concessões; não acrescente regra ampla.]

“Para desenvolvedores: menor privilégio significa limitar ferramentas, caminhos e destinos ao necessário. Sandbox, políticas gerenciadas e revisão se complementam. Nenhum deles substitui os outros.”

### 6:00–7:00 · Pratique e transição · A

**Fala:** “Seu exercício é pedir uma alteração de texto em um único arquivo e explicar cada autorização que aparecer. Depois classifique três ações: ler o HTML, instalar um pacote e apagar uma pasta. Qual delas é necessária para mudar um subtítulo? Apenas a leitura e a edição correspondente. Concluímos o primeiro módulo: ferramenta instalada, conta funcionando e uma maneira consciente de usá-la. Agora vamos criar nosso projeto.”

## Solução e cuidado

O aluno aprova escopo compatível e recusa instalação/remoção desnecessária. Se não houver prompt de permissão por uma regra prévia, mostre a regra e explique; não encene uma confirmação inexistente. [Referências](../materiais/REFERENCIAS.md).
