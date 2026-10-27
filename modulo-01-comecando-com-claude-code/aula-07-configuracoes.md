# Aula 07 — Configurações do Claude Code: o que você precisa saber

**Módulo 1 · 6 min · Entrega:** distinguir preferência pessoal, configuração do projeto e instrução em prompt.

## Antes de gravar

CLI autenticada; editor com arquivos ocultos visíveis. Preserve configurações existentes. Prepare uma pasta de laboratório sem política corporativa. Confira os caminhos e o esquema da versão instalada. Não abra arquivos globais que possam conter dados sensíveis diante da câmera.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Uma configuração pessoal não deve surpreender toda a equipe. Hoje vamos entender onde ficam preferências e configurações, e como alterar uma coisa pequena sem copiar um arquivo enorme da internet.”

### 0:30–1:45 · Entenda · B

**Fala:** “Existem configurações de usuário, de projeto e configurações locais do projeto. A documentação também descreve políticas gerenciadas pela organização. Não vou resumir a precedência como ‘o arquivo mais próximo sempre vence’, porque regras e tipos de configuração têm comportamentos próprios.”

[Mostre slide com caminhos, sem abrir o conteúdo global real.]

```text
~/.claude/settings.json          configurações do usuário
.claude/settings.json           configurações compartilháveis do projeto
.claude/settings.local.json     ajustes locais do projeto
CLAUDE.md                       instruções de trabalho, ensinadas na aula 12
```

“JSON é um formato de dados: chaves, valores, aspas e vírgulas têm significado. Um comentário ou uma vírgula sobrando pode invalidar o arquivo. E `CLAUDE.md` não é outro arquivo de configuração JSON; é um documento de instruções.”

### 1:45–4:00 · Veja · B

**Fala:** “Primeiro abro a ajuda e o menu da minha versão. Se houver uma interface de configurações, uso-a para observar uma preferência de apresentação. Vou mudar somente essa preferência, conferir o efeito e depois restaurar. Anoto o valor anterior antes de tocar em qualquer coisa.”

[No menu `/`, localize configurações; se `/config` estiver listado, abra-o. Altere uma opção visual disponível, mostrando nome e efeito reais.]

“Não precisamos escrever permissões de terminal agora. Vamos cuidar disso na próxima aula. Também não vou colocar uma chave de API num arquivo compartilhado. Quando uma configuração puder afetar outras pessoas, ela precisa ser revisada junto com o projeto.”

“Para inspecionar um JSON de laboratório, posso usar este validador quando Python estiver disponível. Ele verifica a sintaxe, não se cada campo é aceito pelo Claude.”

```bash
python3 -m json.tool .claude/settings.json
```

[Execute apenas se o arquivo existir; caso contrário, mostre como recurso de diagnóstico, sem criar arquivo vazio só para o vídeo.]

### 4:00–5:10 · Confira · B

**Fala:** “A preferência realmente mudou? Eu sei em qual escopo foi salva? Consigo restaurar? Se o programa rejeitar o arquivo, volto à cópia anterior e comparo com o esquema oficial. Não tento corrigir apagando toda a pasta `.claude`.”

“Para desenvolvedores: mantenha configurações compartilhadas mínimas e revise efeitos em permissões, hooks e ferramentas externas. Configuração pode executar comportamento, não é só aparência.”

### 5:10–6:00 · Pratique e transição · A

**Fala:** “Seu exercício é identificar uma preferência que deve ser só sua e uma regra que a equipe deveria compartilhar. Uma preferência visual é pessoal; um comando de verificação do projeto pode ser compartilhado. Registre onde cada uma pertence. Na próxima aula, vamos ler pedidos de permissão e controlar ações da IA.”

## Resultado e recuperação

Uma preferência alterada e restaurada, sem exposição de configuração sensível. Se houver política gerenciada, explique a restrição e mantenha-a. Não adicione campos desconhecidos para reproduzir uma captura antiga. [Fontes](../materiais/REFERENCIAS.md).
