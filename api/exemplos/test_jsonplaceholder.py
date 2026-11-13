"""Testes de API REST contra a JSONPlaceholder (API pública de teste).
Rodar: pip install -r requirements.txt && pytest -v
"""
import requests

BASE = "https://jsonplaceholder.typicode.com"
TIMEOUT = 10


def test_listar_posts_retorna_100():
    r = requests.get(f"{BASE}/posts", timeout=TIMEOUT)
    assert r.status_code == 200
    assert len(r.json()) == 100


def test_post_existente_tem_o_contrato():
    r = requests.get(f"{BASE}/posts/1", timeout=TIMEOUT)
    assert r.status_code == 200
    body = r.json()
    assert body["id"] == 1
    assert {"userId", "id", "title", "body"} <= body.keys()


def test_post_inexistente_retorna_404():
    r = requests.get(f"{BASE}/posts/9999", timeout=TIMEOUT)
    assert r.status_code == 404


def test_criar_post_retorna_201():
    payload = {"title": "QA", "body": "teste de API", "userId": 1}
    r = requests.post(f"{BASE}/posts", json=payload, timeout=TIMEOUT)
    assert r.status_code == 201
    assert r.json()["title"] == payload["title"]


def test_atualizar_post_retorna_200():
    r = requests.put(f"{BASE}/posts/1", json={"id": 1, "title": "editado"}, timeout=TIMEOUT)
    assert r.status_code == 200
    assert r.json()["title"] == "editado"


def test_comentarios_do_post_pertencem_ao_post():
    r = requests.get(f"{BASE}/posts/1/comments", timeout=TIMEOUT)
    assert r.status_code == 200
    assert all(c["postId"] == 1 for c in r.json())
