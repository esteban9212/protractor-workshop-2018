import { $, ElementFinder, browser, ExpectedConditions  } from 'protractor';
export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;
  constructor () {
    this.proceedToCheckoutButton = $('.button-container > a[title="Proceed to checkout"]');
  }
  public async goToCheckoutButton(): Promise <void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 5000);
    await this.proceedToCheckoutButton.click();
  }
}
