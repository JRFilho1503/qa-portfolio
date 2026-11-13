import { type Page, type Locator, expect } from '@playwright/test';

/** Page Object do catálogo de produtos (inventory) do Sauce Demo. */
export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly items: Locator;
  readonly itemImages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.items = page.locator('.inventory_item');
    this.itemImages = page.locator('.inventory_item_img img');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  /** Quantidade de imagens DISTINTAS no catálogo (usado para pegar o BUG-001). */
  async distinctImageCount(): Promise<number> {
    const srcs = await this.itemImages.evaluateAll((imgs) =>
      imgs.map((i) => (i as HTMLImageElement).src),
    );
    return new Set(srcs).size;
  }
}
