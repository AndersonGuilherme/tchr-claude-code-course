# Aula 02 — Como instalar Claude Code no seu computador

**Módulo 1 · 7 min · Entrega:** executar `claude --version` no terminal do aluno.

## Antes de gravar

Identifique o sistema mostrado. Prepare capturas separadas para macOS, Linux/WSL e Windows; o aluno acompanha somente a dele. Abra a instalação oficial e confira os requisitos da versão atual. O README oficial consultado recomenda instalação nativa; npm está depreciado. Não associe o requisito de Node do nosso futuro projeto ao instalador nativo do Claude.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Ao final desta aula, seu computador vai reconhecer o comando `claude`. Instalar é colocar o programa na máquina; entrar na conta é outra etapa, que faremos depois. Escolha a parte correspondente ao seu sistema operacional. Não execute todos os instaladores.”

### 0:30–1:25 · Entenda · B

**Fala:** “Abra o aplicativo Terminal no macOS ou Linux. No Windows, vou mostrar PowerShell e a alternativa com WinGet. Um comando é uma instrução para o computador. Copiar comandos de fontes desconhecidas pode instalar programas indesejados; por isso começamos pela documentação da Anthropic e conferimos o endereço.”

[Amplie o domínio da página e o bloco de instalação.]

“Se você usa WSL, o ambiente Linux dentro do Windows, siga a opção Linux dentro dele. Evite instalar em dois ambientes sem saber qual terminal está usando. Terminal, editor e projeto precisam apontar para o mesmo ambiente.”

### 1:25–4:15 · Veja · B

**Fala:** “No macOS ou Linux, a instalação nativa recomendada na fonte consultada usa este comando. Ele baixa e executa o instalador oficial. Leia a origem antes de confirmar.”

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

“Se já usa Homebrew e prefere gerenciar por ele, a alternativa documentada é esta. Escolha um método.”

```bash
brew install --cask claude-code
```

[Corte o download; mostre a conclusão. Troque para captura Windows identificada.]

**Fala:** “No PowerShell do Windows, o instalador documentado é este. Se você prefere WinGet e ele está disponível, há a segunda opção. Também aqui escolha uma delas. Não altere políticas de segurança do sistema às cegas se surgir um bloqueio.”

```powershell
irm https://claude.ai/install.ps1 | iex
```

```powershell
winget install Anthropic.ClaudeCode
```

“Os requisitos e métodos podem mudar. Se a documentação da versão atual divergir deste vídeo, use a orientação atual. Instalação concluída não significa que uma conta foi contratada ou autenticada.”

### 4:15–5:50 · Confira · B

```bash
claude --version
claude --help
```

**Fala:** “O primeiro comando informa a versão instalada. O segundo lista como chamar o programa. Não precisamos entender todas as opções: queremos confirmar que o terminal encontra o executável. Guarde a versão nas suas anotações.”

“Se aparecer ‘comando não encontrado’, feche e reabra o terminal e confira a orientação de PATH no instalador. PATH é a lista de lugares em que o sistema procura programas. Não reinstale repetidamente antes dessa checagem. No Windows, confira também os pré-requisitos indicados na instalação atual, como Git for Windows quando exigido.”

### 5:50–7:00 · Pratique e transição · A/B

**Fala:** “Seu exercício é abrir um novo terminal e executar novamente `claude --version`. Funcionou em uma janela nova? Então o programa está acessível fora da sessão de instalação. Anote sistema, método e versão. Para desenvolvedores: padronize a origem de instalação na equipe para evitar duas versões concorrentes. Na próxima aula vamos integrar esse ambiente ao VS Code.”

## Solução e cuidado

Resultado esperado: número de versão e ajuda sem erro de executável ausente. Falha de download exige conferir conexão e requisitos oficiais, nunca desativar TLS. Não grave instalação bem-sucedida se houve só abertura da página. [Fontes](../materiais/REFERENCIAS.md).
