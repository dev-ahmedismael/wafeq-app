import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRatesCreatePageComponent } from './tax-rates-create-page.component';

describe('TaxRatesCreatePageComponent', () => {
  let component: TaxRatesCreatePageComponent;
  let fixture: ComponentFixture<TaxRatesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxRatesCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxRatesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
