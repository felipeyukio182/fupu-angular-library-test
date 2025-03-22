# FupuLibraryTest

Esta lib foi gerada com [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

Para informações gerais sobre o workspace, consulte o [README principal](../../README.md).
Para ver o histórico de alterações, consulte o [CHANGELOG](CHANGELOG.md).

## Desenvolvimento

- Para utilização da lib, utilize/customize tokens como `LogConfig`. Estes tokens podem injetar informações/parâmetros importantes baseadas no contexto de cada projeto.
- Para criação de componentes, services, etc, os comandos são os mesmos utilizados no desenvolvimento dentro do contexto dos projetos.
- Obs: antes de utilizar os comandos `ng`, verifique a pasta atual de seu terminal (`cd projects/fupu-library-test`).

## Desenvolvimento com Live Reload

Para rodar o projeto com live reload, é necessário realizar algumas configurações.

### No contexto da LIB:

- rode `ng build fupu-library-test --configuration development --watch` no terminal da lib.
- abra um novo terminal e acesse `cd dist/fupu-library-test` e em seguida rode o seguinte comando `npm link`.

### No contexto do PROJETO angular rodando localmente:

- adicione `"preserveSymlinks": true` e `"cache": { "enabled": false }` no angular.json da seguinte forma:

```
{
  "$schema": "...",
  "version": 999,
  "newProjectRoot": "...",
  "projects": {
    "project1": {
      "projectType": "application",
      "schematics": { ... },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "...",
          "options": {
            "preserveSymlinks": true,
            ...
          }
        }
      }
    }
  },
  "cli": {
    "cache": {
      "enabled": false
    }
  }
}
```

- rode o seguinte comando em seu terminal `npm link fupu-library-test`.
- inicie sua aplicação com `ng serve`.

Dessa forma, para qualquer alteração feita na lib, será refeito o build da lib e depois disparado um evento para o projeto também executar um novo build com as novas informações.

Após realizar os testes, é recomendavel realizar a **limpeza** dessas linkagens.

### No contexto do PROJETO

- `npm unlink fupu-library-test --no-save`
- remova as alterações feitas no `angular.json`

### No contexto da LIB

- `npm rm -g fupu-library-test --no-save`

Feito isso, voce pode checar se as linkagens foram removidas corretamente com `npm list -g`.

## \(DEPRECATED\) \(Recomenda-se utilizar o fluxo descrito em [VERSIONAMENTO](../../VERSIONAMENTO.md)\)

## Versionamento manual

- Lembre-se de trocar o número da versão no `package.json`.

- Adicione uma mensagem de versão no [`CHANGELOG.md`](CHANGELOG.md).

## Pull request e tag de versão manual

- Realize o Pull Request (PR) de sua branch para a branch **master**.

- Após aprovação pelo code review, realize o merge do PR.

- Atualize sua master local com a branch **master**.

- Crie a tag da versão no git (troque o número da versão pela atual).

```
git tag -a 1.0.0 -m "Mensagem da tag de versão"
```

- Envie a tag de versão (troque o número da versão pela atual).

```
git push origin 1.0.0
```

## Build manual

- Rode `ng build fupu-library-test` para buildar o projeto. Os arquivos buildados estarão na pasta `dist/`.

## Release manual

- Depois de buildar o projeto, vá para `cd dist/fupu-library-test` e rode `npm publish --userconfig ../../.npmrc` (caso utilize o arquivo .npmrc) para publicar o projeto no npm.
- Obs: quando for gerar uma nova versão da lib, lembre-se de `atualizar a versão no package.json dentro da lib`. Caso não tenha feito isso, atualize o package.json, rode o build novamente e somente depois realize a publicação da lib.
