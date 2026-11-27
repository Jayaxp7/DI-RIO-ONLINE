# Organizador de Aulas

Web app para professores organizarem as aulas do ano letivo.

- Monta a semana de aulas (turma e matéria por horário) e repete no ano todo, pulando feriados, recessos e incluindo sábados letivos
- Assunto do dia, observações, aula dada, avaliações e "não houve aula"
- Plano de aula guiado, com prévia ("Verificar plano") e download em Word (.docx)
- Habilidades da BNCC (Ensino Fundamental) com busca, temas e sugestões automáticas
- Copiar plano para outra turma e baixar os planos da semana num Word só
- Backup e importação dos dados

Os dados ficam salvos no navegador de cada pessoa (localStorage). Use o backup para não perder nada.

## Arquivos

- `index.html`: o app
- `bncc.json`: habilidades da BNCC (Ensino Fundamental)
- `bncc-temas.json`: temas e palavras-chave das habilidades

## Publicar na Vercel

Site estático, não precisa de build. Na Vercel: **Add New → Project → importar o repositório → Deploy**, deixando Framework Preset como "Other".
