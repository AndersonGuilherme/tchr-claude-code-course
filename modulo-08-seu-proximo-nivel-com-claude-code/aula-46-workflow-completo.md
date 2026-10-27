# Aula 46 — Meu workflow completo usando Claude Code

**Módulo 8 · 8 min · Entrega:** uma pequena mudança percorrendo contexto, plano, implementação, verificação e revisão.

## Antes de gravar

Use a aplicação Next local com banco de desenvolvimento, sem tocar na demo pública. Testes e Git disponíveis. A mudança será uma melhoria de mensagem: indicar quantas tarefas a busca encontrou. Não altere contador global nem API. Prepare uma gravação contínua do fluxo e corte apenas esperas.

## Roteiro de gravação

### 0:00–0:35 · Gancho · A

**Fala:** “Você já viu cada ferramenta separadamente. Agora vamos reunir tudo numa tarefa pequena: mostrar quantos resultados a busca encontrou. Quero que você veja como eu decido o próximo passo e como reconheço a conclusão, sem precisar usar todo recurso em toda tarefa.”

### 0:35–1:45 · Entenda e estabeleça contexto · B

**Fala:** “Começo confirmando a pasta e o estado do Git. Leio as instruções e separo mudanças que já existiam. Depois escrevo o resultado esperado. Não parto de uma sessão antiga supondo que ela conhece o estado atual.”

```bash
git status --short
git diff
```

```text
Leia CLAUDE.md e os componentes de busca/lista.
Objetivo: mostrar "Resultados: N" para a visão atual da busca e do filtro.
Preserve "Pendentes: N" como contagem global. Não altere API nem banco.
Primeiro proponha a menor mudança e os casos de verificação.
```

### 1:45–4:45 · Veja: plano e implementação · B

**Fala:** “Aqui há uma distinção importante: resultados são os itens visíveis; pendentes continuam globais. Se o plano misturar essas duas contagens, corrijo antes de editar. Não preciso de MCP, vários agentes e loop para acrescentar uma mensagem.”

[Revise a proposta; autorize a implementação limitada.]

```text
Implemente a proposta aprovada. Calcule o número a partir da mesma seleção
usada pela lista, sem manter um estado duplicado para a contagem.
Use mensagem acessível sem anunciar excessivamente a cada tecla.
Inclua teste da seleção quando necessário e explique o diff.
```

**Fala:** “Agora acompanho os arquivos. A lista e a mensagem devem usar a mesma visão derivada para não discordar. Se a IA sugerir aproveitar para reescrever toda a tela, deixo isso como tarefa separada. O melhor workflow também sabe dizer ‘já é suficiente’.”

### 4:45–6:45 · Confira e revise · C/B

[Crie três tarefas fictícias, busque uma palavra, troque filtro e limpe a busca.]

**Fala:** “Com a busca, o número de resultados acompanha a lista. O número global de pendentes só muda quando tarefas mudam. Agora executo os testes afetados, tipos e build. Se houve alteração da jornada, incluo E2E no banco de teste dedicado.”

```bash
npx vitest run
npx tsc --noEmit
npm run build
git diff
```

“Se a skill `verify` vier do laboratório HTML, ela precisa ser adaptada: `node --check app.js` não representa este projeto. Confiro os comandos reais antes de reutilizar uma automação. Para desenvolvedores: workflow é um contrato vivo do repositório, não uma coleção de atalhos imutáveis.”

### 6:45–8:00 · Pratique e transição · A

**Fala:** “Termino com um relatório curto: o que mudou, por quê, como testei e qual limitação continua. Só faço commit depois de revisar o conteúdo preparado. Publicação é outra decisão, não uma consequência automática de um teste verde. Seu exercício é reproduzir esse fluxo numa mensagem de erro, mantendo objetivo, plano, evidência e revisão. Na próxima aula vamos levar esse método para equipes e projetos existentes.”

## Solução e cuidado

Entrega: contador de resultados correto, contador global preservado e evidência dos checks. Se um comando falhar, o relatório deve registrar a falha e a investigação. Não afirmar deploy da mudança nesta aula. [Referências](../materiais/REFERENCIAS.md).
