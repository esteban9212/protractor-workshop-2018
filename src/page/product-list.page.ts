import { ElementFinder, ElementArrayFinder, $$, browser } from 'protractor';

export class ProductListPage{

  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  public findProductByName(productName): ElementFinder  {
    return this.products.filter((element: ElementFinder) => element
          .$('.product-name').getText().then(text => text.includes(productName))
      ).first();
  }
  public async selectProduct(productName): Promise<void> {
    const product = this.findProductByName(productName);
    await browser.actions().mouseMove(product.$('.product-image-container')).perform();
    await product.$('.ajax_add_to_cart_button').click();
  }

}
