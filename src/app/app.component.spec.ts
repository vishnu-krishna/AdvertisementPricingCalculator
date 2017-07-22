import { PricingCalculationService } from './service/pricingcalculation';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule],
      providers: [PricingCalculationService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Seek advertisement pricing calculator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Seek advertisement pricing calculator');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Seek advertisement pricing calculator');
  }));

  it('the list of ad and customers should be empty', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.customerAdvertisementList.length).toBe(0);
  });

  it('the list of ad and customers should NOT be empty', () => {
    let model = {
      value: {
        ad: "standout",
        customer: "Nike"
      }
    }
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.addPayment(model);
    let compiled = fixture.debugElement.nativeElement;
    expect(app.customerAdvertisementList.length).toBe(1);
  });

  it('the list of advertisement and customers should  be empty when showPrices button is clicked', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let pricingCalculationService = fixture.debugElement.injector.get(PricingCalculationService);
    fixture.detectChanges();
    app.showCheckoutAmount();
    let compiled = fixture.debugElement.nativeElement;
    expect(app.customerAdvertisementList.length).toBe(0);
  });

  it('the pricing for unilever customer to be called', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let pricingCalculationService = fixture.debugElement.injector.get(PricingCalculationService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let total = 269.99;
    let spy = spyOn(pricingCalculationService, 'calculateUnileverPricing').and.callFake(() => {
      return total;
    });
    app.showUnileverPricing();
    expect(spy).toHaveBeenCalled();
  }));

  it('the pricing for apple customer to be called', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let pricingCalculationService = fixture.debugElement.injector.get(PricingCalculationService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let total = 269.99;
    let spy = spyOn(pricingCalculationService, 'calculateApplePricing').and.callFake(() => {
      return total;
    });
    app.showApplePricing();
    expect(spy).toHaveBeenCalled();
  }));

  it('the pricing for nike customer to be called', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let pricingCalculationService = fixture.debugElement.injector.get(PricingCalculationService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let total = 269.99;
    let spy = spyOn(pricingCalculationService, 'calculateNikePricing').and.callFake(() => {
      return total;
    });
    app.showNikePricing();
    expect(spy).toHaveBeenCalled();
  }));

  it('the pricing for ford customer to be called', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let pricingCalculationService = fixture.debugElement.injector.get(PricingCalculationService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let total = 269.99;
    let spy = spyOn(pricingCalculationService, 'calculateFordPricing').and.callFake(() => {
      return total;
    });
    app.showFordPricing();
    expect(spy).toHaveBeenCalled();
  }));
});
