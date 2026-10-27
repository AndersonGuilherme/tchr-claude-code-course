# Aula 03 — Claude Code no VS Code: extensões e integração

**Módulo 1 · 5 min · Entrega:** abrir a mesma pasta no editor e no terminal, identificando a extensão oficial.

## Antes de gravar

VS Code instalado, CLI validada e pasta vazia `tchr-tarefas` criada pelo explorador. Extensão oficial da Anthropic disponível no Marketplace. Não autentique diante da câmera. Se usar WSL, prepare o VS Code conectado ao WSL e explique essa escolha; não misture arquivos Windows e Linux.

## Roteiro de gravação

### 0:00–0:25 · Gancho · A/B

**Fala:** “Vamos colocar os arquivos e o Claude no mesmo lugar de trabalho. O VS Code é o editor: ele mostra o projeto. O terminal executa programas. A extensão oferece uma interface integrada. São peças diferentes que podem trabalhar sobre a mesma pasta.”

### 0:25–1:15 · Entenda · B

**Fala:** “Você pode acompanhar o curso usando a CLI no terminal integrado, mesmo sem a extensão. Vou mostrar os dois caminhos para você reconhecer as telas. Abrir uma conversa na extensão não significa que toda sessão do terminal aparecerá automaticamente ali. Os recursos e a maneira de retomar sessões dependem da integração e da versão.”

[Use ‘Abrir pasta’ e selecione `tchr-tarefas`. Destaque a árvore de arquivos.]

### 1:15–3:20 · Veja · B

**Fala:** “Primeiro abro a pasta do projeto. Depois, pelo menu Terminal, crio um terminal integrado. Ele deve iniciar nesta mesma pasta. Aqui posso chamar o programa que instalamos.”

```bash
claude --version
```

“Agora abro Extensões, pesquiso Claude Code e confiro o publicador Anthropic antes de instalar. Nomes e ícones parecidos não comprovam que uma extensão é oficial. Pela página instalada, abro a interface do Claude Code.”

[Mostre publicador, instalação e painel; corte esperas. Não exiba login.]

“Se ele pedir conta, paramos nessa tela; vamos tratar do acesso nas próximas aulas. Para este vídeo, a prova é o painel oficial aberto e o comando disponível no terminal. Não precisamos contratar nada para entender a organização do ambiente.”

### 3:20–4:20 · Confira · B

**Fala:** “Compare o nome da pasta no explorador com o diretório mostrado pelo terminal. Quando há vários projetos abertos, é fácil pedir uma alteração no lugar errado. No Linux e macOS, `pwd` mostra o caminho. No PowerShell, `Get-Location` faz essa conferência.”

```bash
pwd
```

```powershell
Get-Location
```

“Para desenvolvedores: instalações remotas, contêineres e WSL têm ambientes próprios. A extensão e a CLI precisam existir onde serão usadas; instalar no computador anfitrião não garante instalação dentro do ambiente remoto.”

### 4:20–5:00 · Pratique e transição · A

**Fala:** “Seu exercício é abrir `tchr-tarefas`, localizar o terminal integrado e confirmar a versão do Claude. Depois identifique o publicador da extensão. Se a CLI funcionar mas o painel não abrir, você ainda pode seguir pelo terminal enquanto investiga a extensão. Na próxima aula vamos entender planos e cobrança para escolher o acesso com consciência.”

## Solução de referência

Editor e terminal apontam para `tchr-tarefas`; a versão aparece; o painel pertence à extensão oficial. Não é necessário criar arquivo de aplicação nesta aula. Se o editor estiver no projeto errado, feche a pasta e reabra a correta antes de iniciar a sessão. [Referências](../materiais/REFERENCIAS.md).
