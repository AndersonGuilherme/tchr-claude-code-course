# Aula 33 — Verify: como criar uma rotina de verificação automática

**Módulo 5 · 7 min · Entrega:** skill própria `verify` que registra verificações reais e limitações.

## Antes de gravar

Projeto com Node e Playwright Test instalado. Servidor local na porta 5500. Inspecione scripts existentes: `npm init -y` pode ter criado um `npm test` placeholder; não o apresente como teste válido. Nesta aula usaremos comandos explícitos já conhecidos.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “A frase ‘está funcionando’ é vaga. Vamos criar uma rotina que diga o que foi executado, o resultado e o que ainda falta. Chamaremos nossa skill de `verify`; esse nome é uma personalização do curso.”

### 0:30–1:40 · Entenda · B

**Fala:** “Verificar não é rodar tudo sem critério. É executar os checks relevantes para o comportamento e interpretar a saída. Sintaxe, teste de navegador e inspeção de diff cobrem aspectos diferentes. Nenhum deles, sozinho, garante que todo o sistema está correto.”

“Um comando com erro não pode virar verde só porque outro comando depois terminou bem. O relatório precisa preservar a falha e distinguir falhou, passou, pulou e não executou.”

### 1:40–4:20 · Veja · B

[Crie `.claude/skills/verify/SKILL.md`.]

```markdown
---
name: verify
description: Executa as verificações existentes do laboratório e relata evidências.
disable-model-invocation: true
---

Não altere código, dependências ou testes para fazer uma checagem passar.
1. Confirme diretório, arquivos alterados e comandos realmente disponíveis.
2. Rode node --check app.js e registre saída e código de retorno.
3. Confirme que o servidor local esperado responde; se não, relate o pré-requisito.
4. Rode npx playwright test --project=chromium se houver configuração compatível.
5. Registre quantidade de testes executados, falhas e testes pulados.
6. Inspecione git diff sem descartar alterações.
7. Entregue tabela: verificação, comando, resultado, evidência e limitação.
Zero testes não valida o fluxo. Não transforme comandos não executados em aprovação.
Se houver falha, recomende investigação separada; não faça correções nesta skill.
```

```text
/verify
```

**Fala:** “Veja que a skill primeiro descobre o estado e depois executa o que existe. Se o servidor estiver parado, ela deve apontar o problema, não concluir que passou. Não usamos um `echo` como substituto do teste.”

[Mostre o relatório e abra a saída do runner.]

### 4:20–5:50 · Confira · B

**Fala:** “Agora comparo cada linha com o registro real. Sintaxe sem mensagem pode ter passado, mas quero o status. Playwright deve mostrar os testes executados e a falha, se houver. Se o nome do projeto Chromium estiver diferente, corrigimos a instrução da skill para a configuração real, sem esconder o caso testado.”

“Para desenvolvedores: uma skill organiza a verificação interativa. Um pipeline de CI é outro mecanismo, com ambiente e execução próprios. Não presuma que o servidor iniciado na sua máquina existe na integração contínua.”

### 5:50–7:00 · Pratique e transição · A

**Fala:** “Pare o servidor que você iniciou, rode a skill e observe o resultado. Depois reinicie e repita a verificação afetada. A solução correta registra primeiro o pré-requisito ausente e depois o teste real, sem chamar a primeira tentativa de aprovada. Na próxima aula veremos quando vale dividir trabalho entre mais agentes.”

## Solução e recuperação

Não é necessário fabricar bug de código. O servidor parado já valida o tratamento de um pré-requisito. Se a skill não for carregada, confira seu caminho antes de alegar execução. [Fontes](../materiais/REFERENCIAS.md).
