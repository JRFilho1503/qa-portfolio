import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { USERS, PASSWORD } from '../test-data/users';

/**
 * Suíte de login do Sauce Demo.
 * Os IDs (CT-xx) referenciam os casos em ../../manual/casos-de-teste/login-saucedemo.md
 */
test.describe('Login — Sauce Demo', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('CT-01: login com credenciais válidas abre o catálogo', async ({ page }) => {
    await login.login(USERS.standard.username, PASSWORD);
    await new InventoryPage(page).expectLoaded();
  });

  test('CT-02: senha incorreta mostra mensagem de erro', async () => {
    await login.login(USERS.standard.username, 'senha_errada');
    await login.expectError('Username and password do not match');
  });

  test('CT-04: campos vazios exigem o usuário', async () => {
    await login.login('', '');
    await login.expectError('Username is required');
  });

  test('CT-06: usuário bloqueado é barrado', async () => {
    await login.login(USERS.locked.username, PASSWORD);
    await login.expectError('this user has been locked out');
  });

  /**
   * Regra de regressão que captura o BUG-001.
   * Documentado em ../../manual/bug-reports/BUG-001-imagens-trocadas.md
   * Com `problem_user`, todas as imagens do catálogo são iguais → o teste falha de propósito,
   * demonstrando como a automação pegaria essa regressão visual.
   */
  test('BUG-001: imagens do catálogo devem ser distintas (problem_user)', async ({ page }) => {
    await login.login(USERS.problem.username, PASSWORD);
    const inventory = new InventoryPage(page);
    await inventory.expectLoaded();

    const distinct = await inventory.distinctImageCount();
    expect(distinct, 'cada produto deve ter uma imagem própria').toBeGreaterThan(1);
  });
});
