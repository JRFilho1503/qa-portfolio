# 🤖 Automação UI / E2E — Playwright

Suíte de testes end-to-end contra o [Sauce Demo](https://www.saucedemo.com), organizada com **Page Object Model**.

## Projeto (padrão problema → abordagem → ferramentas → resultados → link)

- **Problema:** o fluxo de login/catálogo precisa ser revalidado a cada mudança — fazer isso à mão é lento e sujeito a erro.
- **Abordagem:** automação E2E com **Page Object Model** (telas isoladas em `pages/`), dados de teste centralizados (`test-data/`) e asserções de UI. Inclui uma **regra de regressão que captura um bug real** (BUG-001).
- **Ferramentas:** Playwright + TypeScript.
- **Resultados:** caminho feliz + casos negativos + borda automatizados; relatório HTML; pronto para CI.
- **Rastreabilidade:** cada teste referencia o caso manual correspondente ([`CT-xx`](../manual/casos-de-teste/login-saucedemo.md)) e o [BUG-001](../manual/bug-reports/BUG-001-imagens-trocadas.md).

## Estrutura

```
automacao-ui-playwright/
├── pages/            # Page Objects (LoginPage, InventoryPage)
├── tests/            # Specs (login.spec.ts)
├── test-data/        # Usuários e dados de teste
├── playwright.config.ts
└── package.json
```

## Como rodar

```bash
cd automacao-ui-playwright
npm install
npx playwright install   # baixa os navegadores
npm test                 # roda a suíte (headless)
npm run test:headed      # roda vendo o navegador
npm run report           # abre o último relatório HTML
```

## O que a suíte cobre

| Teste | Caso | O que valida |
|---|---|---|
| `CT-01` | login válido | redireciona para o catálogo |
| `CT-02` | senha incorreta | mensagem de erro correta |
| `CT-04` | campos vazios | exige o usuário |
| `CT-06` | usuário bloqueado | barra o acesso |
| `BUG-001` | imagens do catálogo | prova a regra que pega o bug visual do `problem_user` |

> 💡 O teste `BUG-001` **falha de propósito** com o `problem_user` — é a demonstração de como a automação captura uma regressão visual já documentada no bug report.
