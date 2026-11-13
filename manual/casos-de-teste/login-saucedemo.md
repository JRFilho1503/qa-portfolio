# Casos de Teste — Login (Sauce Demo)

> Funcionalidade: **Autenticação** · App: https://www.saucedemo.com · Senha padrão: `secret_sauce`
> Legenda de tipo: ✅ positivo · ⛔ negativo · 🔲 borda

| ID | Título | Pré-condição | Passos | Dados | Resultado esperado | Tipo |
|---|---|---|---|---|---|---|
| CT-01 | Login com credenciais válidas | Estar na tela de login | 1. Informar usuário<br>2. Informar senha<br>3. Clicar em **Login** | `standard_user` / `secret_sauce` | Redireciona para `/inventory.html` e lista os produtos | ✅ |
| CT-02 | Login com senha incorreta | Estar na tela de login | 1. Usuário válido<br>2. Senha errada<br>3. Login | `standard_user` / `errada` | Mensagem: *"Username and password do not match any user in this service"* | ⛔ |
| CT-03 | Login com usuário inexistente | Estar na tela de login | 1. Usuário inexistente<br>2. Senha qualquer<br>3. Login | `fulano` / `secret_sauce` | Mensagem de usuário/senha não conferem; permanece no login | ⛔ |
| CT-04 | Login com campos vazios | Estar na tela de login | 1. Deixar os dois campos vazios<br>2. Login | — | Mensagem: *"Username is required"* | 🔲 |
| CT-05 | Login só com usuário (sem senha) | Estar na tela de login | 1. Preencher usuário<br>2. Senha vazia<br>3. Login | `standard_user` / `` | Mensagem: *"Password is required"* | 🔲 |
| CT-06 | Usuário bloqueado | Estar na tela de login | 1. Usuário bloqueado<br>2. Senha válida<br>3. Login | `locked_out_user` / `secret_sauce` | Mensagem: *"Sorry, this user has been locked out"* | ⛔ |
| CT-07 | Logout após login | Logado com `standard_user` | 1. Abrir menu<br>2. Clicar em **Logout** | — | Volta para a tela de login; não dá pra voltar com o back do navegador | ✅ |

## Observações de exploratório
- A mensagem de erro fica num banner com botão de fechar (`x`) — vale checar que fechar o banner não afeta a próxima tentativa.
- Após logout, usar o botão **voltar** do navegador **não** deve reautenticar (teste de sessão).
- `performance_glitch_user` loga, mas com lentidão proposital — útil para teste de tolerância a latência.
