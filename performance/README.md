# ⚡ Testes de Performance (k6)

Teste de carga/smoke contra uma API pública, com **thresholds** de qualidade (taxa de erro e latência p95).

## Projeto
- **Problema:** garantir que o endpoint responde dentro de um SLA sob carga concorrente.
- **Abordagem:** 5 usuários virtuais por 30s, com thresholds que **falham o teste** se o erro passar de 1% ou o p95 passar de 800ms.
- **Ferramenta:** k6.
- **Como rodar:** `k6 run k6-smoke.js`
