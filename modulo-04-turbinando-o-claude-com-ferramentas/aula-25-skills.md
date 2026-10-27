# Aula 25 — Skills: crie comandos personalizados para suas tarefas

**Módulo 4 · 7 min · Entrega:** skill local de revisão que gera um relatório sem editar arquivos.

## Antes de gravar

Projeto salvo; `.claude/skills/revisar-interface/` ainda não existe ou foi preservado. Abra a documentação de skills correspondente à versão instalada. Esta aula usa o formato de skill, sem depender do antigo diretório de comandos personalizados.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Você repete sempre o mesmo pedido de revisão? Uma skill guarda instruções reutilizáveis para essa tarefa. Vamos criar uma chamada `revisar-interface` que ajuda a conferir a página sem sair editando.”

### 0:30–1:35 · Entenda · B

**Fala:** “Skill não é um modelo novo. É um conjunto de instruções e, quando necessário, materiais auxiliares. O arquivo principal se chama `SKILL.md`. Nome e descrição ajudam a descobrir o uso. Invocar uma skill orienta a IA; não garante que a revisão será completa nem limita ferramentas como uma barreira de segurança absoluta.”

### 1:35–4:20 · Veja · B

[Crie `.claude/skills/revisar-interface/SKILL.md` no editor, sem sobrescrever arquivo existente.]

```markdown
---
name: revisar-interface
description: Revisa clareza, teclado e estados da interface Tchr Tarefas.
disable-model-invocation: true
---

Revise a interface atual sem alterar arquivos.
1. Leia os arquivos relevantes e identifique os controles disponíveis.
2. Confira rótulos, foco visível, estado vazio e mensagens de erro.
3. Se houver navegador disponível, execute uma jornada curta.
4. Informe o que foi realmente executado e o que foi apenas inspecionado.
5. Liste achados com arquivo, evidência, impacto e sugestão.
Não invente resultados. Não instale ferramentas nem envie dados externos.
Se faltar acesso ao navegador, declare a limitação.
```

**Fala:** “Aqui preferi invocação manual, indicada pelo campo de configuração. A descrição explica o propósito; o corpo descreve a rotina e o formato de saída. Observe a diferença entre inspecionar código e testar no navegador: o relatório precisa separar as duas.”

[Reabra a sessão se necessário, confirme a descoberta no menu e invoque.]

```text
/revisar-interface
```

### 4:20–5:50 · Confira · B/C

**Fala:** “O relatório cita controles que realmente existem? Se disser que testou teclado, o registro mostra interação de navegador? Vou reproduzir um achado antes de aceitá-lo. Um relatório que parece profissional ainda pode conter uma interpretação errada.”

```bash
git diff
```

“A skill não deveria modificar a aplicação. A criação do próprio arquivo da skill aparece no estado do Git como arquivo novo, e isso é esperado. Para desenvolvedores: mantenha escopo pequeno e saída padronizada. Uma skill de cinquenta responsabilidades vira difícil de validar e manter.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Acrescente à sua skill uma verificação de layout a 360 pixels, deixando claro que ela só pode afirmar execução se abrir o navegador nessa largura. Rode de novo e compare. Sua solução está correta se o relatório respeita os limites e apresenta evidências, mesmo quando não encontra defeitos. Na próxima aula vamos delegar uma tarefa a um agente especializado.”

## Solução e recuperação

Se não aparecer no menu, confira nome `SKILL.md`, caminho, YAML e suporte da versão; não declare instalada só por existir no disco. Não use `allowed-tools` como promessa absoluta de sandbox. [Fontes](../materiais/REFERENCIAS.md).
