import { CustomerAdvertisementList } from './../models/Customeradvertisement';
import { Customer } from './../models/customer';
import { AppSettings } from './constants';
import { Injectable } from '@angular/core';

@Injectable()
export class PricingCalculationService {
    items: Array<any>;
    classic = AppSettings.defaultClassic;
    premium = AppSettings.defaultPremium;
    standout = AppSettings.defaultStandout;
    //calculate the unilever customer prices.
    calculateUnileverPricing(unilever: Array<CustomerAdvertisementList>) {
        let total = 0;
        let classicCount = 0;
        let eligibleDiscount;

        unilever.forEach((item, index) => {
            if (item.adType == AppSettings.classic) {
                classicCount++;
            }
            eligibleDiscount = Math.floor(classicCount / AppSettings.unileverClassicDeal);
        })
        unilever.forEach((item) => {
            if (item.adType == AppSettings.classic) {
                total += this.classic;
            }
            else if (item.adType == AppSettings.premium) {
                total += this.premium;
            }
        })
        total -= this.classic * eligibleDiscount;
        return total;
    }
    //calculate the apple customer prices
    calculateApplePricing(apple: Array<CustomerAdvertisementList>) {
        let total = 0;
        let appleStandout = AppSettings.appleStandoutAmount;
        apple.forEach((item) => {
            if (item.adType == AppSettings.classic) {
                total += this.classic;
            }
            else if (item.adType == AppSettings.premium) {
                total += this.premium;
            }
            else if (item.adType == AppSettings.standout) {
                total += appleStandout;
            }

        })
        return total;
    }
    //Calculate the nike customer prices
    calculateNikePricing(nike: Array<CustomerAdvertisementList>) {
        let total = 0;
        let premiumCount = 0;
        let nikePremium = AppSettings.nikePremiumAmount;
        nike.forEach((item, index) => {
            if (item.adType == AppSettings.premium) {
                premiumCount++;
            }
        })
        nike.forEach((item) => {
            if (item.adType == AppSettings.classic) {
                total += this.classic;
            }
            else if (item.adType == AppSettings.premium) {
                if (premiumCount >= AppSettings.nikePremiumDeal) {
                    total += nikePremium;
                }
                else {
                    total += this.premium;
                }

            }
            else if (item.adType == AppSettings.standout) {
                total += this.standout;
            }

        })
        return total;
    }
    //Calculate the ford customer prices
    calculateFordPricing(ford: Array<CustomerAdvertisementList>) {
        let total = 0;
        let classicCount = 0;
        let premiumCount = 0;
        let fordPremium = AppSettings.fordPremiumAmount;
        let fordStandout = AppSettings.fordStandoutAmount;
        let eligibleDiscount;
        ford.forEach((item, index) => {
            if (item.adType == AppSettings.classic) {
                classicCount++;
            }
             if (item.adType == AppSettings.premium) {
                premiumCount++;
            }
            eligibleDiscount = Math.floor(classicCount / AppSettings.fordClassicDeal);
        })
        ford.forEach((item, index) => {
            if (item.adType == AppSettings.classic) {
                total += this.classic;
            }
            else if (item.adType == AppSettings.premium) {
                if (premiumCount >= AppSettings.fordPremiumDeal) {
                    total += fordPremium;
                }
                else {
                    total += this.premium;
                }

            }
            else if (item.adType == AppSettings.standout) {
                total += fordStandout;
            }

        })
        total -= this.classic * eligibleDiscount;
        return total;

    }

}