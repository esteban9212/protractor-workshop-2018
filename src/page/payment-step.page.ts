import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankButton: ElementFinder;
  constructor () {
    this.payByBankButton = $('a.bankwire');
  }

  public async goToPayByBankButton(): Promise<void> {
    await this.payByBankButton.click();
  }
}
