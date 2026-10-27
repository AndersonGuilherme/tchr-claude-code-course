# Aula 05 — Como fazer login e começar a usar Claude Code

**Módulo 1 · 4 min · Entrega:** uma resposta autenticada sem acesso a arquivos sensíveis.

## Antes de gravar

CLI instalada e conta com acesso confirmado. Use `tchr-tarefas` sem segredos. Prepare corte integral da autenticação. Não use chave de API no histórico do terminal nem em gravação. Se a organização usa provedor gerenciado, siga as instruções dela em vez de improvisar login pessoal.

## Roteiro de gravação

### 0:00–0:25 · Gancho · A

**Fala:** “Instalar colocou o programa no computador. Agora vamos identificar a conta que pode utilizá-lo. Vou mostrar o caminho e esconder a etapa de autenticação, porque códigos temporários, tokens e dados pessoais não devem aparecer no vídeo.”

### 0:25–1:05 · Entenda · B

**Fala:** “Comece dentro da pasta de laboratório. Essa escolha ajuda a delimitar onde vamos trabalhar. A autenticação confirma acesso ao serviço; as permissões de ferramentas controlam ações sobre arquivos e comandos. Estar autenticado não significa que qualquer ação deva ser autorizada.”

```bash
claude
```

### 1:05–2:25 · Veja · B

**Fala:** “Na primeira abertura, sigo as telas da versão instalada, leio os avisos da pasta e escolho a modalidade de conta compatível. Se for aberto o navegador, verifico o domínio oficial e concluo o acesso fora da captura. Não cole uma credencial em um prompt para pedir ajuda com login.”

[Corte a autenticação inteira. Retorne com legenda ‘login concluído fora da gravação’.]

“Agora estou na sessão. Vou pedir uma resposta simples, sem leitura nem edição de arquivos.”

```text
Responda em português: o que é um arquivo HTML?
Use duas frases e não execute ferramentas nem altere arquivos.
```

**Fala:** “A resposta chegou. Isso demonstra uma interação com o serviço. Ainda não é teste de edição, de build ou de acesso a algum repositório. Estamos verificando um requisito por vez.”

### 2:25–3:20 · Confira · B

**Fala:** “Se aparecer erro de autorização, confira se a conta selecionada tem acesso ao Claude Code e se a sessão pertence à organização correta. Se aparecer erro de limite, consulte as condições da conta. Se houver falha de rede, leia a mensagem e confirme a conexão antes de refazer o login. Problemas diferentes pedem soluções diferentes.”

“Para quem já desenvolve: variáveis de autenticação previamente configuradas podem selecionar outro provedor ou cobrança. Verifique a configuração pelos mecanismos do produto sem imprimir valores de credenciais. Não exponha o ambiente inteiro para diagnosticar uma conta.”

### 3:20–4:00 · Pratique e transição · A

**Fala:** “Peça uma explicação de CSS em duas frases, também sem usar ferramentas. Confira se a resposta está em português e respeita o tamanho. Se conseguiu, o acesso básico está funcionando. Guarde apenas o resultado, nunca a credencial. Na próxima aula vamos escolher o modelo adequado para cada tarefa.”

## Resultado esperado e recuperação

Uma resposta de texto recebida e nenhum arquivo modificado. Se a autenticação não funcionar, registrar mensagem sem dados pessoais e consultar o fluxo oficial; não apresentar acesso como concluído só porque o navegador abriu. [Fontes](../materiais/REFERENCIAS.md).
