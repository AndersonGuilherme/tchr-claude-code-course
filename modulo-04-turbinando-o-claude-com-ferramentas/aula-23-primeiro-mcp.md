# Aula 23 — Como instalar e configurar seu primeiro MCP

**Módulo 4 · 7 min · Entrega:** listar e ler um arquivo fictício por uma ferramenta MCP identificada.

## Antes de gravar

Instale Node.js LTS pela fonte oficial, seguindo seu sistema; reabra o terminal. Crie uma pasta descartável `mcp-lab` fora de dados pessoais e um `exemplo.txt` com “Integração funcionando”. Confirme a documentação de `@modelcontextprotocol/server-filesystem`. Para repetição, registre no material da gravação a versão resolvida pelo npm; `latest` é móvel.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Vamos conectar um servidor local que só conhece uma pasta de laboratório. A integração estará comprovada quando uma ferramenta MCP ler o nosso arquivo, e não apenas quando um nome aparecer como conectado.”

### 0:30–1:40 · Entenda · B

```bash
node --version
npm --version
claude mcp add --help
```

**Fala:** “Node executa programas JavaScript fora do navegador. npm distribui pacotes; npx pode executar um pacote. Esta dependência é do servidor MCP, não da instalação nativa do Claude. O servidor de arquivos oferece leitura e escrita; vamos restringir a pasta, não presumir que o servidor inteiro é somente leitura.”

### 1:40–4:20 · Veja · B

[No Bash, substitua o caminho de exemplo pelo caminho absoluto real, mantendo aspas se houver espaços. Confirme a sintaxe no `--help`.]

```bash
claude mcp add --transport stdio tchr-files -- npx -y @modelcontextprotocol/server-filesystem@latest "/caminho/absoluto/mcp-lab"
claude mcp list
```

**Fala:** “`stdio` indica comunicação com um processo local. O nome `tchr-files` identifica esta configuração. Depois do separador, indicamos como iniciar o servidor e a única pasta permitida. No Windows, use o caminho absoluto correspondente e a forma de execução de npx recomendada para seu cliente; confira a ajuda, sem copiar um caminho Linux.”

[Abra/reinicie a sessão conforme a versão exigir. Consulte `/mcp`.]

```text
Use especificamente as ferramentas MCP do servidor tchr-files.
Liste a pasta permitida e leia exemplo.txt.
Não escreva arquivos nem use a ferramenta nativa de leitura como substituição.
Informe qual ferramenta MCP foi realmente chamada.
```

**Fala:** “Vou abrir o registro da chamada. Precisamos ver o servidor MCP e o conteúdo esperado. Se o Claude usar sua ferramenta nativa, o conteúdo pode estar certo, mas o experimento ainda não comprovou a integração.”

### 4:20–5:55 · Confira · B

**Fala:** “O texto deve ser ‘Integração funcionando’. Também confiro que a lista de diretórios permitidos não inclui meu computador inteiro. Não vou testar permissões tentando ler uma credencial real: uma pasta fictícia fora do escopo basta para verificar uma recusa.”

“Se falhar, leio o estado do servidor e os logs sem expor segredos. Confiro Node, comando de inicialização, pacote e caminho. Para desenvolvedores: em produção de conteúdo e equipe, fixe a versão ensaiada e revise atualizações; executar `latest` toda vez pode mudar o ambiente.”

### 5:55–7:00 · Pratique e transição · A/B

**Fala:** “Crie `segundo.txt` com uma frase e peça a leitura pela mesma ferramenta MCP. Depois saiba revogar a configuração. Não precisamos remover agora se você ainda quiser praticar; quando decidir encerrar, use a ajuda do cliente.”

```bash
claude mcp remove tchr-files
```

“O exercício está correto se você comprova a chamada específica e sabe limitar e remover o acesso. Na próxima aula vamos usar Playwright para conferir nossa página no navegador.”

## Solução e recuperação

Falha de pacote não se resolve desativando TLS. Se a sintaxe de escopo de configuração mudar, siga `claude mcp add --help`. Não confunda o caminho do servidor com a raiz do projeto. [Fontes](../materiais/REFERENCIAS.md).
