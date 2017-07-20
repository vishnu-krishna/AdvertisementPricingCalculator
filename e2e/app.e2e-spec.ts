
import { SeekPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('seek App', function () {
  let page: SeekPage;

  beforeEach(() => {
    page = new SeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Seek advertisement pricing calculator');
  });

  it("should add new customer and advertisement", () => {
    browser.get("/");
    let customer = element(
      by.css("#customer"));
    customer.sendKeys("Nike");
    let advertisement = element(
      by.css("#advertisement"));
    advertisement.sendKeys("Classic");

    let addPayment = element(
      by.css(".btnadd"));
    addPayment.click();
    let customername = element.all(by.css(".customer"));
    expect(customername.count()).toEqual(1);
    let advertisementname = element.all(by.css(".advertisement"));
    expect(advertisementname.count()).toEqual(1);
  });

  it("should display the prices when show price as $269.99 button is clicked for nike classic customer", () => {
    browser.get("/");
    let customer = element(by.css("#customer"));
    customer.sendKeys("Nike");
    let advertisement = element(by.css("#advertisement"));
    advertisement.sendKeys("Classic");
    let addPayment = element(by.css(".btnadd"));

    let showPrices = element(
      by.css(".btnshow"));
    let nikeCustomer = element.all(by.css("#nikePricing"));

    addPayment.click().then(function () {
      showPrices.click();
      let text = nikeCustomer.getText();
      expect(text).toEqual(['Nike: $269.99']);
    });
  });

  it("should show $1,519.96 for 4 Nike premium customers ", () => {
    browser.get("/");
    //Add first advertisement
    let customer = element(by.css("#customer"));
    customer.sendKeys("Nike");
    let advertisement = element(by.css("#advertisement"));
    advertisement.sendKeys("Premium");
    let addPayment = element(by.css(".btnadd"));
    addPayment.click();
    //Add second advertisement
    customer.sendKeys("Nike");

    advertisement.sendKeys("Premium");

    addPayment.click();
    //Add third advertisement
    customer.sendKeys("Nike");

    advertisement.sendKeys("Premium");

    addPayment.click();
    //Add fourth advertisement
    customer.sendKeys("Nike");

    advertisement.sendKeys("Premium");

    addPayment.click();

    let showPrices = element(
      by.css(".btnshow"));
    let nikeCustomer = element.all(by.css("#nikePricing"));

    addPayment.click().then(function () {
      showPrices.click();
      let text = nikeCustomer.getText();
      expect(text).toEqual(['Nike: $1,519.96']);
    });
  });

  it("should show $1,294.96 for 3 Apple standout and 1 Apple Premium customer ", () => {
    browser.get("/");
    //Add first advertisement
    let customer = element(by.css("#customer"));
    customer.sendKeys("Apple");
    let advertisement = element(by.css("#advertisement"));
    advertisement.sendKeys("Standout");
    let addPayment = element(by.css(".btnadd"));
    addPayment.click();
    //Add second advertisement
    customer.sendKeys("Apple");

    advertisement.sendKeys("Standout");

    addPayment.click();
    //Add third advertisement
    customer.sendKeys("Apple");

    advertisement.sendKeys("Standout");

    addPayment.click();
    //Add fourth advertisement
    customer.sendKeys("Apple");

    advertisement.sendKeys("Premium");

    addPayment.click();

    let showPrices = element(
      by.css(".btnshow"));
    let appleCustomer = element.all(by.css("#applePricing"));

    addPayment.click().then(function () {
      showPrices.click();
      let text = appleCustomer.getText();
      expect(text).toEqual(['Apple: $1,294.96']);
    });
  });


  it("should show $934.97 for 3 Unilever classic and 1 Unilever Premium customer ", () => {
    browser.get("/");
    //Add first advertisement
    let customer = element(by.css("#customer"));
    customer.sendKeys("Unilever");
    let advertisement = element(by.css("#advertisement"));
    advertisement.sendKeys("Classic");
    let addPayment = element(by.css(".btnadd"));
    addPayment.click();
    //Add second advertisement
    customer.sendKeys("Unilever");

    advertisement.sendKeys("Classic");

    addPayment.click();
    //Add third advertisement
    customer.sendKeys("Unilever");

    advertisement.sendKeys("Classic");

    addPayment.click();
    //Add fourth advertisement
    customer.sendKeys("Unilever");

    advertisement.sendKeys("Premium");

    addPayment.click();

    let showPrices = element(
      by.css(".btnshow"));
    let unileverCustomer = element.all(by.css("#unileverPricing"));

    addPayment.click().then(function () {
      showPrices.click();
      let text = unileverCustomer.getText();
      expect(text).toEqual(['Unilever: $934.97']);
    });
  });


});
