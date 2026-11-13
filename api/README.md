# 🔌 Testes de API

Testes de uma API REST pública, validando **contrato, status codes e CRUD**.

## Projeto (problema → abordagem → ferramentas → resultados → link)

- **Problema:** garantir que os endpoints respondem com o status, o schema e o corpo corretos — inclusive em casos de erro.
- **Abordagem:** coleção de requisições cobrindo CRUD (GET/POST/PUT/DELETE), com asserções de status code, campos obrigatórios e tipos.
- **Ferramentas:** Postman (coleção + Newman para CI) e/ou `requests` (Python).
- **API de exemplo sugerida:** [reqres.in](https://reqres.in) ou [JSONPlaceholder](https://jsonplaceholder.typicode.com) (APIs públicas de teste).

## O que cobrir

| Cenário | Método | Esperado |
|---|---|---|
| Listar recursos | `GET /users` | `200` + lista não vazia + schema de cada item |
| Buscar recurso existente | `GET /users/2` | `200` + objeto com os campos esperados |
| Buscar inexistente | `GET /users/23` | `404` |
| Criar recurso | `POST /users` | `201` + id retornado |
| Atualizar | `PUT /users/2` | `200` + corpo atualizado |
| Remover | `DELETE /users/2` | `204` |

## Exemplo rápido (Python)

```python
import requests

BASE = "https://reqres.in/api"

def test_listar_usuarios():
    r = requests.get(f"{BASE}/users?page=2")
    assert r.status_code == 200
    body = r.json()
    assert len(body["data"]) > 0
    assert {"id", "email", "first_name"} <= body["data"][0].keys()

def test_usuario_inexistente_retorna_404():
    r = requests.get(f"{BASE}/users/23")
    assert r.status_code == 404
```

> Em construção: subir a coleção do Postman (`.json`) e/ou a suíte `pytest` completa em [`exemplos/`](./exemplos).
