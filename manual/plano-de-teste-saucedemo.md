# Plano de Teste — Sauce Demo (fluxo de Login e Compra)

> App sob teste: **https://www.saucedemo.com** (ambiente público de demonstração)
> Autor: José Roberto Benaglia Filho · Última atualização: 13/11/2026

## 1. Objetivo
Garantir que o fluxo crítico de **autenticação** e **compra** da loja funciona conforme o esperado, cobrindo caminho feliz, entradas inválidas e estados de borda.

## 2. Escopo
**Dentro do escopo**
- Login (credenciais válidas, inválidas, usuário bloqueado, campos vazios)
- Catálogo de produtos e ordenação
- Carrinho (adicionar/remover)
- Checkout (dados do comprador, resumo, finalização)

**Fora do escopo**
- Meios de pagamento reais (a loja é mock)
- Testes de carga/performance (ver roadmap do portfólio)

## 3. Estratégia de teste
- **Teste manual exploratório** para descobrir comportamentos inesperados.
- **Casos de teste documentados** para os fluxos conhecidos (ver [`casos-de-teste/`](./casos-de-teste/)).
- **Automação E2E** dos fluxos estáveis e repetitivos (ver [`../automacao-ui-playwright/`](../automacao-ui-playwright)).
- **Bug reporting** com passos de reprodução e evidência para cada defeito.

## 4. Usuários de teste (fornecidos pela app)
| Usuário | Uso no teste |
|---|---|
| `standard_user` | caminho feliz |
| `locked_out_user` | validar bloqueio de acesso |
| `problem_user` | caça a bugs visuais/funcionais |
| `performance_glitch_user` | lentidão proposital |
| senha | `secret_sauce` |

## 5. Critérios de entrada e saída
- **Entrada:** ambiente acessível, usuários de teste válidos, casos escritos.
- **Saída:** 100% dos casos executados; nenhum bug de severidade Alta/Crítica em aberto no fluxo crítico; bugs restantes documentados e priorizados.

## 6. Riscos
| Risco | Mitigação |
|---|---|
| App de demo pode mudar sem aviso | Reexecutar a suíte a cada rodada; automação pega regressão |
| Dados resetam entre sessões | Não depender de estado persistente entre testes |

## 7. Evidências
Resultados, prints e logs ficam junto de cada caso/bug. Defeitos encontrados: ver [`bug-reports/`](./bug-reports/).
