import { $, ElementFinder, browser, ExpectedConditions  } from 'protractor';
export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;
  constructor () {
    this.proceedToCheckoutButton = $('#layer_cart .button-container a');
  }
  public async goToCheckoutButton(): Promise <void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 5000);
    await this.proceedToCheckoutButton.click();
  }
}
