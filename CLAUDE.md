# CLAUDE.md — Portfólio de QA (José Roberto Benaglia Filho)

Guia para o Claude Code trabalhar neste repositório. Leia antes de editar.

## O que é este repo
Portfólio **pessoal** de QA — demonstra competência em Quality Assurance para carreira/LinkedIn. **Não** é código de produção de empresa.

## Princípio inegociável: privacidade
- **Nunca** incluir dados, nomes, prints, código ou detalhes de clientes/empregadores. Os exemplos usam **apps públicos de demonstração** (ex.: [Sauce Demo](https://www.saucedemo.com)).
- Experiência real de trabalho só entra de forma **genérica/anônima** (sem citar empresa, cliente, tenant, card interno).
- **Não inventar credenciais** (certificações, formação, números). Se não tiver a informação, perguntar ao José ou deixar marcado para ele preencher.

## Estrutura
```
README.md                     # capa: sobre, stack, projetos, formação, contato
manual/                       # plano de teste, casos de teste, bug reports
automacao-ui-playwright/      # suíte E2E (Playwright + Page Object Model)
api/                          # testes de API
docs/                         # metodologia (qa-de-ia-llm.md) e exemplo de post
```

## Padrões a manter
- **Cada projeto** segue: **problema → abordagem → ferramentas → resultados → link**.
- **Casos de teste** em tabela Markdown (ID `CT-xx`, pré-condição, passos, dados, esperado, tipo).
- **Bug reports** no template de `manual/bug-reports/` (ID, severidade, ambiente, passos, esperado × obtido, evidência).
- **Automação**: Page Object Model em `pages/`, specs em `tests/`, dados em `test-data/`. Specs referenciam o caso manual (`CT-xx`) e o bug (`BUG-xxx`) correspondentes.
- Idioma: **pt-BR**. Tom profissional, direto, sem exagero.

## Como rodar a automação
```bash
cd automacao-ui-playwright
npm install
npx playwright install
npm test          # headless
npm run test:headed
npm run report
```

## Diferencial a preservar
A seção de **QA de IA/LLM** (`docs/qa-de-ia-llm.md`) é o diferencial do portfólio — avaliar a conversa do agente (aderência ao roteiro, drift, guardrails), não só a tela. Mantê-la rica e atual.

## Ao adicionar conteúdo novo
- Novo tipo de teste (performance, segurança) → nova pasta + entrada no README no mesmo padrão.
- Manter o README como índice (links funcionando) e a nota de privacidade no rodapé.
