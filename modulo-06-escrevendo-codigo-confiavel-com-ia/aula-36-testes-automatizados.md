# Aula 36 — Como criar testes automatizados com Claude Code

**Módulo 6 · 8 min · Entrega:** testes de validação que passam com a regra correta e falham quando ela é quebrada numa cópia.

## Antes de gravar

Projeto funcional, Node LTS, Git e Playwright da aula 24. O exemplo executável de apoio usa `node:test`, sem instalar framework. A aplicação pode ter outra organização; adapte importações sem alterar o comportamento. Não chame `npm test` placeholder de suíte existente.

## Roteiro de gravação

### 0:00–0:30 · Gancho · A

**Fala:** “Como garantir que uma correção não reaparece na próxima edição? Vamos escrever testes que descrevem a regra e podem falhar quando ela for violada. O objetivo é detectar um problema real, não criar uma tela verde.”

### 0:30–1:45 · Entenda · B

**Fala:** “Teste unitário verifica uma unidade pequena, como a validação de título. O teste de navegador verifica uma jornada. Precisamos dos dois níveis porque um não substitui o outro: a função pode estar certa e o botão não chamá-la, ou a interface funcionar só para um caso feliz.”

“Nossa regra: receber texto, remover espaços das pontas, rejeitar vazio e mais de 120 caracteres. Vamos extrair essa regra para uma função sem acesso ao DOM, a estrutura da página. Isso a torna testável em Node sem abrir navegador.”

### 1:45–4:45 · Veja · B

```text
Extraia a validação de títulos para uma função pura reutilizada pela interface.
Não mude a regra: string, trim, entre 1 e 120 caracteres.
Use formato compatível com a página atual e com Node; não converta toda a stack.
Crie testes com node:test e node:assert/strict:
vazio, só espaços, texto aparado, 120 aceito, 121 rejeitado e entrada não string.
Cada teste deve chamar a função de produção, não copiar sua implementação.
Configure npm test para executar apenas esses testes unitários.
Mantenha Playwright em comando separado e explique os dois níveis.
```

[Se precisar de base concreta, abra `materiais/exemplos/validacao/` neste repositório e explique a exportação CommonJS compatível com script clássico. Não copie testes dentro da implementação.]

```bash
npm test
npx playwright test --project=chromium
```

**Fala:** “Agora leio as expectativas. O teste de 121 caracteres precisa exigir erro, não apenas ‘retornou algum valor’. O caso de espaços precisa rejeitar depois do trim. Testes que repetem exatamente o mesmo algoritmo podem repetir o mesmo defeito.”

### 4:45–6:45 · Confira · B/C

[Numa cópia descartável, altere temporariamente o limite de produção para 121. Rode o caso de borda, observe a falha e restaure. Não altere a expectativa.]

**Fala:** “A falha é desejada neste experimento controlado: mostra que o teste percebe uma regra quebrada. Restauro a função e os testes precisam passar de novo. Essa falha não deve ficar no projeto final nem ser escondida na contagem.”

“Depois, no navegador, testo adicionar e concluir. Para desenvolvedores: o conjunto deve privilegiar regras e regressões, não detalhes internos como nome de variável ou quantidade de funções. Cobertura de linhas, quando usada, é um indicador parcial.”

### 6:45–8:00 · Pratique e transição · A

**Fala:** “Adicione um teste com texto nas pontas, como espaço, título e espaço. Ele deve retornar só o título aparado. Execute, provoque uma quebra na cópia e restaure. A solução correta prova que o teste detecta o desvio. Na próxima aula vamos proteger credenciais e separar o que pode ir ao navegador do que precisa ficar no servidor.”

## Recuperação

Importação falhou: confira CommonJS/ESM e a forma de exportar; não reescreva tudo sem diagnóstico. Zero testes ou casos `skip` não validam a regra. O exemplo de apoio tem comandos próprios e não é a aplicação inteira. [Fontes](../materiais/REFERENCIAS.md).
