# Guia de Versionamento

Este projeto utiliza um sistema de versionamento automático baseado em commits convencionais e release-it.

## Versões Sincronizadas

As versões do workspace principal e da biblioteca interna estão sincronizadas. Isso significa que:

- Quando você executa um release do workspace, a versão da biblioteca é atualizada automaticamente para a mesma versão
- Ambos os arquivos package.json sempre terão a mesma versão

## Fluxo de Trabalho

1. **Desenvolvimento**

   - Desenvolva suas alterações em uma branch específica
   - Faça commits padronizados usando o conventional commits

2. **Geração de Versão**

   - Quando estiver pronto para lançar uma nova versão, faça merge para a branch master
   - Execute um dos comandos abaixo para gerar a versão:
     - `npm run release` - Determina automaticamente o tipo de versão com base nos commits
     - `npm run release:patch` - Incrementa a versão de patch (1.0.0 → 1.0.1)
     - `npm run release:minor` - Incrementa a versão menor (1.0.0 → 1.1.0)
     - `npm run release:major` - Incrementa a versão maior (1.0.0 → 2.0.0)

3. **O que acontece durante o release**
   - O código é compilado para validação
   - O número de versão é incrementado em ambos os package.json (workspace e biblioteca)
   - O CHANGELOG.md da biblioteca é atualizado automaticamente com as alterações
   - É criado um commit com a nova versão
   - É criada uma tag com a nova versão
   - As alterações são enviadas para o repositório remoto
   - A biblioteca é publicada no npm com a tag "latest"

## Versões Alpha

Para versões de pré-lançamento (alpha), use os seguintes comandos:

1. **Criando versões alpha**

   - Recomenda-se criar versões alpha a partir de branches de feature ou development
   - Execute um dos comandos abaixo para gerar a versão alpha:
     - `npm run release:alpha` - Cria uma versão alpha baseada na versão atual (1.0.0 → 1.0.1-alpha.0)
     - `npm run release:alpha:increment` - Incrementa a versão alpha baseada na versão atual (1.0.1-alpha.0 → 1.0.1-alpha.1)
     - `npm run release:alpha:patch` - Incrementa o patch e adiciona o sufixo alpha (1.0.0 → 1.0.1-alpha.0)
     - `npm run release:alpha:minor` - Incrementa o minor e adiciona o sufixo alpha (1.0.0 → 1.1.0-alpha.0)
     - `npm run release:alpha:major` - Incrementa o major e adiciona o sufixo alpha (1.0.0 → 2.0.0-alpha.0)

2. **Incrementando versões alpha**

   - Para incrementar versões alpha na mesma versão base, utilize o `npm run release:alpha:increment`. Desta forma o número do alpha é incrementado:
     - 1.0.0-alpha.0 → 1.0.0-alpha.1 → 1.0.0-alpha.2

3. **Promovendo para versão estável**
   - Quando uma versão alpha estiver pronta para se tornar estável, execute um dos comandos de release normais
   - Isso removerá o sufixo alpha e lançará a versão estável

## Publicação no NPM

O processo de versionamento está configurado para publicar automaticamente a biblioteca no npm:

1. **Publicação de versões estáveis**

   - Versões regulares são publicadas com a tag "latest" (padrão)
   - Os usuários que instalarem o pacote sem especificar uma tag receberão estas versões
   - Comando: `npm run release` (ou qualquer variante)

2. **Publicação de versões alpha**

   - Versões alpha são publicadas com a tag "next"
   - Para instalar uma versão alpha, os usuários devem usar `npm install fupu-library-test@next`
   - Comando: `npm run release:alpha` (ou qualquer variante)

3. **Testando o processo de publicação**
   - Para verificar o que seria publicado sem realmente publicar, use:
   - `npm run release:dry-run`

## Detalhes Importantes

- Os comandos atualizam tanto o `package.json` da raiz quanto o da biblioteca em `projects/fupu-library-test/`
- O CHANGELOG.md é mantido e atualizado apenas na biblioteca em `projects/fupu-library-test/CHANGELOG.md`
- A biblioteca é publicada a partir do diretório `dist/fupu-library-test` após o build

## Padrão de Commits

Os commits devem seguir o padrão do [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alteração na documentação
- `style`: Alterações de formatação que não afetam o código
- `refactor`: Refatoração de código sem alterar funcionalidade
- `perf`: Melhorias de performance
- `test`: Adição ou correção de testes
- `build`: Alterações no sistema de build ou dependências
- `ci`: Alterações na configuração de CI
- `chore`: Outras alterações que não modificam src ou test

Exemplo: `feat: adiciona funcionalidade de login`
