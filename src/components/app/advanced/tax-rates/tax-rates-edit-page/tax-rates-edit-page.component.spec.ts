import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRatesEditPageComponent } from './tax-rates-edit-page.component';

describe('TaxRatesEditPageComponent', () => {
  let component: TaxRatesEditPageComponent;
  let fixture: ComponentFixture<TaxRatesEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxRatesEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxRatesEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
