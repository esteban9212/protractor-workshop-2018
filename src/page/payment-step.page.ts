import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankButton: ElementFinder;
  constructor () {
    this.payByBankButton = $('.bankwire');
  }

  public async goToPayByBankButton(): Promise<void> {
    await this.payByBankButton.click();
  }
}
