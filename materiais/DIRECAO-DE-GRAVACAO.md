# Direção de gravação — Tchr

## Preparação comum às 48 aulas

Grave em 1440p ou 4K, entregando em 1080p/1440p, com fonte de terminal e editor legível no celular. Capture áudio limpo e faça legendas em português. Desative notificações e use navegador/perfil de demonstração. Nunca grave tokens, dados pessoais, cobranças identificáveis ou a confirmação de login. O curso é gratuito; o serviço da Anthropic pode exigir contratação separada.

Três cenas: **A**, rosto e problema/resultado; **B**, editor e terminal, com cursor acompanhando a explicação; **C**, resultado no navegador ou evidência de terminal. Use diagramas simples só quando ajudarem. Abertura de marca deve caber nos primeiros segundos, sem atrasar o conteúdo.

Cada roteiro segue **Entenda → Veja → Pratique → Confira**. Fale com o iniciante sem presumir conceitos; a observação para desenvolvedores deve durar cerca de 15–20 segundos. Explique primeiro o propósito, depois o comando, depois o resultado. Não leia saídas enormes: destaque a linha que prova o resultado. Quando uma resposta da IA divergir, compare com o critério da aula, sem fingir uma resposta garantida.

## Uso das falas e dos tempos

Os blocos “Fala” são narração pronta. Leia naturalmente, faça as pausas indicadas e mostre a ação descrita. As ações também consomem tempo; não é necessário preencher os 8 minutos falando sem parar. Marque no ensaio a duração real. Ajuste pausas e detalhes do exemplo mantendo os critérios de aprendizagem. Não prometa que 319 minutos serão a duração final publicada.

Antes de cada take: abra o estado de entrada descrito; execute uma vez a demonstração; confira o resultado; prepare uma cópia de trabalho para a gravação. Nunca faça resets destrutivos para repetir uma aula sobre trabalho não salvo. Guarde checkpoints com commits e exemplos de dados fictícios. Imagens de erros devem ser reais ou claramente identificadas como simulação.

Corte downloads, instalação de navegador, respostas demoradas e criação de contas. Insira “espera removida” e mostre o resultado real. Preserve o momento em que o professor interpreta o resultado, identifica uma falha ou decide uma permissão.

## Independência dos laboratórios

O repositório atual contém roteiros, não a aplicação final pronta. Crie `tchr-tarefas` em outro diretório para as demonstrações. Não execute prompts de alteração na pasta dos roteiros. Cada exercício oferece uma solução de referência em linguagem natural; o código gerado pode ter outra forma e ainda estar correto.

Terminal Bash/zsh é usado nos exemplos de Git, Node e Docker. No PowerShell, comandos simples também funcionam, mas não copie scripts de shell completos; a aula de instalação diferencia plataformas. Evite ferramentas de sistema não explicadas. `Ctrl+C` interrompe servidores iniciados manualmente no terminal, não salva arquivos nem desfaz alterações.

## Checagem antes da publicação de cada vídeo

Confira nome/versão do aplicativo, comando no `claude --help`, disponibilidade de comandos interativos no menu `/`, permissões e autenticação da conta usada. Demonstrações de `/loop`, `/simplify`, fork e checkpoint exigem ensaio na versão da gravação. Mantenha alternativa por prompt quando o roteiro indicar. Não troque uma função ausente por uma encenação.

Não prometa recuperação de banco com rewind, isolamento de dados só porque há um worktree, segurança só porque existe `CLAUDE.md`, execução confiável só porque há uma skill, ou testes completos só porque uma página abriu.
