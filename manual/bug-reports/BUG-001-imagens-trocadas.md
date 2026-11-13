# BUG-001 — Imagens dos produtos aparecem todas iguais (usuário `problem_user`)

| Campo | Valor |
|---|---|
| **ID** | BUG-001 |
| **Título** | Catálogo exibe a mesma imagem em todos os produtos para o `problem_user` |
| **Severidade** | Média (afeta a visualização do produto, mas não bloqueia a compra) |
| **Prioridade** | Média |
| **Ambiente** | https://www.saucedemo.com · navegador Chrome 1xx · desktop |
| **Funcionalidade** | Catálogo de produtos (Inventory) |
| **Status** | Aberto |
| **Reportado por** | [Seu Nome] |

## Descrição
Ao logar com o usuário `problem_user`, a página de produtos (`/inventory.html`) carrega **a mesma imagem para todos os itens**, em vez da foto correspondente a cada produto. Os nomes, preços e botões estão corretos — apenas a imagem está errada.

## Passos para reproduzir
1. Acessar https://www.saucedemo.com
2. Logar com `problem_user` / `secret_sauce`
3. Observar a lista de produtos no catálogo

## Resultado esperado
Cada produto exibe **a sua própria imagem** (ex.: "Sauce Labs Backpack" mostra a mochila).

## Resultado obtido
Todos os produtos exibem **a mesma imagem** (um cachorro — imagem de placeholder/errada), independente do item.

## Evidência
- `assets/bug-001-imagens-trocadas.png` *(anexar print do catálogo)*
- Elemento: as `<img class="inventory_item_img">` apontam todas para o mesmo `src`.

## Notas
- **Não** reproduz com `standard_user` — específico do `problem_user`, usuário que a aplicação disponibiliza justamente para caça a defeitos.
- Bug conhecido de UI; bom exemplo de **validação visual** e de teste orientado a dados do usuário.
- Sugestão de automação: asserção de que os `src` das imagens são **distintos** entre os produtos (regra que pegaria essa regressão).
