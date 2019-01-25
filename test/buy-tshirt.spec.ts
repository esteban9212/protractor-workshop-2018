import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
 PaymentStepPage,  BankPaymentPage, OrderSummaryPage} from '../src/page';

describe('Given a clothes web page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('when you want to buy T-Shirts', () => {
    beforeAll(async () =>  {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productAddedModalPage.goToCheckoutButton();
      await summaryStepPage.goToCheckoutButton();
    });

    describe('And you are logged in', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();

        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('and you set shipping values', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addressStepPage.goToCheckoutButton();
          await shippingStepPage.checkAgreement();
          await shippingStepPage.goToCheckoutButton();
        });

        describe('and you set payment values', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.goToPayByBankButton();
            await bankPaymentPage.goToConfirmationButton();
          });

          it('Should bougth a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getConfirmationLabelText())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
