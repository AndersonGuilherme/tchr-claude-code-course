# Aula 22 — MCP: conecte novas ferramentas ao Claude Code

**Módulo 4 · 6 min · Entrega:** reconhecer cliente, servidor, ferramenta e os limites de uma integração.

## Antes de gravar

Projeto salvo. Prepare um diagrama com Claude Code → servidor MCP → recurso. Não é necessário instalar nada nesta aula. Deixe a documentação do servidor de arquivos e a do Playwright MCP abertas para mostrar fontes e permissões reais, sem credenciais.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Como o Claude consegue consultar uma ferramenta que não faz parte do projeto? Uma opção é MCP. Vamos entender a ligação antes de instalar um servidor, para saber que acesso estamos concedendo.”

### 0:30–1:50 · Entenda · B

**Fala:** “MCP significa Model Context Protocol. É um protocolo para um cliente, como Claude Code, conversar com servidores que oferecem ferramentas e fontes de informação. O modelo não recebe conhecimento mágico: ele pode solicitar uma ação e usar o retorno no contexto.”

[Percorra as setas do diagrama.]

“Cliente é quem se conecta; servidor é o programa que oferece capacidades; ferramenta é uma operação, como listar arquivos ou navegar numa página. Há conexões locais por processo e integrações remotas pela rede. Cada uma tem configuração e autenticação próprias.”

### 1:50–4:00 · Veja · B

[Abra o menu de integrações ou `/mcp` se disponível. Uma lista vazia é válida: esta é uma inspeção, não uma demonstração de integração já instalada.]

```text
/mcp
```

**Fala:** “Aqui confirmamos o estado real da sessão. Se não houver servidor, não há integração para demonstrar ainda. Na próxima aula conectaremos um servidor de arquivos a uma pasta descartável. Mais adiante, um servidor Playwright poderá operar um navegador.”

[Mostre no README oficial do servidor as capacidades oferecidas.]

“Observe que um servidor de arquivos pode ter operações de escrita além de leitura. Dar acesso a uma pasta é uma decisão concreta. Não conecte sua pasta pessoal inteira para fazer um exercício pequeno. Já um servidor remoto pode enviar dados a terceiros e exigir uma credencial específica.”

“Uma integração de arquivos aqui é didática. Claude Code já tem ferramentas nativas de arquivos; não precisamos de MCP para fazer toda leitura. A aula ensina o protocolo, não recomenda duplicar ferramentas sem motivo.”

### 4:00–5:05 · Confira · A/B

**Fala:** “Antes de conectar, eu verifico cinco pontos: origem do servidor, capacidades, diretório ou serviço acessível, dados enviados e forma de revogar acesso. Também confiro se o programa necessário está instalado. MCP não é uma política de segurança por si só.”

“Para desenvolvedores: conteúdo vindo de uma ferramenta deve ser tratado como dado potencialmente não confiável. Um documento externo que manda ignorar instruções não ganha autoridade por ter chegado via MCP.”

### 5:05–6:00 · Pratique e transição · A

**Fala:** “Desenhe uma integração de navegador com três elementos: Claude Code como cliente, Playwright MCP como servidor e uma página de laboratório como recurso. Diga uma operação permitida e uma que você não autorizaria, como acessar sua conta bancária. O exercício está correto quando você consegue apontar onde a ação acontece e qual acesso é necessário. Agora vamos instalar o primeiro servidor com escopo pequeno.”

## Solução e cuidado

Não afirmar que servidor conectado significa operação bem-sucedida. A prova funcional virá na próxima aula. [Referências MCP](../materiais/REFERENCIAS.md).
