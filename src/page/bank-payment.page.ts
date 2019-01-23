import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmationButton: ElementFinder;
  constructor () {
    this.confirmationButton = $('#cart_navigation span');
  }

  public async goToConfirmationButton(): Promise<void> {
    await this.confirmationButton.click();
  }
}
