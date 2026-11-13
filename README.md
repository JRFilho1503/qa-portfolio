<h1 align="center">🧪 Portfólio de QA — José Roberto Benaglia Filho</h1>

<p align="center">
  <strong>QA Engineer</strong> · Automação E2E · Testes de API · QA de produtos com IA/LLM<br>
  <em>Garantia de qualidade do requisito ao deploy — estratégia, automação e evidência.</em>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/nuchobenaglia/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="mailto:nuchobenaglia@gmail.com"><img src="https://img.shields.io/badge/E--mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail"></a>
  <a href="https://github.com/JRFilho1503"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
</p>

---

## 👋 Sobre

Sou QA com foco em **qualidade de ponta a ponta**: leio o requisito, mapeio o risco, desenho os cenários — inclusive bordas e estados de falha, não só o caminho feliz — automatizo o que se repete e mantenho manual o que pede julgamento. Valido pela interface **e** cruzo com a API/estado, e registro evidência clara em cada achado.

Atuo com QA de **produtos SaaS com IA generativa** dentro de uma **esteira de release madura** (trem de release, hotfix, validação em staging antes de produção). Daí vem um diferencial menos comum no mercado: **QA de agentes conversacionais / LLM** — avaliar a *conversa* e a *decisão* do modelo (aderência ao roteiro, drift, guardrails de compliance), e não só a tela.

> Para mim, QA não é só "achar bug" — é **dar confiança para o time entregar**.

---

## 🛠️ Stack

**Automação & E2E**
<p>
  <img src="https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white&style=flat-square" alt="Playwright">
  <img src="https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=white&style=flat-square" alt="Cypress">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat-square" alt="Python">
</p>

**API & Performance**
<p>
  <img src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white&style=flat-square" alt="Postman">
  <img src="https://img.shields.io/badge/REST_Assured-43B02A?logoColor=white&style=flat-square" alt="REST Assured">
  <img src="https://img.shields.io/badge/k6-7D64FF?logo=k6&logoColor=white&style=flat-square" alt="k6">
  <img src="https://img.shields.io/badge/JMeter-D22128?logo=apache&logoColor=white&style=flat-square" alt="JMeter">
</p>

**Processo & Ferramentas**
<p>
  <img src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=white&style=flat-square" alt="Jira">
  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=flat-square" alt="Git">
  <img src="https://img.shields.io/badge/CI%2FCD-2088FF?logo=githubactions&logoColor=white&style=flat-square" alt="CI/CD">
  <img src="https://img.shields.io/badge/QA_de_IA%2FLLM-8A2BE2?style=flat-square" alt="QA de IA/LLM">
</p>

---

## 📂 Projetos

Cada projeto segue o mesmo padrão: **problema → abordagem → ferramentas → resultados → link**.

### 🖐️ Teste Manual — Sauce Demo
Plano de teste, **7 casos de login** (positivos, negativos e borda) e um **bug report** documentado com evidência e passos de reprodução.
<br>📁 [`manual/`](./manual) · [Plano](./manual/plano-de-teste-saucedemo.md) · [Casos de teste](./manual/casos-de-teste/login-saucedemo.md) · [Bug report](./manual/bug-reports/BUG-001-imagens-trocadas.md)

### 🤖 Automação E2E — Playwright
Suíte **executável** em TypeScript com **Page Object Model**, dados parametrizados e relatório HTML. Inclui um teste que **captura um bug visual real** — amarrando o teste manual à automação.
<br>📁 [`automacao-ui-playwright/`](./automacao-ui-playwright)

### 🔌 Testes de API
Validação de **contrato, status codes e CRUD** de uma API REST pública, com asserções de schema e corpo.
<br>📁 [`api/`](./api)

### ⚡ Performance *(roadmap)*
Script k6 de carga/stress contra uma API pública, com relatório de métricas.

---

## 🤖 Diferencial — QA de aplicações com IA/LLM

Testar um produto com IA generativa exige avaliar a **conversa do agente**, não só a interface. A saída é não-determinística, então o teste foca em **propriedades que devem valer sempre**:

| Dimensão | O que verifico |
|---|---|
| **Aderência ao roteiro** | o agente segue o fluxo definido |
| **Retenção de contexto** | lembra do que foi dito antes |
| **Drift** | não foge do escopo ao longo da conversa |
| **Robustez** | aguenta erro de digitação, ambiguidade, entrada fora do script |
| **Guardrails** | respeita compliance, dado sensível e viés (violação = bloqueante) |

📄 Metodologia completa em [`docs/qa-de-ia-llm.md`](./docs/qa-de-ia-llm.md)

---

## 🎓 Formação & Certificações

**Formação**
- 🎓 **Bacharelado em Sistemas de Informação** — UNINOVE (2020 – 2022)
- 💻 **Técnico em Informática** — Colégio Eniac (2015 – 2018)

**Certificações — Qualidade & Ágil**
- **Scrum Foundation** — Certiprof (2021)
- **Scrum Fundamentals Certified (SFC)** — Udemy (2021)
- **Lean Six Sigma** — Udemy (2022)
- **Gestão Ágil com Scrum** (completo) — Udemy (2022)
- **BPMN 2.0** — modelagem de processos de negócio

**Cursos — Desenvolvimento & Dados**
- **Django Master** (Django REST Framework) — Kiwify (2023)
- **Git e GitHub** — Curso em Vídeo (2023)
- **Python** (Mundo 1, 2 e 3) — Curso em Vídeo (2022 – 2023)
- POO em Java · Linguagem C · MySQL · Algoritmos
- **Power BI para Data Science** — Data Science Academy (2022)

---

## ✍️ Artigos & Estudos de Caso

- *[Artigo no LinkedIn / Medium — a adicionar]*
- *[Estudo de caso: um bug difícil que investiguei e resolvi — a adicionar]*

---

## 📫 Contato

<p>
  <a href="https://www.linkedin.com/in/nuchobenaglia/">linkedin.com/in/nuchobenaglia</a> ·
  <a href="https://github.com/JRFilho1503">github.com/JRFilho1503</a> ·
  <a href="mailto:nuchobenaglia@gmail.com">nuchobenaglia@gmail.com</a>
</p>

<sub>Portfólio pessoal. Os exemplos usam aplicações públicas de demonstração (ex.: <a href="https://www.saucedemo.com">Sauce Demo</a>) — nenhum dado ou código de clientes/empregadores.</sub>
