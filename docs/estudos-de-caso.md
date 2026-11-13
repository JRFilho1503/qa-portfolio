# 📎 Estudos de Caso

Desafios reais de QA que enfrentei, descritos de forma genérica (sem dados de empresa, cliente ou projeto). Cada um segue: **contexto → desafio → abordagem → resultado/aprendizado**.

---

## 1. QA de um agente de triagem com IA/LLM

**Contexto** — Um produto SaaS onde um agente de IA conduz uma triagem conversacional com o candidato (chat/voz) e ajuda a avaliar o perfil.

**Desafio** — A saída de um LLM é não-determinística: não dá pra assertar "a resposta é exatamente X". E o risco mais caro não é visual — é o agente **usar um atributo protegido** (ex.: um dado sensível mencionado na conversa) para influenciar a decisão.

**Abordagem** — Em vez de testar só a tela, avaliei a **conversa e a decisão** por propriedades que devem valer sempre: aderência ao roteiro, retenção de contexto, drift ao longo do diálogo, robustez a entradas fora do script e, principalmente, **guardrails** — montei casos onde um atributo protegido aparece na resposta do candidato e verifiquei que ele **não** altera a nota nem vaza para a saída.

**Resultado / aprendizado** — Encontrei um caminho onde um atributo protegido **vazava para o gate de decisão** e mudava a classificação — algo invisível nos cards-resumo que o usuário lê, mas real e reproduzível via API. Aprendizado: num produto com IA, **o guardrail é um critério bloqueante**, e é preciso testar a decisão do modelo, não só a interface.

---

## 2. Bug intermitente: race condition de tenant sob connection pooler

**Contexto** — Aplicação multi-tenant atrás de um pooler de conexões de banco. Configurações de um cliente "sumiam" de forma intermitente, sem padrão claro.

**Desafio** — Bug que não reproduzia de forma confiável — o tipo de flakiness que é fácil fechar como "não reproduzo" e devolver pro suporte.

**Abordagem** — Em vez de parar no sintoma, **tracei o caminho no código**: a identidade do tenant era resolvida por conexão, e sob o pooler uma conexão reaproveitada podia carregar o tenant de outra requisição. Reproduzi forçando a condição de concorrência.

**Resultado / aprendizado** — Causa-raiz confirmada (race de tenant na conexão reusada) e um teste que a captura. Aprendizado: bug intermitente quase nunca é "não existe" — é **uma condição que você ainda não isolou**; vale traçar o código antes de cravar.

---

## 3. Verificação pós-deploy de um release train

**Contexto** — Esteira de release que agrupa dezenas de cards numa única janela (GMUD), com fixes vindo de várias branches.

**Desafio** — Confirmar **o que de fato foi para produção**. O `git merge-base` dá **falso-negativo** quando um fix entra por cherry-pick individual (o conteúdo está lá, mas com SHA novo, sem ancestralidade linear) — então "o commit não está em prod" podia estar errado.

**Abordagem** — Cruzei a lista oficial da GMUD com o **conteúdo real da árvore** no SHA de produção (não a ancestralidade do commit), e com os logs/observabilidade. Separei o que foi para prod **com impedimento ainda aberto**, distinguindo **bug real** (ex.: uma feature nova de exportação que trava no primeiro uso) de **higiene de processo** (flag não limpa, mas funcional).

**Resultado / aprendizado** — Identifiquei os poucos bugs reais que foram para produção e os escalei como hotfix, separando-os do ruído. Aprendizado: **confirme deploy por conteúdo, não por merge-base**, e saiba distinguir risco funcional de pendência de processo — senão todo card "fechado com flag" vira falso alarme.
