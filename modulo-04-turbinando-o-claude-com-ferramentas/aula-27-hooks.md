# Aula 27 — Hooks: automatize tarefas e verificações

**Módulo 4 · 7 min · Entrega:** executar uma checagem de sintaxe após edição e compreender que ela não testa comportamento.

## Antes de gravar

Node instalado, `app.js` sem imports que impeçam a checagem de sintaxe, laboratório com Git. Faça cópia de `.claude/settings.json` se existir e mescle o exemplo em vez de sobrescrever. Confirme o esquema de hooks da versão. Demonstração em terminal iniciado na raiz do projeto.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Em vez de lembrar de uma verificação depois de cada edição, podemos associá-la a um evento. Hooks fazem isso. Vamos começar com uma checagem pequena e explicar exatamente o que ela consegue detectar.”

### 0:30–1:40 · Entenda · B

**Fala:** “Hook é uma automação executada quando ocorre um evento do Claude Code. `PostToolUse`, por exemplo, acontece após uma ferramenta. Um comando de hook é programa real: pode ler arquivos, consumir recursos e alterar coisas se você mandar. Por isso não devemos copiar hooks de origem desconhecida.”

“Nosso comando será `node --check app.js`. Ele procura erro de sintaxe sem executar a aplicação. Não prova que adicionar tarefa funciona, que o código é seguro ou que a página está acessível.”

### 1:40–4:20 · Veja · B

```bash
node --check app.js
```

[Execute primeiro manualmente; sucesso pode não produzir texto. Registre o código de saída pelo terminal. Mescle o exemplo em `.claude/settings.json`.]

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "node --check app.js" }
        ]
      }
    ]
  }
}
```

**Fala:** “O evento é depois de editar ou escrever. O comando usa um caminho relativo; por isso iniciamos o laboratório na raiz e conferimos o diretório de execução. Não estamos interpolando o conteúdo de uma ferramenta em shell. Depois de salvar, seguimos a orientação de recarregamento da versão e aprovamos apenas esse hook.”

```text
Altere somente uma mensagem visível de app.js para
"Sua lista está vazia". Preserve a sintaxe e o comportamento.
```

[Mostre o evento/hook no registro. Não acrescente mensagem falsa de “todos os testes passaram”.]

### 4:20–5:50 · Confira · B

**Fala:** “Para validar o detector, vou fazer um teste controlado: salvo uma cópia e introduzo manualmente um erro simples de sintaxe no laboratório. Executando `node --check`, ele precisa falhar. Depois restauro exatamente a cópia e executo de novo. Isso prova o comando. A chamada no registro prova a ligação com o evento.”

“Um hook pós-edição não desfaz automaticamente o arquivo quando falha. Leia como o produto apresenta a falha e corrija a causa. Para desenvolvedores: mantenha hooks rápidos e idempotentes. Um build pesado em toda tecla pode transformar uma ajuda em gargalo.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Seu exercício é provocar e corrigir uma falha de sintaxe numa cópia, mostrar a saída real e explicar um erro que esse hook não detectaria, como concluir a tarefa errada. Depois confira que o arquivo voltou ao estado funcional. Fechamos o módulo com integração, skill, delegação e automação. Agora vamos organizar esses recursos em workflows.”

## Recuperação

Erro no JSON: restaure a cópia e valide a sintaxe. Node ausente: corrija instalação/PATH. Evento não disparou: confira ferramenta e configuração carregada. Não transforme falha silenciosa em alegação de sucesso. [Fontes](../materiais/REFERENCIAS.md).
