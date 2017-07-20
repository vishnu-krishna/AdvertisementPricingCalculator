import { AppSettings } from './service/constants';
import { Advertisement } from './models/advertisement';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Customer } from './models/customer';
import { CustomerAdvertisementList } from './models/customeradvertisement';
import { PricingCalculationService } from './service/pricingcalculation';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("adform") form;
  constructor(private pricingCalculationService: PricingCalculationService) {

  }
  title: string = 'Seek advertisement pricing calculator';
  // Initializing the values
  customerAdvertisementList: Array<CustomerAdvertisementList> = [];
  unileverPricing: number;
  fordPricing: number;
  nikePricing: number;
  applePricing: number;
  public uniLeverCustomerList: Array<CustomerAdvertisementList> = [];
  public fordCustomerList: Array<CustomerAdvertisementList> = [];
  public appleCustomerList: Array<CustomerAdvertisementList> = [];
  public nikeCustomerList: Array<CustomerAdvertisementList> = [];

  customerList: Array<Customer> = [
    new Customer(AppSettings.customerNike),
    new Customer(AppSettings.customerApple),
    new Customer(AppSettings.customerFord),
    new Customer(AppSettings.customerUnilever)
  ];
  adList: Array<Advertisement> = [
    new Advertisement(AppSettings.classic),
    new Advertisement(AppSettings.standout),
    new Advertisement(AppSettings.premium),
  ]
  // End of Initializing the values

  // Adding the payment 
  addPayment(model) {
    this.customerAdvertisementList.push(model.value);
    this.form.reset();
  }
  // End of adding the payment 
  //Showing the prices
  showCheckoutAmount() {
    this.customerAdvertisementList.forEach((item, index) => {
      if (item.customer == AppSettings.customerUnilever) {
        this.uniLeverCustomerList.push(item);
      }
      else if (item.customer == AppSettings.customerNike) {
        this.nikeCustomerList.push(item);
      }
      else if (item.customer == AppSettings.customerApple) {
        this.appleCustomerList.push(item);
      }
      else if (item.customer == AppSettings.customerFord) {
        this.fordCustomerList.push(item);
      }
    });

    //Calculate the prices
    this.showUnileverPricing();
    this.showApplePricing();
    this.showNikePricing();
    this.showFordPricing();
    //reset the list of payments made.
    this.customerAdvertisementList = [];
  }
  //End of showing the prices
  // Call Unilever customer pricing
  showUnileverPricing() {
    this.unileverPricing = this.pricingCalculationService.calculateUnileverPricing(this.uniLeverCustomerList);
  }
  // Call Apple customer pricing
  showApplePricing() {
    this.applePricing = this.pricingCalculationService.calculateApplePricing(this.appleCustomerList);
  }
  // Call Nike customer pricing
  showNikePricing() {
    this.nikePricing = this.pricingCalculationService.calculateNikePricing(this.nikeCustomerList);
  }
  // Call Ford customer pricing
  showFordPricing() {
    this.fordPricing = this.pricingCalculationService.calculateFordPricing(this.fordCustomerList);
  }

}
