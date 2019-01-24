import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkoutButton: ElementFinder;
  constructor() {
    this.checkoutButton = $('.cart_navigation a.standard-checkout');
  }
  public async goToCheckoutButton(): Promise <void> {
    await this.checkoutButton.click();
  }
}
